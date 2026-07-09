import { describe, it, expect, vi, beforeEach } from "vitest";
import { validateAndCalculatePromo } from "../src/promo";
import { db } from "@fyndo/database";

vi.mock("@fyndo/database", () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    set: vi.fn().mockReturnThis(),
  },
  promoCodes: {
    id: "id",
    code: "code",
    currentUses: "current_uses",
  },
}));

describe("Promo Code Engine", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calculates percentage discount correctly", async () => {
    const mockPromo = {
      id: "promo_123",
      code: "SUMMER20",
      discountType: "percentage",
      discountValue: 20,
      maxUses: 100,
      currentUses: 0,
      minCartValue: 5000,
      expiresAt: new Date(Date.now() + 100000), // future
    };

    vi.mocked(db.limit).mockResolvedValueOnce([mockPromo] as any);

    const result = await validateAndCalculatePromo("SUMMER20", 10000); // $100 cart
    expect(result.isValid).toBe(true);
    expect(result.discountAmount).toBe(2000); // $20 discount
  });

  it("rejects expired promo codes", async () => {
    const mockPromo = {
      id: "promo_123",
      code: "SUMMER20",
      discountType: "percentage",
      discountValue: 20,
      currentUses: 0,
      minCartValue: 0,
      expiresAt: new Date(Date.now() - 100000), // past
    };

    vi.mocked(db.limit).mockResolvedValueOnce([mockPromo] as any);

    const result = await validateAndCalculatePromo("SUMMER20", 10000);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Promo code expired");
  });

  it("rejects max uses exceeded", async () => {
    const mockPromo = {
      id: "promo_123",
      code: "SUMMER20",
      discountType: "percentage",
      discountValue: 20,
      maxUses: 10,
      currentUses: 10,
      minCartValue: 0,
    };

    vi.mocked(db.limit).mockResolvedValueOnce([mockPromo] as any);

    const result = await validateAndCalculatePromo("SUMMER20", 10000);
    expect(result.isValid).toBe(false);
    expect(result.error).toBe("Promo code usage limit reached");
  });

  it("rejects when cart minimum is not met", async () => {
    const mockPromo = {
      id: "promo_123",
      code: "SUMMER20",
      discountType: "fixed",
      discountValue: 1000,
      currentUses: 0,
      minCartValue: 5000, // $50 min
    };

    vi.mocked(db.limit).mockResolvedValueOnce([mockPromo] as any);

    const result = await validateAndCalculatePromo("SUMMER20", 4000); // $40 cart
    expect(result.isValid).toBe(false);
    expect(result.error).toMatch(/Minimum cart value/);
  });
});
