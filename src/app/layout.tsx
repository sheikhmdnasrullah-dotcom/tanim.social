import type { Metadata } from "next";
import { Inter, Inter_Tight, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasrullah Tanim",
  description: "Content production, AI automation, and outbound systems that scale. I build operational infrastructure for founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${syne.variable}`}>
      <body className="antialiased font-inter bg-[var(--color-background)] text-[var(--color-text-main)]">
        {children}
      </body>
    </html>
  );
}
