import Link from "next/link";
import type { ReactNode } from "react";
import { BRAND, LINKS } from "@/lib/constants";

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-hero">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link
          href={LINKS.internal.home}
          className="mb-6 inline-flex items-center text-brand-purple transition-colors hover:text-brand-purple-dark"
        >
          ← Back to {BRAND.name}
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-surface-foreground md:text-4xl">
          {title}
        </h1>

        <div className="space-y-6">{children}</div>

        <footer className="mt-12 border-t border-surface-border pt-8 text-sm text-surface-muted">
          <p>
            iNSTAiNSTRU LLC · New York, NY ·{" "}
            <a
              href={BRAND.urls.support}
              className="text-brand-purple hover:underline"
            >
              support@instainstru.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
