import { expect, test, describe } from "vitest";
import { hasPermission, requireRole } from "../src/index";
import type { Profile } from "@fyndo/types";

describe("RBAC Engine", () => {
  test("hasPermission correctly handles role hierarchy", () => {
    expect(hasPermission("buyer", "seller")).toBe(false);
    expect(hasPermission("seller", "buyer")).toBe(true);
    expect(hasPermission("admin", "buyer")).toBe(true);
    expect(hasPermission("admin", "admin")).toBe(true);
    expect(hasPermission("unknown_role", "buyer")).toBe(false);
  });

  test("requireRole handles valid profiles", () => {
    const profile = { role: "admin" } as Profile;
    expect(requireRole(profile, "seller")).toBe(true);
  });

  test("requireRole handles null profiles", () => {
    expect(requireRole(null, "buyer")).toBe(false);
  });
});
