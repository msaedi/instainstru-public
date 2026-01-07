import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://instainstru.com"),
  title: "iNSTAiNSTRU — The NYC Lessons Marketplace",
  description:
    "Book vetted instructors for music, tutoring, fitness, languages & more. Instant booking, no approval needed.",
  openGraph: {
    title: "iNSTAiNSTRU — The NYC Lessons Marketplace",
    description:
      "Book vetted instructors for music, tutoring, fitness, languages & more. Instant booking, no approval needed.",
    type: "website",
    locale: "en_US",
    url: "https://instainstru.com",
    siteName: "iNSTAiNSTRU",
    images: [
      {
        url: "https://assets.instainstru.com/backgrounds/auth/default.webp",
        width: 1200,
        height: 630,
        alt: "iNSTAiNSTRU - The NYC Lessons Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iNSTAiNSTRU — The NYC Lessons Marketplace",
    description: "Book vetted instructors for music, tutoring, fitness, languages & more.",
    images: ["https://assets.instainstru.com/backgrounds/auth/default.webp"],
  },
  icons: {
    icon: "/favicon.ico",
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
