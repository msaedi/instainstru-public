import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <div className="glass-card p-6">
        <p className="text-gray-400 text-sm mb-4">
          <em>Last updated: {new Date().toISOString().slice(0, 10)}</em>
        </p>
        <p>
          iNSTAiNSTRU LLC (&quot;iNSTAiNSTRU&quot;) connects students with independent
          instructors. By using the service, you agree to these Terms.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Bookings &amp; Payments
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            Students contract directly with instructors. iNSTAiNSTRU facilitates
            booking and payments.
          </li>
          <li>
            Payments are processed by our payment provider; funds are released
            to instructors after completed lessons.
          </li>
        </ul>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Cancellations &amp; Refunds
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Full refund if canceled ≥24 hours before lesson start.</li>
          <li>
            Within 24 hours, refunds require instructor approval; a booking
            credit may be issued. Processing fees may be non-refundable.
          </li>
        </ul>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Conduct &amp; Safety
        </h2>
        <p className="text-gray-300">
          Users agree to follow applicable laws and act respectfully during
          lessons.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Disclaimers</h2>
        <p className="text-gray-300">
          Services are provided &quot;as is.&quot; iNSTAiNSTRU is not liable for indirect
          or incidental damages.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
        <p>
          iNSTAiNSTRU LLC · New York, NY ·{" "}
          <a
            href={BRAND.urls.support}
            className="text-brand-lavender hover:underline"
          >
            support@instainstru.com
          </a>
        </p>
        <p className="text-sm text-gray-500 mt-3">
          This template is provided for general information only and is not
          legal advice.
        </p>
      </div>
    </LegalLayout>
  );
}
