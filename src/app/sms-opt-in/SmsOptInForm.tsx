"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface OptInState {
  first: string;
  last: string;
  email: string;
  phone: string;
  consent: boolean;
}

const initialState: OptInState = {
  first: "",
  last: "",
  email: "",
  phone: "",
  consent: false,
};

export function SmsOptInForm() {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    formState.first.trim() &&
    formState.email.trim() &&
    formState.phone.trim() &&
    formState.consent;

  return (
    <div className="glass-card p-6">
      <form
        id="optin"
        aria-describedby="disclosure"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        className="space-y-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="first" className="text-sm text-gray-300">
              First name*
            </label>
            <Input
              id="first"
              name="first"
              type="text"
              autoComplete="given-name"
              required
              value={formState.first}
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  first: event.target.value,
                }))
              }
            />
          </div>
          <div>
            <label htmlFor="last" className="text-sm text-gray-300">
              Last name
            </label>
            <Input
              id="last"
              name="last"
              type="text"
              autoComplete="family-name"
              value={formState.last}
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  last: event.target.value,
                }))
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-gray-300">
            Email*
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formState.email}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm text-gray-300">
            Mobile number*
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="+1 646 555 1234"
            required
            value={formState.phone}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                phone: event.target.value,
              }))
            }
          />
        </div>

        <div className="flex gap-3 rounded-xl border border-surface-border bg-white/5 p-4">
          <input
            id="consent-txn"
            name="consent"
            type="checkbox"
            required
            checked={formState.consent}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                consent: event.target.checked,
              }))
            }
            className="mt-1 h-4 w-4 accent-brand-lavender"
          />
          <label htmlFor="consent-txn" className="text-sm text-gray-300">
            I agree to receive SMS from <strong>iNSTAiNSTRU</strong> about my
            account, booking confirmations/updates, and support (e.g.,
            rescheduling, instructor messages). Message frequency varies. Msg
            &amp; data rates may apply. Reply <strong>STOP</strong> to opt out or{" "}
            <strong>HELP</strong> for help. Consent is not a condition of
            purchase. Carriers are not liable for delayed or undelivered
            messages. See our{" "}
            <a
              href="/sms-terms"
              target="_blank"
              rel="noopener"
              className="text-brand-lavender hover:underline"
            >
              SMS Terms
            </a>
            ,{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener"
              className="text-brand-lavender hover:underline"
            >
              Terms
            </a>
            , and{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener"
              className="text-brand-lavender hover:underline"
            >
              Privacy
            </a>
            .
          </label>
        </div>

        <Button type="submit" disabled={!isValid} variant="secondary">
          Continue
        </Button>

        <div className="text-sm text-gray-400" id="disclosure">
          This page demonstrates how we collect opt-in consent. On submission in
          production, we store phone number, name (if provided), email (if
          provided), timestamp, IP, user agent, page URL, and the exact consent
          text version agreed to.
        </div>

        {submitted ? (
          <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-3 text-sm text-emerald-100">
            Thanks! Your example submission was recorded.
          </div>
        ) : null}
      </form>
    </div>
  );
}
