"use client";

import {
  MessageSquare,
  Lock,
  FileText,
  ChevronRight,
  Shield,
} from "lucide-react";

export default function DisputesPage() {
  return (
    <div className="p-10 max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
      <header className="mb-8 shrink-0">
        <h1 className="text-3xl font-black tracking-tight text-white mb-2">
          Disputes & Claims Ledger
        </h1>
        <p className="text-neutral-400">
          Immutable mediation center for chargebacks and order conflicts.
        </p>
      </header>

      <div className="flex flex-1 gap-6 min-h-0">
        {/* Dispute List */}
        <div className="w-1/3 bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-white/10 bg-black/20">
            <h2 className="font-bold text-white">Active Cases</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* Active Item */}
            <div className="p-4 border-b border-white/5 bg-white/5 cursor-pointer relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
              <div className="flex justify-between items-start mb-2">
                <span className="font-mono text-xs font-bold text-amber-500">
                  DISP-98A
                </span>
                <span className="text-[10px] text-neutral-500">2h ago</span>
              </div>
              <h3 className="font-medium text-sm text-white mb-1">
                Item Not As Described
              </h3>
              <p className="text-xs text-neutral-400">Order: ORD-1192X</p>
            </div>

            {/* Other Item */}
            <div className="p-4 border-b border-white/5 hover:bg-white/[0.02] cursor-pointer transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="font-mono text-xs font-bold text-neutral-500">
                  DISP-94C
                </span>
                <span className="text-[10px] text-neutral-500">1d ago</span>
              </div>
              <h3 className="font-medium text-sm text-white mb-1">
                Package Never Arrived
              </h3>
              <p className="text-xs text-neutral-400">Order: ORD-7742Y</p>
            </div>
          </div>
        </div>

        {/* Dispute Details / Ledger */}
        <div className="flex-1 bg-neutral-900 border border-white/10 rounded-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-white/10 bg-black/20 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-bold text-xl text-white">
                  Item Not As Described
                </h2>
                <span className="bg-amber-500/20 text-amber-500 text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm">
                  Under Review
                </span>
              </div>
              <p className="text-sm text-neutral-400 font-mono">
                DISP-98A • ORD-1192X
              </p>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-neutral-200 transition-colors">
              Resolve Case <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-white">B</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm text-white">
                    Buyer (buyer_71x)
                  </span>
                  <span className="text-xs text-neutral-500">
                    Oct 24, 2:14 PM
                  </span>
                </div>
                <div className="bg-neutral-800 p-4 rounded-xl rounded-tl-none text-sm text-neutral-200 mb-2">
                  The vintage jacket arrived but it has a large tear on the left
                  sleeve that was not shown in the livestream or the photos.
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1.5 rounded-lg border border-white/5 text-xs text-neutral-400 cursor-pointer hover:bg-white/5">
                    <FileText className="w-3 h-3" /> evidence_img1.jpg
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-indigo-300">S</span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1 justify-end">
                  <span className="text-xs text-neutral-500">
                    Oct 24, 3:30 PM
                  </span>
                  <span className="font-bold text-sm text-white">
                    Seller (Store: RetroRevive)
                  </span>
                </div>
                <div className="bg-indigo-600 p-4 rounded-xl rounded-tr-none text-sm text-white inline-block text-left">
                  The wear and tear was explicitly mentioned during the
                  livestream at the 14:20 mark. It is sold as-is.
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-red-900/50 border border-red-500/20 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm text-red-400">
                    System Admin
                  </span>
                  <span className="text-xs text-neutral-500">
                    Oct 24, 4:00 PM
                  </span>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl rounded-tl-none text-sm text-red-200">
                  Admin joined the mediation. Reviewing livestream VOD at 14:20
                  for confirmation.
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="relative">
              <textarea
                className="w-full bg-neutral-800 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-white/30 resize-none h-14"
                placeholder="Add an immutable message to the ledger..."
              />
              <button className="absolute right-2 top-2 p-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-1 mt-2 justify-end text-[10px] text-neutral-500 font-mono">
              <Lock className="w-3 h-3" /> Messages are cryptographically logged
              and cannot be deleted.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
