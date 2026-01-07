import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <div className="glass-card p-6">
        <p className="mb-4 text-sm text-surface-muted">
          <em>Last updated: {new Date().toISOString().slice(0, 10)}</em>
        </p>
        <p>
          iNSTAiNSTRU LLC (&quot;iNSTAiNSTRU&quot;, &quot;we&quot;, &quot;us&quot;) operates a
          marketplace connecting students and independent instructors for in-person and
          online lessons.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-surface-foreground">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2 text-surface-muted">
          <li>Account &amp; contact details (name, email, phone).</li>
          <li>Booking details, messages with instructors, support interactions.</li>
          <li>
            Payment data handled by our processor (e.g., Stripe); we do not store full
            card numbers.
          </li>
          <li>Device/usage data (cookies, IP address, analytics).</li>
        </ul>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-surface-foreground">
          How We Use Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-surface-muted">
          <li>Operate and improve the service; process bookings and payments.</li>
          <li>
            Send transactional communications (confirmations, reminders, receipts, security
            alerts).
          </li>
          <li>
            With consent, send optional marketing updates. You can opt out at any time.
          </li>
        </ul>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-surface-foreground">SMS &amp; Texting</h2>
        <p className="text-surface-muted">
          By opting in on a web form, you agree to receive messages related to your account
          and bookings. Message frequency varies. Msg &amp; data rates may apply. Reply{" "}
          <strong>STOP</strong> to opt out or <strong>HELP</strong> for help. See our{" "}
          <a
            href="/sms-terms"
            className="text-brand-purple hover:underline"
            target="_blank"
            rel="noopener"
          >
            SMS Terms
          </a>
          .
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-surface-foreground">Sharing</h2>
        <p className="text-surface-muted">
          We share data with service providers (hosting, communications, analytics, payments)
          under contracts that protect your data. We do not sell personal data.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-surface-foreground">Your Choices</h2>
        <p className="text-surface-muted">
          To access, update, or delete your data, contact{" "}
          <a
            href={BRAND.urls.privacy}
            className="text-brand-purple hover:underline"
          >
            privacy@instainstru.com
          </a>
          .
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="mb-4 text-xl font-semibold text-surface-foreground">Contact</h2>
        <p className="text-surface-muted">
          iNSTAiNSTRU LLC · New York, NY ·{" "}
          <a
            href={BRAND.urls.privacy}
            className="text-brand-purple hover:underline"
          >
            privacy@instainstru.com
          </a>
        </p>
        <p className="mt-3 text-sm text-surface-muted">
          This template is provided for general information only and is not legal advice.
        </p>
      </div>
    </LegalLayout>
  );
}
