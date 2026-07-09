"use client";

import { useState } from "react";
import { Link2, Users, DollarSign, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function SellerAffiliateDashboard() {
  const [links] = useState([
    {
      id: "1",
      slug: "ninth-note-summer",
      clicks: 1240,
      conversions: 45,
      revenue: 4500,
    },
    {
      id: "2",
      slug: "element-ux-bundle",
      clicks: 890,
      conversions: 22,
      revenue: 2200,
    },
  ]);

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tighter">
          Affiliate Network
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your creators and track referral performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Affiliates", value: "24", icon: Users },
          {
            label: "Total Generated Revenue",
            value: "$12,450",
            icon: DollarSign,
          },
          { label: "Average Conversion Rate", value: "3.2%", icon: Activity },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border p-6 rounded-2xl"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            <div className="text-3xl font-bold mt-1">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-card border rounded-3xl overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center bg-muted/20">
          <h2 className="text-xl font-semibold">Active Links</h2>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 flex items-center gap-2">
            <Link2 className="w-4 h-4" /> Create Link
          </button>
        </div>
        <div className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-6 font-medium text-muted-foreground">Slug</th>
                <th className="p-6 font-medium text-muted-foreground">
                  Clicks
                </th>
                <th className="p-6 font-medium text-muted-foreground">
                  Conversions
                </th>
                <th className="p-6 font-medium text-muted-foreground">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody>
              {links.map((link) => (
                <tr
                  key={link.id}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="p-6 font-mono text-sm">{link.slug}</td>
                  <td className="p-6">{link.clicks}</td>
                  <td className="p-6">{link.conversions}</td>
                  <td className="p-6 font-semibold">${link.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
