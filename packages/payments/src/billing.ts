import { db, subscriptions } from "@fyndo/database";
import { eq } from "drizzle-orm";
import type Stripe from "stripe";

export async function processInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  if (!invoice.subscription) return;
  const stripeSubscriptionId =
    typeof invoice.subscription === "string"
      ? invoice.subscription
      : invoice.subscription.id;

  // Assume the invoice contains customer email or metadata to link user, or look it up from customer
  // For robustness, we should fetch the subscription from Stripe if we only have the ID
  const subscriptionStatus = "active";
  const periodEnd = new Date(
    (invoice.lines.data[0].period.end || Date.now() / 1000 + 30 * 86400) * 1000,
  );
  const periodStart = new Date(
    (invoice.lines.data[0].period.start || Date.now() / 1000) * 1000,
  );

  // Update existing or wait for checkout session completed to insert
  // For simplicity, we just update it if it exists. (checkout.session.completed typically creates it)
  await db
    .update(subscriptions)
    .set({
      status: subscriptionStatus,
      currentPeriodStart: periodStart,
      currentPeriodEnd: periodEnd,
      updatedAt: new Date(),
    })
    .where(eq(subscriptions.stripeSubscriptionId, stripeSubscriptionId));
}

export async function processSubscriptionDeleted(
  subscription: Stripe.Subscription,
) {
  await db
    .update(subscriptions)
    .set({
      status: "canceled",
      currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      updatedAt: new Date(),
    })
    .where(eq(subscriptions.stripeSubscriptionId, subscription.id));
}
