import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nasrullah Tanim",
  description: "Content production, AI automation, and outbound systems that scale. I build operational infrastructure for founders.",
  openGraph: {
    title: "Nasrullah Tanim",
    description: "Content production, AI automation, and outbound systems that scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=Inter+Tight:wght@700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,700;9..144,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
