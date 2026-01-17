import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ColorSchemeImage } from '@/components/ui/ColorSchemeImage';
import { StudentWaitlistForm } from '@/components/forms/StudentWaitlistForm';

const VIDEO_URL = 'https://assets.instainstru.com/animations/landing-page.mp4';
const HERO_POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23ffffff' stop-opacity='0.85'/%3E%3Cstop offset='100%25' stop-color='%23e9d5ff' stop-opacity='0.85'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main id="main-content" className="flex-1">
        <HeroCurrentLayout />
      </main>

      <Footer />
    </div>
  );
}

function HeroCurrentLayout() {
  return (
    <section className="bg-gradient-hero px-4 pt-0 pb-12 sm:pb-16 overflow-x-hidden">
      <div className="mx-auto max-w-4xl text-center">
        <ColorSchemeImage
          lightSrc="https://assets.instainstru.com/landing/illustrations/nyc-skyline.webp"
          darkSrc="https://assets.instainstru.com/landing/illustrations/nyc-skyline-white.webp"
          alt="NYC skyline"
          width={2499}
          height={781}
          className="mx-auto -mt-4 mb-1 block w-full max-w-5xl sm:-mt-6"
          priority
        />
        <HeroHeadline />
        <HeroDescription />

        <HeroVideo className="my-10" maxWidthClass="max-w-sm sm:max-w-2xl" />

        <HeroCTAs />
      </div>
    </section>
  );
}

function HeroHeadline() {
  return (
    <h1 className="text-gray-900 dark:text-gray-200">
      <span className="block text-2xl font-semibold sm:text-3xl lg:text-4xl">
        If you live in New York,
      </span>
      <span className="block text-4xl font-bold sm:text-5xl lg:text-6xl">{BRAND.name}</span>
      <span className="block text-2xl font-semibold sm:text-3xl lg:text-4xl">
        is for you
      </span>
    </h1>
  );
}

function HeroDescription() {
  return (
    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-900 dark:text-gray-200 sm:text-xl">
      Background-checked instructors, tutors, and coaches — bookable instantly, at your home
    </p>
  );
}

function HeroVideo({
  className = "",
  maxWidthClass = "max-w-2xl",
}: {
  className?: string;
  maxWidthClass?: string;
}) {
  return (
    <div className={`mx-auto w-full ${maxWidthClass} ${className}`}>
      <div className="w-full overflow-hidden rounded-2xl bg-white/50 shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          className="block w-full"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function HeroCTAs({ align = "center" }: { align?: "center" | "left" }) {
  const containerAlign = align === "left" ? "items-start text-left" : "items-center text-center";
  const labelAlign =
    align === "left" ? "w-full max-w-2xl" : "w-full max-w-2xl mx-auto justify-center";
  const cardAlign = align === "left" ? "w-full max-w-5xl" : "w-full max-w-5xl mx-auto";
  const innerAlign = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mt-10 flex flex-col ${containerAlign}`}>
      <div
        className={`relative flex items-center gap-4 text-base font-semibold uppercase tracking-[0.25em] text-gray-700 dark:text-gray-300 sm:text-lg ${labelAlign} before:absolute before:top-1/2 before:right-full before:h-0.5 before:w-screen before:-translate-y-1/2 before:bg-gray-300 before:content-[''] dark:before:bg-gray-600 after:absolute after:top-1/2 after:left-full after:h-0.5 after:w-screen after:-translate-y-1/2 after:bg-gray-300 after:content-[''] dark:after:bg-gray-600`}
      >
        <span className="h-0.5 flex-1 bg-gray-300 dark:bg-gray-600" />
        <span className="whitespace-nowrap">Launching in NYC Soon</span>
        <span className="h-0.5 flex-1 bg-gray-300 dark:bg-gray-600" />
      </div>
      <p className={`mt-3 text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400 ${labelAlign}`}>
        Now onboarding founding instructors
      </p>

      <div className={`mt-6 ${cardAlign}`}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-card border border-white/60 bg-white/35 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md dark:border-gray-700/60 dark:bg-white/5 sm:p-8">
            <div
              className={`text-sm font-bold uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300 ${innerAlign}`}
            >
              <span>For Instructors:</span>
            </div>
            <p className={`mt-2 text-sm text-gray-600 dark:text-gray-400 lg:min-h-[3.75rem] ${innerAlign}`}>
              Founding instructors lock in <span className="font-semibold">8%</span> platform fees
              for life. Spots are limited.
            </p>

            <div className="mt-4 flex w-full flex-col gap-4 items-stretch">
              <Link
                href="https://beta.instainstru.com/instructor/join"
                className="glass-cta w-full whitespace-nowrap"
              >
                Have a code? <span className="font-bold">Claim your spot</span>
              </Link>
              <Link
                href="https://beta.instainstru.com/instructor/apply"
                className="glass-cta w-full whitespace-nowrap"
              >
                Want to teach with us? <span className="font-bold">Apply here</span>
              </Link>
            </div>
          </div>

          <div className="glass-card border border-white/60 bg-white/35 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-md dark:border-gray-700/60 dark:bg-white/5 sm:p-8">
            <div
              className={`text-sm font-bold uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300 ${innerAlign}`}
            >
              <span>For Students:</span>
            </div>
            <p className={`mt-2 text-sm text-gray-600 dark:text-gray-400 lg:min-h-[3.75rem] ${innerAlign}`}>
              We&apos;re onboarding our instructors now so you can book the best from day one.
              Drop your email and we&apos;ll ping you once we&apos;re live.
            </p>

            <div className="mt-4 w-full">
              <StudentWaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
