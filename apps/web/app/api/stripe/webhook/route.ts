import { NextResponse } from "next/server";
import Stripe from "stripe";
import { dispatchNotification } from "@fyndo/notifications";
import {
  processInvoicePaymentSucceeded,
  processSubscriptionDeleted,
} from "@fyndo/payments";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !secret) {
    // In local dev without webhook secret, just accept it blindly (not safe for production)
    console.warn(
      "Missing STRIPE_WEBHOOK_SECRET or signature. Ensure this is only in dev!",
    );
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: "2025-02-24.acacia",
    });

    let event;
    if (sig && secret) {
      event = stripe.webhooks.constructEvent(body, sig, secret);
    } else {
      // Unverified fallback for local dev
      event = JSON.parse(body) as Stripe.Event;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        // Capture logic
        await dispatchNotification({
          type: "payment_captured",
          auctionId: paymentIntent.metadata.auctionId,
          userId: paymentIntent.metadata.userId,
          amount: paymentIntent.amount,
        });
        break;
      }

      case "payment_intent.payment_failed": {
        const failedIntent = event.data.object as Stripe.PaymentIntent;
        await dispatchNotification({
          type: "payment_failed",
          auctionId: failedIntent.metadata.auctionId,
          userId: failedIntent.metadata.userId,
          amount: failedIntent.amount,
        });
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        await processInvoicePaymentSucceeded(invoice);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await processSubscriptionDeleted(subscription);
        break;
      }

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook Error: ${errorMessage}`);
    return new NextResponse(`Webhook Error: ${errorMessage}`, { status: 400 });
  }
}
