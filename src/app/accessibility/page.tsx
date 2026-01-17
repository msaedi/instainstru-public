import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility | iNSTAiNSTRU",
  description: "Our commitment to digital accessibility.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout title="Accessibility Statement">
      <div className="glass-card p-6">
        <p className="text-gray-600 dark:text-gray-300">
          iNSTAiNSTRU is committed to ensuring digital accessibility for people with
          disabilities. We are continually improving the user experience for everyone and
          applying the relevant accessibility standards.
        </p>
      </div>

      <div className="glass-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Conformance Status
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level
          AA. These guidelines explain how to make web content more accessible for people
          with disabilities.
        </p>
      </div>

      <div className="glass-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Feedback</h2>
        <p className="text-gray-600 dark:text-gray-300">
          We welcome your feedback on the accessibility of iNSTAiNSTRU. Please let us know if
          you encounter accessibility barriers:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
          <li>
            Email:{" "}
            <a
              href="mailto:accessibility@instainstru.com"
              className="text-brand-purple dark:text-brand-lavender underline hover:no-underline"
            >
              accessibility@instainstru.com
            </a>
          </li>
          <li>Response time: 5 business days</li>
        </ul>
      </div>

      <div className="glass-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Compatibility
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          iNSTAiNSTRU is designed to be compatible with the following assistive technologies:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
          <li>Screen readers (NVDA, VoiceOver, JAWS)</li>
          <li>Screen magnification software</li>
          <li>Speech recognition software</li>
          <li>Keyboard-only navigation</li>
        </ul>
      </div>

      <div className="glass-card space-y-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Limitations</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Despite our best efforts, some content may not yet be fully accessible. We are
          actively working to identify and fix any issues. If you experience difficulty
          accessing any content, please contact us and we will provide the information in an
          alternative format.
        </p>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        This statement was last updated on{" "}
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        .
      </p>
    </LegalLayout>
  );
}
