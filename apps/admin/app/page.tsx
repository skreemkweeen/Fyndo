"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingUp, CheckCircle, Clock } from "lucide-react";

export default function AdminDashboardPage() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-black tracking-tight text-white mb-2">
          Operations Dashboard
        </h1>
        <p className="text-neutral-400">
          High-level platform health, escrow status, and system vitals.
        </p>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <motion.div
          variants={item}
          className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-40"
        >
          <div className="flex items-center justify-between">
            <span className="text-neutral-400 font-medium">
              Funds in Escrow
            </span>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tighter">$2.4M</h2>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-40"
        >
          <div className="flex items-center justify-between">
            <span className="text-neutral-400 font-medium">
              Pending Moderation
            </span>
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-rose-500" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-black tracking-tighter">142</h2>
            <span className="text-sm font-medium text-rose-400">+12%</span>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-40"
        >
          <div className="flex items-center justify-between">
            <span className="text-neutral-400 font-medium">Open Disputes</span>
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tighter">28</h2>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        className="bg-neutral-900 border border-white/10 rounded-2xl p-6"
      >
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-500" /> Shipping &
          Fulfillment Orchestration
        </h3>
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="text-neutral-500 border-b border-white/10">
            <tr>
              <th className="pb-3 font-medium">Order ID</th>
              <th className="pb-3 font-medium">Logistics Adapter</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium text-right">Escrow Release</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr className="hover:bg-white/[0.02]">
              <td className="py-4 font-mono text-xs">ORD-9A82B3</td>
              <td className="py-4">
                <span className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md text-xs font-mono border border-white/10">
                  EasyPost_Mock
                </span>
              </td>
              <td className="py-4">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{" "}
                  Delivered
                </span>
              </td>
              <td className="py-4 text-right">
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-1.5 rounded-lg font-medium text-xs transition-colors">
                  Force Transfer
                </button>
              </td>
            </tr>
            <tr className="hover:bg-white/[0.02]">
              <td className="py-4 font-mono text-xs">ORD-7C44E1</td>
              <td className="py-4">
                <span className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md text-xs font-mono border border-white/10">
                  Shippo_Hazmat
                </span>
              </td>
              <td className="py-4">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> In
                  Transit
                </span>
              </td>
              <td className="py-4 text-right">
                <span className="text-neutral-500 text-xs font-medium italic">
                  Awaiting Scan
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
