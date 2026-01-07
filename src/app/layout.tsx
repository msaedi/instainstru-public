import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: [
    "NYC lessons",
    "music lessons",
    "tutoring",
    "fitness training",
    "language lessons",
    "private instruction",
    "New York instructors",
  ],
  authors: [{ name: "iNSTAiNSTRU LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://instainstru.com",
    siteName: BRAND.name,
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-surface-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
