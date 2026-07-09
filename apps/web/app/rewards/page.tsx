"use client";

import { useState } from "react";
import { Copy, Gift, Link as LinkIcon, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function RewardsPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = "fyndo.com/r/user_12345";
  const credits = 150.0;
  const referrals = 12;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter">Rewards Hub</h1>
          <p className="text-muted-foreground mt-2">
            Invite friends and earn platform credits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2 bg-neutral-900 text-white rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Gift size={120} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Available Credits</h2>
            <div className="text-6xl font-bold tracking-tighter mb-8">
              ${credits.toFixed(2)}
            </div>

            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md">
              <div className="text-sm text-white/70 mb-2 font-medium uppercase tracking-wider">
                Your Referral Link
              </div>
              <div className="flex items-center gap-4">
                <code className="flex-1 bg-black/30 px-4 py-3 rounded-lg font-mono text-lg">
                  {referralLink}
                </code>
                <button
                  onClick={handleCopy}
                  className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  {copied ? (
                    "Copied!"
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Total Referrals</h2>
              <p className="text-muted-foreground">
                Friends who joined via your link.
              </p>
            </div>
            <div className="text-5xl font-bold mt-8">{referrals}</div>
          </motion.div>
        </div>

        <div className="bg-card border rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" /> Recent Activity
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <LinkIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">New Referral Signup</div>
                    <div className="text-sm text-muted-foreground">
                      User_{i}84... completed onboarding
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-green-500">+$15.00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
