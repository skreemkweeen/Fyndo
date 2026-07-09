import { db, promoCodes, referrals } from "@fyndo/database";
import { eq, and, sql, gte } from "drizzle-orm";

export interface PromoValidationResult {
  isValid: boolean;
  discountAmount: number; // in cents
  error?: string;
  promoId?: string;
}

export async function validateAndCalculatePromo(
  code: string,
  cartTotal: number, // in cents
): Promise<PromoValidationResult> {
  const [promo] = await db
    .select()
    .from(promoCodes)
    .where(eq(promoCodes.code, code.toUpperCase()))
    .limit(1);

  if (!promo) {
    return { isValid: false, discountAmount: 0, error: "Promo code not found" };
  }

  if (promo.expiresAt && promo.expiresAt < new Date()) {
    return { isValid: false, discountAmount: 0, error: "Promo code expired" };
  }

  if (promo.maxUses && promo.currentUses >= promo.maxUses) {
    return {
      isValid: false,
      discountAmount: 0,
      error: "Promo code usage limit reached",
    };
  }

  if (cartTotal < promo.minCartValue) {
    return {
      isValid: false,
      discountAmount: 0,
      error: `Minimum cart value of $${(promo.minCartValue / 100).toFixed(2)} required`,
    };
  }

  let discountAmount = 0;
  if (promo.discountType === "fixed") {
    discountAmount = Math.min(promo.discountValue, cartTotal);
  } else if (promo.discountType === "percentage") {
    discountAmount = Math.floor((cartTotal * promo.discountValue) / 100);
  }

  return { isValid: true, discountAmount, promoId: promo.id };
}

export async function redeemPromo(promoId: string) {
  await db
    .update(promoCodes)
    .set({ currentUses: sql`${promoCodes.currentUses} + 1` })
    .where(eq(promoCodes.id, promoId));
}
