import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.instainstru.com",
        pathname: "/**",
      },
    ],
    // Disable Next.js optimization since Cloudflare handles it
    unoptimized: false,
  },
  async headers() {
    return [
      {
        // Cache static pages at edge
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=1800, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Cache other static assets
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
