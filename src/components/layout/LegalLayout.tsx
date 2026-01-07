import Link from "next/link";
import type { ReactNode } from "react";
import { BRAND, LINKS } from "@/lib/constants";

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <main className="bg-gradient-brand min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link
          href={LINKS.internal.home}
          className="mb-6 inline-flex items-center text-brand-lavender hover:text-white transition-colors"
        >
          ← Back to {BRAND.name}
        </Link>

        <h1 className="text-3xl font-bold text-white md:text-4xl mb-8">
          {title}
        </h1>

        <div className="space-y-6">{children}</div>

        <footer className="mt-12 pt-8 border-t border-surface-border text-sm text-gray-400">
          <p>
            iNSTAiNSTRU LLC · New York, NY ·{" "}
            <a
              href={BRAND.urls.support}
              className="text-brand-lavender hover:underline"
            >
              support@instainstru.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
