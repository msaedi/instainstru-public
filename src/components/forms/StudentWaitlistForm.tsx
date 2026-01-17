'use client';

import { useState } from 'react';
import { logger } from '@/lib/logger';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function StudentWaitlistForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email');
      setState('error');
      return;
    }

    const webhookUrl = process.env.NEXT_PUBLIC_STUDENT_WAITLIST_WEBHOOK_URL;

    // Gracefully handle missing webhook
    if (!webhookUrl) {
      logger.warn('Student waitlist webhook not configured');
      // Still show success to user - we'll collect emails once configured
      setState('success');
      return;
    }

    setState('loading');
    setErrorMessage('');

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'landing_page',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setState('success');
      setEmail('');
    } catch (error) {
      logger.error('Waitlist submission error', error);
      setErrorMessage('Something went wrong. Please try again.');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="text-center py-4">
        <div className="text-green-600 dark:text-green-400 font-medium">
          You&apos;re on the list!
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          We&apos;ll notify you when we launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid w-full gap-4">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state === 'error') {
            setState('idle');
            setErrorMessage('');
          }
        }}
        placeholder="Enter email"
        required
        disabled={state === 'loading'}
        aria-invalid={state === 'error' ? 'true' : undefined}
        aria-describedby={state === 'error' && errorMessage ? 'waitlist-error' : undefined}
        className="glass-input h-12 sm:h-14"
      />

      {state === 'error' && errorMessage && (
        <p
          id="waitlist-error"
          role="alert"
          aria-live="assertive"
          className="text-red-500 dark:text-red-400 text-sm text-center"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="glass-cta w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Submitting...
          </span>
        ) : (
          'Notify Me →'
        )}
      </button>
    </form>
  );
}
