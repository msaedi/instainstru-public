import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-hero px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Instant learning with{" "}
              <span className="text-brand-purple dark:text-brand-lavender">
                {BRAND.name}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              {BRAND.description}
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="https://beta.instainstru.com/instructor/join" className="glass-cta">
                Have a code? <span className="font-bold">Join here →</span>
              </Link>

              <Link href="https://beta.instainstru.com/instructor/apply" className="glass-cta">
                Want to teach? <span className="font-bold underline">Apply here</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-section-alt px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
              🚧 Coming Soon
            </h2>
            <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
              We&apos;re building something amazing. Stay tuned!
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card glass-card-hover p-6">
                <h3 className="font-semibold text-brand-purple dark:text-brand-lavender">
                  R2 Assets
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Cloudflare R2 integration with image transformations
                </p>
              </div>
              <div className="glass-card glass-card-hover p-6">
                <h3 className="font-semibold text-brand-purple dark:text-brand-lavender">
                  Upload Script
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  npm run upload-assets for A-team
                </p>
              </div>
              <div className="glass-card glass-card-hover p-6">
                <h3 className="font-semibold text-brand-purple dark:text-brand-lavender">
                  Lottie Support
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Animated illustrations ready
                </p>
              </div>
              <div className="glass-card glass-card-hover p-6">
                <h3 className="font-semibold text-brand-purple dark:text-brand-lavender">
                  Framer Motion
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Premium animations configured
                </p>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
              Awaiting design assets from A-team...
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
