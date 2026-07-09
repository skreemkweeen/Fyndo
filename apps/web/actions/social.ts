"use server";

import { revalidatePath } from "next/cache";

export async function toggleFollow(userId: string) {
  // Mutate database via @fyndo/auth session validation
  // ...
  revalidatePath(`/creator/${userId}`);
  return true;
}
