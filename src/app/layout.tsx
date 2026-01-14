import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://instainstru.com"),
  title: {
    default: "iNSTAiNSTRU — The NYC Lessons Marketplace",
    template: "%s | iNSTAiNSTRU",
  },
  description:
    "Book vetted instructors for music, tutoring, fitness, languages & more in NYC. Instant booking, no approval needed. Background-checked instructors.",
  keywords: [
    "music lessons NYC",
    "private tutoring New York",
    "fitness instructor NYC",
    "language tutor Manhattan",
    "piano lessons Brooklyn",
    "guitar teacher NYC",
    "math tutor New York",
    "personal trainer Manhattan",
    "Spanish tutor NYC",
    "art classes New York",
    "kids activities NYC",
    "vetted instructors",
    "background checked tutors",
    "instant booking lessons",
  ],
  authors: [{ name: "iNSTAiNSTRU" }],
  creator: "iNSTAiNSTRU",
  publisher: "iNSTAiNSTRU",
  alternates: {
    canonical: "https://instainstru.com",
  },
  openGraph: {
    title: "iNSTAiNSTRU — The NYC Lessons Marketplace",
    description:
      "Book vetted instructors for music, tutoring, fitness, languages & more in NYC. Instant booking, no approval needed.",
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
    description: "Book vetted instructors for music, tutoring, fitness, languages & more in NYC.",
    images: ["https://assets.instainstru.com/backgrounds/auth/default.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://beta.instainstru.com" />
        <link rel="preconnect" href="https://beta.instainstru.com" />
        <link rel="dns-prefetch" href="https://assets.instainstru.com" />
        <link
          rel="preconnect"
          href="https://assets.instainstru.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://assets.instainstru.com/animations/landing-page.mp4"
          as="video"
          type="video/mp4"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "iNSTAiNSTRU",
              alternateName: "InstaInstru",
              description:
                "Book vetted instructors for music, tutoring, fitness, languages & more in NYC. Instant booking, no approval needed.",
              url: "https://instainstru.com",
              logo: "https://assets.instainstru.com/brand/logo.webp",
              foundingDate: "2025",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "New York City",
              },
              serviceType: [
                "Music Lessons",
                "Private Tutoring",
                "Fitness Training",
                "Language Lessons",
                "Art Classes",
                "Kids Activities",
              ],
              slogan: "Instant learning with iNSTAiNSTRU",
              knowsAbout: [
                "Music instruction",
                "Academic tutoring",
                "Fitness training",
                "Language learning",
                "Arts education",
                "NYC instructors",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://instainstru.com/#business",
              name: "iNSTAiNSTRU",
              description:
                "NYC marketplace for booking vetted instructors for music, tutoring, fitness, languages and more.",
              url: "https://instainstru.com",
              logo: "https://assets.instainstru.com/brand/logo.webp",
              telephone: "",
              email: "support@instainstru.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.7128,
                longitude: -74.006,
              },
              areaServed: [
                { "@type": "City", name: "New York" },
                { "@type": "Borough", name: "Manhattan" },
                { "@type": "Borough", name: "Brooklyn" },
                { "@type": "Borough", name: "Queens" },
              ],
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-surface text-surface-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
