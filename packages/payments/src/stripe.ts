import Stripe from "stripe";

/**
 * Singleton Stripe instance, strictly server-side.
 */
function getStripe(): Stripe {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    throw new Error("STRIPE_SECRET_KEY is missing from environment variables.");
  }

  return new Stripe(secret, {
    apiVersion: "2025-02-24.acacia",
    typescript: true,
  });
}

/**
 * Creates a SetupIntent for auction pre-authorization.
 * This verifies the buyer has a valid payment method before entering the room.
 */
export async function createAuctionPreAuthorization(
  customerId: string,
  metadata: { userId: string; streamId: string },
) {
  const stripe = getStripe();
  const setupIntent = await stripe.setupIntents.create({
    customer: customerId,
    payment_method_types: ["card", "link", "amazon_pay"],
    metadata,
    usage: "off_session", // We will charge them later if they win
  });
  return setupIntent;
}

/**
 * Captures the winning bid payment by creating a PaymentIntent
 * utilizing the saved payment method from the SetupIntent.
 */
export async function captureWinningBidPayment({
  customerId,
  paymentMethodId,
  amount,
  currency = "usd",
  description,
  metadata,
  transferData,
}: {
  customerId: string;
  paymentMethodId: string;
  amount: number;
  currency?: string;
  description: string;
  metadata: any;
  transferData?: {
    destination: string; // the seller's connected account ID
    amount: number; // the amount to transfer to the seller (amount - fee - affiliate commission)
  };
}) {
  const stripe = getStripe();

  // Create and immediately confirm the PaymentIntent
  const paymentIntent = await stripe.paymentIntents.create(
    {
      amount, // In cents
      currency,
      customer: customerId,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
      description,
      metadata,
      ...(transferData
        ? {
            transfer_data: transferData,
            on_behalf_of: transferData.destination,
          }
        : {}),
    },
    {
      idempotencyKey:
        metadata.idempotencyKey || `pi_${customerId}_${Date.now()}`,
    },
  );

  return paymentIntent;
}

export async function cancelAuctionPreAuthorization(setupIntentId: string) {
  const stripe = getStripe();
  return await stripe.setupIntents.cancel(setupIntentId);
}

export async function refundAuctionPayment(paymentIntentId: string) {
  const stripe = getStripe();
  return await stripe.refunds.create({
    payment_intent: paymentIntentId,
  });
}

export async function getPaymentIntentStatus(paymentIntentId: string) {
  const stripe = getStripe();
  return await stripe.paymentIntents.retrieve(paymentIntentId);
}
