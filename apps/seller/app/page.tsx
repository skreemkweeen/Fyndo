"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Eye, Package, DollarSign } from "lucide-react";

export default function DashboardPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-white mb-2">
            Dashboard
          </h1>
          <p className="text-neutral-400">
            Welcome back, Ninth Note. Here&apos;s your brand overview.
          </p>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2">
          Start Livestream <ArrowUpRight className="w-4 h-4" />
        </button>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[160px]"
      >
        {/* Total Revenue - Large Bento Box */}
        <motion.div
          variants={item}
          className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-emerald-400 text-sm font-medium flex items-center gap-1">
                +14.2% <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <div>
              <p className="text-neutral-400 font-medium mb-2">Total Revenue</p>
              <h2 className="text-5xl font-black tracking-tighter text-white">
                $124,500
                <span className="text-2xl text-neutral-500 font-normal">
                  .00
                </span>
              </h2>
            </div>
          </div>

          {/* Animated Bar Chart Background */}
          <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between px-8 pb-8 opacity-20 pointer-events-none gap-2">
            {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                className="w-full bg-white rounded-t-sm"
              />
            ))}
          </div>
        </motion.div>

        {/* Active Auction Watchers */}
        <motion.div
          variants={item}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6 flex flex-col justify-between"
        >
          <div className="p-3 bg-white/5 rounded-xl w-fit">
            <Eye className="w-5 h-5 text-neutral-300" />
          </div>
          <div>
            <p className="text-neutral-400 text-sm font-medium mb-1">
              Active Watchers
            </p>
            <h3 className="text-3xl font-bold text-white">1,248</h3>
          </div>
        </motion.div>

        {/* Real-time Viewers */}
        <motion.div
          variants={item}
          className="bg-rose-500/10 border border-rose-500/20 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-rose-500 text-xs font-bold tracking-wider uppercase">
              Live Now
            </span>
          </div>
          <div className="p-3 bg-rose-500/20 rounded-xl w-fit mb-4 text-rose-500">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-rose-200/70 text-sm font-medium mb-1">
              Livestream Viewers
            </p>
            <h3 className="text-3xl font-bold text-white">4,892</h3>
          </div>
        </motion.div>

        {/* Pending Orders */}
        <motion.div
          variants={item}
          className="md:col-span-2 bg-neutral-900 border border-white/10 rounded-3xl p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white/5 rounded-xl w-fit">
              <Package className="w-5 h-5 text-neutral-300" />
            </div>
            <a
              href="#"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              View all
            </a>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-neutral-400 text-sm font-medium mb-1">
                Pending Fulfillment
              </p>
              <h3 className="text-3xl font-bold text-white">
                34{" "}
                <span className="text-base font-normal text-neutral-500">
                  orders
                </span>
              </h3>
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center z-[${5 - i}]`}
                >
                  <Package className="w-4 h-4 text-neutral-500" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
