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
};

export default nextConfig;
