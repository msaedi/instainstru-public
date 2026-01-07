export const BRAND = {
  name: "iNSTAiNSTRU",
  tagline: "The NYC Lessons Marketplace",
  description:
    "Book vetted instructors for music, tutoring, fitness, languages & more. Instant booking, no approval needed.",

  urls: {
    beta: "https://beta.instainstru.com",
    support: "mailto:support@instainstru.com",
    privacy: "mailto:privacy@instainstru.com",
  },

  colors: {
    purple: "#7E22CE",
    lavender: "#C084FC",
    yellow: "#FFD93D",
  },

  categories: [
    { name: "Music", emoji: "🎵" },
    { name: "Tutoring", emoji: "📚" },
    { name: "Sports & Fitness", emoji: "⚽" },
    { name: "Language", emoji: "🌍" },
    { name: "Arts", emoji: "🎨" },
    { name: "Kids", emoji: "👶" },
    { name: "Hidden Gems", emoji: "💎" },
  ],
} as const;

export const LINKS = {
  internal: {
    home: "/",
    privacy: "/privacy",
    terms: "/terms",
    smsTerms: "/sms-terms",
    smsOptIn: "/sms-opt-in",
  },
  external: {
    beta: "https://beta.instainstru.com",
  },
} as const;

/**
 * R2 asset paths for the landing page
 * These are paths relative to the R2 bucket root
 */
export const ASSETS = {
  brand: {
    logo: "/brand/logo.svg",
    logoWhite: "/brand/logo-white.svg",
    logoMark: "/brand/logo-mark.svg",
    ogImage: "/brand/og-image.png",
  },

  landing: {
    hero: {
      video: "/landing/hero/video.mp4",
      poster: "/landing/hero/poster.webp",
      posterMobile: "/landing/hero/poster-mobile.webp",
    },
    categories: {
      music: "/landing/categories/music.webp",
      tutoring: "/landing/categories/tutoring.webp",
      sports: "/landing/categories/sports.webp",
      language: "/landing/categories/language.webp",
      arts: "/landing/categories/arts.webp",
      kids: "/landing/categories/kids.webp",
      hiddenGems: "/landing/categories/hidden-gems.webp",
    },
    features: {
      booking: "/landing/features/booking.webp",
      messaging: "/landing/features/messaging.webp",
      payments: "/landing/features/payments.webp",
    },
    trust: {
      backgroundCheck: "/landing/trust/background-check.webp",
      securePayments: "/landing/trust/secure-payments.webp",
    },
  },
} as const;
