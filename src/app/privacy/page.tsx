import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "iNSTAiNSTRU privacy policy for our waitlist.",
  alternates: {
    canonical: "https://instainstru.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <div className="glass-card p-6">
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          <em>Last updated: January 2026</em>
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          iNSTAiNSTRU LLC (&quot;iNSTAiNSTRU&quot;, &quot;we&quot;, &quot;us&quot;) operates a
          marketplace connecting students with independent instructors for in-person lessons
          in NYC.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          What We Collect
        </h2>
        <p className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          When you join our waitlist, we collect your email address. We may also collect
          basic analytics data (such as page views) to improve our website.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          How We Use It
        </h2>
        <p className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          We&apos;ll use your email to notify you when InstaInstru launches in NYC. We may
          also send occasional updates about our progress. You can unsubscribe at any time.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          What We Don&apos;t Do
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We don&apos;t sell, rent, or share your email address with third parties for
          marketing purposes.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Contact</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Questions? Reach us at{" "}
          <a
            href={BRAND.urls.privacy}
            className="text-brand-purple hover:underline dark:text-brand-lavender"
          >
            privacy@instainstru.com
          </a>
        </p>
      </div>
    </LegalLayout>
  );
}
