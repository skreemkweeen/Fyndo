import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { PageTransition } from "../components/page-transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fyndo - Core Marketplace & Social Discovery",
  description: "The premier destination for highly-curated luxury products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
