import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fyndo Seller OS",
  description: "Advanced operating system for premium brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-neutral-950 text-white flex">
        {/* Sidebar */}
        <aside className="w-64 bg-neutral-900 border-r border-white/10 p-6 flex flex-col">
          <div className="text-2xl font-black tracking-tighter mb-12">
            FYNDO<span className="text-neutral-500 font-normal ml-1">OS</span>
          </div>
          <nav className="flex-1 space-y-2">
            <a
              href="/"
              className="block px-4 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/inventory"
              className="block px-4 py-3 rounded-lg text-neutral-400 font-medium hover:bg-white/10 hover:text-white transition-colors"
            >
              Inventory
            </a>
            <a
              href="/storefront"
              className="block px-4 py-3 rounded-lg text-neutral-400 font-medium hover:bg-white/10 hover:text-white transition-colors"
            >
              Storefront Builder
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
