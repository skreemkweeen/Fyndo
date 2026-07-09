export type NotificationEvent =
  | { type: "outbid"; auctionId: string; userId: string; newHighBid: number }
  | { type: "auction_won"; auctionId: string; userId: string; amount: number }
  | { type: "auction_lost"; auctionId: string; userId: string }
  | {
      type: "payment_captured";
      auctionId: string;
      userId: string;
      amount: number;
    }
  | {
      type: "payment_failed";
      auctionId: string;
      userId: string;
      amount: number;
    }
  | { type: "livestream_started"; streamId: string; sellerId: string }
  | { type: "auction_ending_soon"; auctionId: string }
  | {
      type: "seller_received_bid";
      auctionId: string;
      sellerId: string;
      amount: number;
    }
  | { type: "seller_auction_closed"; auctionId: string; sellerId: string };

/**
 * Dispatcher for internal notification events.
 * Currently just logs, but architected to push to email/SMS queues.
 */
export async function dispatchNotification(event: NotificationEvent) {
  // In production, this would publish to an SNS topic, RabbitMQ, or a DB queue.
  console.log(`[NOTIFICATION_DISPATCH] Type: ${event.type}`, event);

  // Future implementation:
  // await db.insert(notificationQueue).values({ type: event.type, payload: event });
}
