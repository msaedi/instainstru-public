"use client";

import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-brand-purple dark:text-brand-lavender"
          >
            {BRAND.name}
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="https://beta.instainstru.com/login"
              className="rounded-full bg-brand-purple px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-dark"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
