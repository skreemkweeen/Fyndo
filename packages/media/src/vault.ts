import { createClient } from "@supabase/supabase-js";
import { getUser } from "@fyndo/auth";

/**
 * Digital Goods Vault
 * Generates a secure, time-limited signed URL for a digital payload.
 */
export async function generateDigitalGoodDownloadUrl(
  filePath: string,
  expiresInSeconds: number = 3600, // 1 hour default
): Promise<string> {
  // Validate that the user exists (and possibly they actually purchased it)
  // In a real implementation, you'd check `orders` to ensure userId purchased this filePath
  const user = await getUser();
  if (!user) {
    throw new Error("Unauthorized to access digital goods");
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const { data, error } = await supabase.storage
    .from("digital-goods")
    .createSignedUrl(filePath, expiresInSeconds);

  if (error || !data) {
    throw new Error(
      `Failed to generate signed download URL: ${error?.message}`,
    );
  }

  return data.signedUrl;
}
