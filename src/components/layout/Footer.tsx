import Link from "next/link";
import { BRAND, LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-surface-muted md:flex-row md:items-center md:justify-between">
        <p>iNSTAiNSTRU LLC · New York, NY</p>
        <div className="flex items-center gap-4">
          <Link
            href={LINKS.internal.privacy}
            className="transition-colors hover:text-brand-purple"
          >
            Privacy
          </Link>
          <Link
            href={LINKS.internal.terms}
            className="transition-colors hover:text-brand-purple"
          >
            Terms
          </Link>
          <a
            href={BRAND.urls.support}
            className="transition-colors hover:text-brand-purple"
          >
            support@instainstru.com
          </a>
        </div>
      </div>
    </footer>
  );
}
