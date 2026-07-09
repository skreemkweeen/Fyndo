import { describe, it, expect, vi, beforeEach } from "vitest";
import { calculateAffiliateCommission } from "../src/affiliate";
import { db } from "@fyndo/database";

vi.mock("@fyndo/database", () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
  },
  affiliateLinks: {
    slug: "slug",
  },
}));

describe("Affiliate Engine", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calculates commission correctly", async () => {
    const mockLink = {
      affiliateId: "aff_123",
      commissionRate: 15, // 15%
    };

    vi.mocked(db.limit).mockResolvedValueOnce([mockLink] as any);

    const split = await calculateAffiliateCommission("influencer-link", 10000); // $100
    expect(split).toBeDefined();
    expect(split?.affiliateId).toBe("aff_123");
    expect(split?.commissionAmount).toBe(1500); // $15
  });

  it("returns null for invalid affiliate link", async () => {
    vi.mocked(db.limit).mockResolvedValueOnce([] as any);
    const split = await calculateAffiliateCommission("invalid-link", 10000);
    expect(split).toBeNull();
  });
});
