import { expect, test, describe } from "vitest";
import { requireRole } from "../src/index";
import type { Profile } from "@fyndo/types";

// Mock Next.js Route Handler
function mockAdminRouteHandler(profile: Profile | null) {
  if (!requireRole(profile, "moderator")) {
    return { status: 403, body: "Forbidden" };
  }
  return { status: 200, body: "Admin Data" };
}

// Mock Server Action
async function mockAdminServerAction(profile: Profile | null) {
  if (!requireRole(profile, "admin")) {
    throw new Error("403 Forbidden");
  }
  return { success: true, action: "User Suspended" };
}

describe("Admin App RBAC Protections", () => {
  test("buyers and sellers receive 403 Forbidden on admin routes", () => {
    const buyerProfile = { role: "buyer" } as Profile;
    const sellerProfile = { role: "seller" } as Profile;

    // Testing Route Handlers
    expect(mockAdminRouteHandler(buyerProfile).status).toBe(403);
    expect(mockAdminRouteHandler(sellerProfile).status).toBe(403);

    // Testing Null (Unauthenticated)
    expect(mockAdminRouteHandler(null).status).toBe(403);
  });

  test("moderators and admins can access admin routes", () => {
    const modProfile = { role: "moderator" } as Profile;
    const adminProfile = { role: "admin" } as Profile;

    expect(mockAdminRouteHandler(modProfile).status).toBe(200);
    expect(mockAdminRouteHandler(adminProfile).status).toBe(200);
  });

  test("buyers and sellers throw 403 on admin server actions", async () => {
    const buyerProfile = { role: "buyer" } as Profile;
    const sellerProfile = { role: "seller" } as Profile;

    await expect(mockAdminServerAction(buyerProfile)).rejects.toThrow(
      "403 Forbidden",
    );
    await expect(mockAdminServerAction(sellerProfile)).rejects.toThrow(
      "403 Forbidden",
    );
  });

  test("admins can execute admin server actions", async () => {
    const adminProfile = { role: "admin" } as Profile;
    const result = await mockAdminServerAction(adminProfile);
    expect(result.success).toBe(true);
  });
});
