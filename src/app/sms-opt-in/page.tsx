import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { SmsOptInForm } from "./SmsOptInForm";

export const metadata: Metadata = {
  title: "SMS Opt-In",
  robots: { index: false, follow: false },
};

export default function SmsOptInPage() {
  return (
    <LegalLayout title="SMS Opt-In — iNSTAiNSTRU">
      <SmsOptInForm />

      <p className="text-sm text-gray-400">
        <strong>We only collect opt-in via web form.</strong> We do not accept
        verbal/phone or keyword opt-ins.
      </p>

      <p className="text-sm text-gray-400">
        See our{" "}
        <a
          href="/terms"
          target="_blank"
          rel="noopener"
          className="text-brand-lavender hover:underline"
        >
          Terms
        </a>{" "}
        and{" "}
        <a
          href="/privacy"
          target="_blank"
          rel="noopener"
          className="text-brand-lavender hover:underline"
        >
          Privacy
        </a>{" "}
        for additional details.
      </p>
    </LegalLayout>
  );
}
