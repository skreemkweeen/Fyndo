import type { Profile } from "@fyndo/types";

export type Role = "buyer" | "seller" | "creator" | "moderator" | "admin";

const roleHierarchy: Record<Role, number> = {
  buyer: 1,
  seller: 2,
  creator: 3,
  moderator: 4,
  admin: 5,
};

export function hasPermission(userRole: string, requiredRole: Role): boolean {
  if (!roleHierarchy[userRole as Role]) return false;
  return roleHierarchy[userRole as Role] >= roleHierarchy[requiredRole];
}

export function requireRole(
  profile: Profile | null,
  requiredRole: Role,
): boolean {
  if (!profile) return false;
  return hasPermission(profile.role, requiredRole);
}
