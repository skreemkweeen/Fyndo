import { db, subscriptions, exclusiveContentAccess } from "@fyndo/database";
import { and, eq, inArray } from "drizzle-orm";

export async function hasAccessToExclusiveContent(
  userId: string,
  contentId: string,
): Promise<boolean> {
  // Find the required tier for the content
  const contentGating = await db
    .select()
    .from(exclusiveContentAccess)
    .where(eq(exclusiveContentAccess.contentId, contentId));

  if (contentGating.length === 0) {
    // If not in the gating table, it is not exclusive
    return true;
  }

  const requiredTierIds = contentGating.map((g) => g.tierId);

  // Check if the user has an active subscription to any of those tiers
  const activeSubs = await db
    .select()
    .from(subscriptions)
    .where(
      and(
        eq(subscriptions.subscriberId, userId),
        eq(subscriptions.status, "active"),
        inArray(subscriptions.tierId, requiredTierIds),
      ),
    );

  return activeSubs.length > 0;
}
