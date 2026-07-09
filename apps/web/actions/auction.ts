"use server";

import { placeBid, getCurrentAuctionState } from "@fyndo/auction";
import { broadcastNewBid, broadcastAuctionUpdate } from "@fyndo/realtime";
import { dispatchNotification } from "@fyndo/notifications";
import { createAuctionPreAuthorization } from "@fyndo/payments";
import { db, viewerSessions } from "@fyndo/database";
import { getUser } from "@fyndo/auth";

export async function joinAuctionRoom(streamId: string) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  // Step 1: Initialize SetupIntent
  const setupIntent = await createAuctionPreAuthorization(user.id, {
    userId: user.id,
    streamId,
  });

  // Keep it unverified until client confirms SetupIntent with Stripe Elements
  await db.insert(viewerSessions).values({
    streamId,
    userId: user.id,
    paymentVerified: false,
    setupIntentId: setupIntent.id,
  });

  return { clientSecret: setupIntent.client_secret };
}

export async function submitBid(
  auctionId: string,
  streamId: string,
  amount: number,
) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized");

  try {
    const result = await placeBid({
      auctionId,
      bidderId: user.id,
      streamId,
      amount,
      bidSource: "web",
    });

    // Fire & Forget broadcasts and notifications
    broadcastNewBid(auctionId, amount, user.id).catch(console.error);
    broadcastAuctionUpdate({
      auctionId,
      currentHighestBid: result.auction.currentHighestBid,
      topBidderId: user.id,
      endTime: result.auction.endTime
        ? result.auction.endTime.toISOString()
        : null,
      status: result.auction.status,
    }).catch(console.error);

    dispatchNotification({
      type: "seller_received_bid",
      auctionId,
      sellerId: "unknown-for-now", // Resolve seller internally
      amount,
    }).catch(console.error);

    return { success: true, bid: result.bid };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function fetchAuctionState(auctionId: string) {
  return await getCurrentAuctionState(auctionId);
}
