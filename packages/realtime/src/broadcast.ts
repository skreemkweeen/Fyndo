import { createClient } from "@supabase/supabase-js";

// We create a server-side client that bypasses RLS for broadcasting
function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SECRET_KEY; // Requires service_role key to broadcast freely

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY.");
  }

  return createClient(supabaseUrl, supabaseServiceKey);
}

export type AuctionStatePayload = {
  auctionId: string;
  currentHighestBid: number;
  topBidderId: string;
  endTime: string | null;
  status: string;
};

export async function broadcastAuctionUpdate(payload: AuctionStatePayload) {
  const supabase = getSupabaseAdmin();

  // Realtime Broadcast across the auction channel
  const channel = supabase.channel(`auction:${payload.auctionId}`);

  await channel.send({
    type: "broadcast",
    event: "auction_update",
    payload,
  });
}

export async function broadcastNewBid(
  auctionId: string,
  amount: number,
  bidderId: string,
) {
  const supabase = getSupabaseAdmin();
  const channel = supabase.channel(`auction:${auctionId}`);

  await channel.send({
    type: "broadcast",
    event: "new_bid",
    payload: { amount, bidderId },
  });
}
