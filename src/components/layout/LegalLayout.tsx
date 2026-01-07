import Link from "next/link";
import type { ReactNode } from "react";
import { BRAND, LINKS } from "@/lib/constants";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Header />

      <main className="flex-1 bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <Link
            href={LINKS.internal.home}
            className="mb-6 inline-flex items-center text-brand-purple transition-colors hover:underline dark:text-brand-lavender"
          >
            ← Back to {BRAND.name}
          </Link>

          <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            {title}
          </h1>

          <div className="space-y-6">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
