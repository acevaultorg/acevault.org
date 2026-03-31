import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AceVault — Secure Digital Asset Management",
  description:
    "AceVault provides enterprise-grade security for your digital assets. Protect, manage, and grow your portfolio with confidence.",
  openGraph: {
    title: "AceVault — Secure Digital Asset Management",
    description:
      "Enterprise-grade security for your digital assets. Protect, manage, and grow your portfolio with confidence.",
    url: "https://acevault.org",
    siteName: "AceVault",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
