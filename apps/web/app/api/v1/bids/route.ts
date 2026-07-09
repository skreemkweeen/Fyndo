import { NextResponse } from "next/server";
import { db, bids, auctions } from "@fyndo/database";
import { eq } from "drizzle-orm";
import { z } from "zod";

const bidSchema = z.object({
  auctionId: z.string().uuid(),
  amount: z.number().int().positive(),
  bidderId: z.string().uuid(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = bidSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error.issues }, { status: 400 });
    }

    const { auctionId, amount, bidderId } = result.data;

    // VERY simplified logic for the API wrapper
    const [auction] = await db
      .select()
      .from(auctions)
      .where(eq(auctions.id, auctionId))
      .limit(1);

    if (!auction) {
      return NextResponse.json({ error: "Auction not found" }, { status: 404 });
    }

    if (amount <= auction.currentHighestBid) {
      return NextResponse.json(
        { error: "Bid must be higher than current highest bid" },
        { status: 400 },
      );
    }

    const [newBid] = await db
      .insert(bids)
      .values({
        auctionId,
        bidderId,
        amount,
        status: "accepted",
      })
      .returning();

    await db
      .update(auctions)
      .set({ currentHighestBid: amount })
      .where(eq(auctions.id, auctionId));

    return NextResponse.json({ bid: newBid }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
