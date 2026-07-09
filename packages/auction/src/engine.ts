import { db, auctions, bids, viewerSessions } from "@fyndo/database";
import { eq, and, sql } from "drizzle-orm";

export interface BidInput {
  auctionId: string;
  bidderId: string;
  streamId: string;
  amount: number; // in cents
  ipAddress?: string;
  deviceId?: string;
  bidSource?: string;
}

/**
 * Places a bid atomically using a SERIALIZABLE transaction.
 *
 * Rules enforced:
 * 1. Auction must be active and not expired.
 * 2. Bid amount must be higher than currentHighestBid + minimumIncrement.
 * 3. Bidder must have verified payment (via SetupIntent in viewerSessions).
 */
export async function placeBid(input: BidInput) {
  return await db.transaction(
    async (tx) => {
      // 1. Verify bidder is eligible and has pre-authorized payment
      const session = await tx.query.viewerSessions.findFirst({
        where: and(
          eq(viewerSessions.streamId, input.streamId),
          eq(viewerSessions.userId, input.bidderId),
        ),
      });

      if (!session || !session.paymentVerified) {
        throw new Error("Bidder has not verified payment for this auction.");
      }

      // 2. Lock the auction row using SELECT ... FOR UPDATE
      // This prevents race conditions where two users bid simultaneously
      const auctionRows = await tx
        .select()
        .from(auctions)
        .where(eq(auctions.id, input.auctionId))
        .for("update");

      const auction = auctionRows[0];

      if (!auction) {
        throw new Error("Auction not found.");
      }

      if (auction.status !== "active") {
        throw new Error(
          `Auction is not active. Current status: ${auction.status}`,
        );
      }

      if (auction.endTime && new Date() > auction.endTime) {
        throw new Error("Auction has expired.");
      }

      // 3. Validate bid amount
      const requiredAmount =
        auction.currentHighestBid === 0
          ? auction.startingBid
          : auction.currentHighestBid + auction.minimumIncrement;

      if (input.amount < requiredAmount) {
        throw new Error(`Bid amount must be at least ${requiredAmount} cents.`);
      }

      // 4. Record the immutable bid
      const [newBid] = await tx
        .insert(bids)
        .values({
          auctionId: input.auctionId,
          bidderId: input.bidderId,
          amount: input.amount,
          status: "accepted",
          proxyBid: false,
          ipAddress: input.ipAddress,
          deviceId: input.deviceId,
          paymentVerified: true, // we verified it above
          bidSource: input.bidSource || "web",
        })
        .returning();

      // 5. Update outbid status for previous high bids (optional optimization here)
      if (auction.currentHighestBid > 0) {
        await tx
          .update(bids)
          .set({ status: "outbid" })
          .where(
            and(
              eq(bids.auctionId, input.auctionId),
              eq(bids.status, "accepted"),
              sql`${bids.id} != ${newBid.id}`,
            ),
          );
      }

      // 6. Update the auction's current high bid and apply anti-sniping
      const newEndTime =
        auction.endTime && auction.antiSnipingSeconds > 0
          ? new Date(
              Math.max(
                auction.endTime.getTime(),
                Date.now() + auction.antiSnipingSeconds * 1000,
              ),
            )
          : auction.endTime;

      const [updatedAuction] = await tx
        .update(auctions)
        .set({
          currentHighestBid: input.amount,
          endTime: newEndTime,
          updatedAt: new Date(),
        })
        .where(eq(auctions.id, input.auctionId))
        .returning();

      return {
        bid: newBid,
        auction: updatedAuction,
      };
    },
    {
      isolationLevel: "serializable",
    },
  );
}

export async function getCurrentAuctionState(auctionId: string) {
  return await db.query.auctions.findFirst({
    where: eq(auctions.id, auctionId),
  });
}
