'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type LayoutOption = 'current' | 'background' | 'side-by-side' | 'centered';

const LAYOUT_OPTIONS: LayoutOption[] = [
  'current',
  'background',
  'side-by-side',
  'centered',
];

const VIDEO_URL = 'https://assets.instainstru.com/animations/landing-page.mp4';
const HERO_POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23ffffff' stop-opacity='0.85'/%3E%3Cstop offset='100%25' stop-color='%23e9d5ff' stop-opacity='0.85'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E";

export default function HomePage() {
  const [layout, setLayout] = useState<LayoutOption>('current');
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {isDev && (
        <div className="fixed bottom-4 right-4 z-50 rounded-lg border border-gray-200 bg-white p-3 shadow-xl dark:border-gray-700 dark:bg-gray-800">
          <p className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
            Video Layout:
          </p>
          <div className="flex flex-col gap-1">
            {LAYOUT_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLayout(option)}
                className={
                  layout === option
                    ? 'rounded bg-brand-purple px-3 py-1 text-xs text-white'
                    : 'rounded bg-gray-100 px-3 py-1 text-xs text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="flex-1">
        {layout === 'current' && <HeroCurrentLayout />}
        {layout === 'background' && <HeroBackgroundLayout />}
        {layout === 'side-by-side' && <HeroSideBySideLayout />}
        {layout === 'centered' && <HeroCenteredLayout />}

        <ComingSoonSection />
      </main>

      <Footer />
    </div>
  );
}

function HeroCurrentLayout() {
  return (
    <section className="bg-gradient-hero px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <HeroHeadline />
        <HeroDescription />

        <div className="my-10 mx-auto max-w-sm sm:max-w-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
            className="w-full rounded-2xl shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10"
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        <HeroCTAs />
      </div>
    </section>
  );
}

function HeroBackgroundLayout() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-gradient-hero px-4 py-16 sm:py-24">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={HERO_POSTER}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 dark:opacity-10"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <HeroHeadline />
        <HeroDescription />
        <div className="mt-10">
          <HeroCTAs />
        </div>
      </div>
    </section>
  );
}

function HeroSideBySideLayout() {
  return (
    <section className="bg-gradient-hero px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <HeroHeadline />
            <HeroDescription />
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <HeroCTAs inline />
            </div>
          </div>

          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={HERO_POSTER}
              className="w-full rounded-2xl shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10"
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCenteredLayout() {
  return (
    <section className="bg-gradient-hero px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <HeroHeadline />
        <HeroDescription />

        <div className="my-10 mx-auto max-w-xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
            className="w-full rounded-2xl shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10"
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        <HeroCTAs />
      </div>
    </section>
  );
}

function HeroHeadline() {
  return (
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
      Instant learning with{' '}
      <span className="text-brand-purple dark:text-brand-lavender">{BRAND.name}</span>
    </h1>
  );
}

function HeroDescription() {
  return (
    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
      {BRAND.description}
    </p>
  );
}

function HeroCTAs({ inline = false }: { inline?: boolean }) {
  const links = (
    <>
      <Link href="https://beta.instainstru.com/instructor/join" className="glass-cta">
        Have a code? <span className="font-bold">Join here →</span>
      </Link>
      <Link href="https://beta.instainstru.com/instructor/apply" className="glass-cta">
        Want to teach? <span className="font-bold underline">Apply here</span>
      </Link>
    </>
  );

  if (inline) {
    return links;
  }

  return <div className="flex flex-col justify-center gap-4 sm:flex-row">{links}</div>;
}

function ComingSoonSection() {
  return (
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
            <h3 className="font-semibold text-brand-purple dark:text-brand-lavender">R2 Assets</h3>
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
  );
}
