import type { Metadata } from "next";
import { Shield, LayoutDashboard, Scale, Search, Users } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fyndo Admin | Trust & Safety",
  description: "Platform Administration and Mediation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-black text-white flex">
        {/* Sidebar */}
        <aside className="w-64 bg-neutral-900 border-r border-white/10 flex flex-col">
          <div className="p-6 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-red-500" />
            </div>
            <div className="font-bold tracking-tight text-lg">FYNDO ADMIN</div>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            <a
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
            >
              <LayoutDashboard className="w-4 h-4" /> Operations
            </a>
            <a
              href="/moderation"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
            >
              <Shield className="w-4 h-4" /> Moderation Queue
            </a>
            <a
              href="/disputes"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
            >
              <Scale className="w-4 h-4" /> Disputes & Claims
            </a>
            <a
              href="/users"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
            >
              <Users className="w-4 h-4" /> User Management
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Topbar */}
          <header className="h-16 border-b border-white/10 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10 flex items-center px-8 justify-between">
            <div className="relative w-96">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search orders, users, or dispute IDs..."
                className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-white/30"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium">System Admin</div>
                <div className="text-xs text-red-400 uppercase tracking-wider font-bold">
                  God Mode Active
                </div>
              </div>
            </div>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
