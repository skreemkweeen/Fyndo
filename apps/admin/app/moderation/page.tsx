"use client";

import { AlertTriangle, Shield, X, Search, Filter } from "lucide-react";
import { useState } from "react";

export default function ModerationPage() {
  const [cases] = useState([
    {
      id: "MOD-101",
      targetType: "product",
      targetId: "PROD-A",
      reason: "Potential Counterfeit",
      aiScore: 94,
      status: "pending",
      reporter: "AI_WATCHDOG",
    },
    {
      id: "MOD-102",
      targetType: "stream",
      targetId: "STRM-B",
      reason: "TOS Violation",
      aiScore: 88,
      status: "investigating",
      reporter: "user_88a",
    },
    {
      id: "MOD-103",
      targetType: "store",
      targetId: "STR-C",
      reason: "IP Infringement",
      aiScore: 72,
      status: "pending",
      reporter: "brand_rep",
    },
  ]);

  return (
    <div className="p-10 max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
      <header className="mb-8 shrink-0">
        <h1 className="text-3xl font-black tracking-tight text-white mb-2">
          Trust & Safety Queue
        </h1>
        <p className="text-neutral-400">
          AI-flagged cases and user reports pending manual review.
        </p>
      </header>

      <div className="bg-neutral-900 border border-white/10 rounded-2xl flex flex-col flex-1 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/20">
          <div className="flex gap-4">
            <button className="text-white font-medium text-sm border-b-2 border-red-500 pb-4 -mb-4">
              Pending Review (142)
            </button>
            <button className="text-neutral-500 hover:text-white font-medium text-sm pb-4 -mb-4 transition-colors">
              Investigating (18)
            </button>
            <button className="text-neutral-500 hover:text-white font-medium text-sm pb-4 -mb-4 transition-colors">
              Action Taken (8,421)
            </button>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-white/10 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="p-2 border border-white/10 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-3">
          {cases.map((c) => (
            <div
              key={c.id}
              className="bg-black/40 border border-white/5 rounded-xl p-5 flex items-start justify-between group hover:border-white/10 transition-colors"
            >
              <div className="flex gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${c.aiScore > 90 ? "bg-red-500/10" : "bg-amber-500/10"}`}
                >
                  <AlertTriangle
                    className={`w-6 h-6 ${c.aiScore > 90 ? "text-red-500" : "text-amber-500"}`}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-neutral-500">
                      {c.id}
                    </span>
                    <span className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      {c.targetType}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {c.reason}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-3">
                    Reported by:{" "}
                    <span className="font-mono text-neutral-300">
                      {c.reporter}
                    </span>
                  </p>

                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-medium text-indigo-300">
                      AI Confidence: {c.aiScore}%
                    </span>
                    <div className="w-32 h-1.5 bg-neutral-800 rounded-full ml-2 overflow-hidden">
                      <div
                        className="h-full bg-indigo-500"
                        style={{ width: `${c.aiScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
                  <X className="w-4 h-4" /> Dismiss
                </button>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                  <Shield className="w-4 h-4" /> Suspend
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
