import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "iNSTAiNSTRU terms of service.",
  alternates: {
    canonical: "https://instainstru.com/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <div className="glass-card p-6">
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          <em>Last updated: January 2026</em>
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          iNSTAiNSTRU LLC (&quot;iNSTAiNSTRU&quot;) is building a marketplace to connect
          students with independent instructors in NYC.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Current Status
        </h2>
        <p className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          We&apos;re currently onboarding founding instructors and building our waitlist.
          Full terms of service for bookings, payments, and lessons will apply when the
          platform launches publicly.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Waitlist
        </h2>
        <p className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          By joining our waitlist, you agree to receive email updates about InstaInstru&apos;s
          launch. You can unsubscribe at any time.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Contact</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Questions? Reach us at{" "}
          <a
            href={BRAND.urls.support}
            className="text-brand-purple hover:underline dark:text-brand-lavender"
          >
            support@instainstru.com
          </a>
        </p>
      </div>
    </LegalLayout>
  );
}
