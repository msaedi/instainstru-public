import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SMS Terms & Consent",
  robots: { index: false, follow: false },
};

export default function SmsTermsPage() {
  return (
    <LegalLayout title="SMS Terms & Consent">
      <div className="glass-card p-6">
        <p>
          By providing your mobile number and completing our opt-in on a web
          form, you consent to receive SMS messages from{" "}
          <strong>iNSTAiNSTRU</strong> related to your account, booking
          confirmations/updates, and support (conversational messaging).{" "}
          <em>Message frequency varies</em>. <em>Message &amp; data rates may apply</em>.
          Reply <strong>STOP</strong> to opt out or <strong>HELP</strong> for help.
          Consent is not a condition of purchase. Carriers are not liable for
          delayed or undelivered messages.
        </p>
      </div>

      <p className="text-sm text-gray-400">
        <strong>We only collect opt-in via web form.</strong> We do not accept
        verbal/phone or keyword opt-ins.
      </p>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Opt-in Method (Web/Online Only)
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>
            <strong>Web Form:</strong> On our booking/contact forms, you may
            check a consent box and submit your phone number. See the example
            form at{" "}
            <a
              href="/sms-opt-in"
              target="_blank"
              rel="noopener"
              className="text-brand-lavender hover:underline"
            >
              /sms-opt-in
            </a>
            .
          </li>
        </ol>
        <p className="text-sm text-gray-400 mt-3">
          Note: We do not collect verbal or QR/text keyword opt-ins at this time.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Opt-out &amp; Help</h2>
        <p className="text-gray-300">
          Reply <strong>STOP</strong>, <strong>CANCEL</strong>,{" "}
          <strong>END</strong>, <strong>QUIT</strong>, or{" "}
          <strong>UNSUBSCRIBE</strong> to stop. Reply <strong>HELP</strong> for
          help or email{" "}
          <a
            href={BRAND.urls.support}
            className="text-brand-lavender hover:underline"
          >
            support@instainstru.com
          </a>
          .
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Examples of Messages
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            &quot;iNSTAiNSTRU: Your lesson with {"{{instructor}}"} on {"{{date}}"}{" "}
            at {"{{time}}"} is confirmed. Reply HELP for help, STOP to opt out.&quot;
          </li>
          <li>
            &quot;iNSTAiNSTRU: Your booking request was updated. Check your email
            for details. Reply HELP for help, STOP to opt out.&quot;
          </li>
          <li>
            &quot;iNSTAiNSTRU Support: Thanks for reaching out—how can we help?
            Reply STOP to opt out.&quot;
          </li>
        </ul>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Consent Capture &amp; Storage
        </h2>
        <p className="text-gray-300">
          When you opt in via web form, we store: phone number, first/last name
          (if provided), email (if provided), <strong>timestamp</strong>,{" "}
          <strong>IP address</strong>, <strong>user agent</strong>, the{" "}
          <strong>page URL</strong>, and the{" "}
          <strong>exact consent text version</strong> agreed to. We use this
          record to confirm consent and handle any audit inquiries.
        </p>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          Policies &amp; Contact
        </h2>
        <p className="text-gray-300">
          See our{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noopener"
            className="text-brand-lavender hover:underline"
          >
            Terms of Service
          </a>
          ,{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener"
            className="text-brand-lavender hover:underline"
          >
            Privacy Policy
          </a>
          , and this page for SMS Terms.
        </p>
        <p className="text-gray-300 mt-3">
          iNSTAiNSTRU LLC · New York, NY ·{" "}
          <a
            href={BRAND.urls.support}
            className="text-brand-lavender hover:underline"
          >
            support@instainstru.com
          </a>
        </p>
        <p className="text-sm text-gray-500 mt-3">
          This page documents our SMS consent and program terms for compliance
          review.
        </p>
      </div>
    </LegalLayout>
  );
}
