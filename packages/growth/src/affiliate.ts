import { db, affiliateLinks } from "@fyndo/database";
import { eq } from "drizzle-orm";

export interface AffiliateSplit {
  affiliateId: string;
  commissionAmount: number; // in cents
}

export async function calculateAffiliateCommission(
  affiliateSlug: string,
  purchaseTotal: number, // total after promos, in cents
): Promise<AffiliateSplit | null> {
  const [link] = await db
    .select()
    .from(affiliateLinks)
    .where(eq(affiliateLinks.slug, affiliateSlug))
    .limit(1);

  if (!link) {
    return null;
  }

  // Calculate commission (e.g., 15 for 15%)
  const commissionAmount = Math.floor(
    (purchaseTotal * link.commissionRate) / 100,
  );

  return {
    affiliateId: link.affiliateId,
    commissionAmount,
  };
}
