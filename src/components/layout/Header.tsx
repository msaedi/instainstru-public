import Link from "next/link";
import { BRAND, LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-surface-border bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={LINKS.internal.home} className="text-lg font-semibold text-brand-purple">
          {BRAND.name}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-surface-muted">
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
          <Link
            href={LINKS.internal.smsTerms}
            className="transition-colors hover:text-brand-purple"
          >
            SMS
          </Link>
        </nav>
      </div>
    </header>
  );
}
