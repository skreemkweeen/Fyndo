import { createClient } from "@supabase/supabase-js";
import { getUser } from "@fyndo/auth";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:54321",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "dummy-key",
);

export async function generateUploadUrl(
  userId: string,
  bucket: string,
  path: string,
) {
  // 1. Verify Authentication & RBAC
  const user = await getUser();
  if (!user || user.id !== userId) {
    throw new Error("Unauthorized to generate upload signature for this path.");
  }

  // 2. Generate signed upload URL from Supabase Storage
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUploadUrl(`${userId}/${path}`);

  if (error) {
    throw new Error(`Storage Error: ${error.message}`);
  }

  return {
    signedUrl: data.signedUrl,
    token: data.token,
    path: `${userId}/${path}`,
  };
}
