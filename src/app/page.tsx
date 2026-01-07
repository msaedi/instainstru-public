import { BRAND, ASSETS } from "@/lib/constants";
import { getOptimizedUrl, getDirectUrl } from "@/lib/services/assetService";

export default function HomePage() {
  // These URLs will work once assets are uploaded to R2
  const logoUrl = getDirectUrl(ASSETS.brand.logo);
  const heroUrl = getOptimizedUrl(ASSETS.landing.hero.poster, {
    width: 1920,
    quality: 85,
    format: "auto",
  });

  return (
    <main className="bg-gradient-brand min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Logo test */}
        <div className="mb-8">
          <p className="mb-2 text-sm text-gray-400">
            Logo URL (will work after upload):
          </p>
          <code className="break-all text-xs text-brand-lavender">
            {logoUrl}
          </code>
        </div>

        {/* Hero image test */}
        <div className="mb-8">
          <p className="mb-2 text-sm text-gray-400">
            Hero image URL with transformations:
          </p>
          <code className="break-all text-xs text-brand-lavender">
            {heroUrl}
          </code>
        </div>

        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {BRAND.name}
        </h1>
        <p className="mt-4 text-xl text-gray-300">{BRAND.description}</p>
        <p className="mt-8 text-brand-lavender">
          🚧 Asset infrastructure ready. Landing page design coming soon...
        </p>
      </div>
    </main>
  );
}
