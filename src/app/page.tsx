import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-hero">
      <header className="sticky top-0 z-50 border-b border-surface-border bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-brand-purple">{BRAND.name}</div>
            <nav className="flex items-center gap-4">
              <Link
                href="https://beta.instainstru.com/instructor/join"
                className="text-sm font-medium text-surface-foreground transition-colors hover:text-brand-purple"
              >
                Become an Instructor
              </Link>
              <Link
                href="https://beta.instainstru.com/login"
                className="rounded-full bg-brand-purple px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-dark"
              >
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-surface-foreground sm:text-6xl lg:text-7xl">
            Instant learning with <span className="text-brand-purple">{BRAND.name}</span>
          </h1>
          <p className="mt-6 text-xl text-surface-muted">{BRAND.description}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://beta.instainstru.com/instructor/join"
              className="rounded-full bg-brand-purple px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-brand-purple-dark"
            >
              Become an Instructor
            </Link>
            <Link
              href="https://beta.instainstru.com/instructor/apply"
              className="rounded-full border-2 border-brand-purple bg-white px-8 py-4 text-lg font-semibold text-brand-purple transition-all hover:scale-105 hover:bg-purple-50"
            >
              Apply to Teach
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-section-alt px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">Infrastructure Ready</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-card glass-card-hover p-6">
              <h3 className="font-semibold text-brand-purple">R2 Assets</h3>
              <p className="mt-2 text-sm text-surface-muted">
                Cloudflare R2 integration with image transformations
              </p>
            </div>
            <div className="glass-card glass-card-hover p-6">
              <h3 className="font-semibold text-brand-purple">Upload Script</h3>
              <p className="mt-2 text-sm text-surface-muted">
                npm run upload-assets for A-team
              </p>
            </div>
            <div className="glass-card glass-card-hover p-6">
              <h3 className="font-semibold text-brand-purple">Lottie Support</h3>
              <p className="mt-2 text-sm text-surface-muted">
                Animated illustrations ready
              </p>
            </div>
            <div className="glass-card glass-card-hover p-6">
              <h3 className="font-semibold text-brand-purple">Framer Motion</h3>
              <p className="mt-2 text-sm text-surface-muted">
                Premium animations configured
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-surface-muted">
            Awaiting design assets from A-team...
          </p>
        </div>
      </section>

      <footer className="border-t border-surface-border px-4 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-surface-muted">
          <div className="mb-4 flex justify-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-brand-purple">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brand-purple">
              Terms
            </Link>
            <Link href="/sms-terms" className="transition-colors hover:text-brand-purple">
              SMS Terms
            </Link>
            <a
              href="mailto:support@instainstru.com"
              className="transition-colors hover:text-brand-purple"
            >
              Contact
            </a>
          </div>
          <p>(c) {new Date().getFullYear()} iNSTAiNSTRU LLC · New York, NY</p>
        </div>
      </footer>
    </main>
  );
}
