import { notFound } from "next/navigation";
import { generateLiveKitToken } from "../../../actions/live";
import { db, streams } from "@fyndo/database";
import { eq } from "drizzle-orm";
import { getUser } from "@fyndo/auth";

export const dynamic = "force-dynamic";

export default async function LiveStreamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Verify user is authenticated
  const user = await getUser();
  if (!user) {
    // In production, this would redirect to login
    throw new Error("Must be logged in to view streams.");
  }

  // Fetch Stream from DB
  const stream = await db.query.streams.findFirst({
    where: eq(streams.id, id),
  });

  if (!stream) {
    notFound();
  }

  // Try to generate LiveKit token, if it fails due to missing keys we render a fallback
  let liveKitToken = "";
  let liveKitError = false;

  try {
    liveKitToken = await generateLiveKitToken(id);
  } catch (err: unknown) {
    liveKitError = true;
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.warn("LiveKit integration error:", errorMessage);
  }

  // Fetch linked auction state if there is one
  // (In a complete implementation we'd link the current active auction to the stream)

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
      {/* Video Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {liveKitError || !liveKitToken ? (
          <div className="text-white flex flex-col items-center">
            <p className="text-2xl font-bold">Stream Offline or Missing Keys</p>
            <p className="text-neutral-400 mt-2">
              The broadcaster has not started the stream yet.
            </p>
          </div>
        ) : (
          <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-500">
            {/* LiveKit Player Component would mount here */}
            <p>[LiveKit Stream Active]</p>
          </div>
        )}
      </div>

      {/* Glassmorphism HUD Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 pointer-events-none">
        {/* Top Bar */}
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white font-medium text-sm">
              {stream.currentViewers} Viewers
            </span>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 text-white text-sm">
            Seller: @fyndo_seller
          </div>
        </div>

        {/* Bottom Section (Chat & Bid Controls) */}
        <div className="flex justify-between items-end pb-safe pointer-events-auto w-full gap-4">
          {/* Chat Feed */}
          <div className="w-1/3 h-64 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 rounded-xl">
            <div className="text-white text-sm space-y-2 max-h-full overflow-y-auto">
              <p>
                <span className="font-bold text-neutral-300">User1:</span>{" "}
                Let&apos;s go!
              </p>
              <p>
                <span className="font-bold text-neutral-300">User2:</span> Wow
                that jacket is amazing.
              </p>
            </div>
            <input
              type="text"
              placeholder="Say something..."
              className="mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white outline-none w-full text-sm"
            />
          </div>

          {/* Auction Product Card */}
          <div className="w-96 bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col items-center">
            <div className="w-full h-48 bg-neutral-800 rounded-xl mb-4" />{" "}
            {/* Image Placeholder */}
            <h2 className="text-white text-xl font-bold mb-1">
              Vintage Leather Jacket
            </h2>
            <p className="text-neutral-400 text-sm mb-6">Current Bid</p>
            <div className="text-4xl font-black text-white mb-6 tracking-tighter">
              $450
            </div>
            <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform active:scale-95 flex items-center justify-center space-x-2">
              <span>Bid $500</span>
            </button>
            <p className="text-neutral-500 text-xs mt-3">
              Payment method pre-authorized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
