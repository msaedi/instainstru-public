import Link from "next/link";
import { LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl text-center text-sm text-gray-600 dark:text-gray-400">
        <div className="mb-4 flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link
            href={LINKS.internal.privacy}
            className="transition-colors hover:text-brand-purple dark:hover:text-brand-lavender"
          >
            Privacy
          </Link>
          <Link
            href={LINKS.internal.terms}
            className="transition-colors hover:text-brand-purple dark:hover:text-brand-lavender"
          >
            Terms
          </Link>
          <Link
            href={LINKS.internal.smsTerms}
            className="transition-colors hover:text-brand-purple dark:hover:text-brand-lavender"
          >
            SMS Terms
          </Link>
          <a
            href="mailto:support@instainstru.com"
            className="transition-colors hover:text-brand-purple dark:hover:text-brand-lavender"
          >
            Contact
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} iNSTAiNSTRU LLC · New York, NY
        </p>
      </div>
    </footer>
  );
}
