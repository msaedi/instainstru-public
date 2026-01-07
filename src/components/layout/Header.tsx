import Link from "next/link";
import { BRAND, LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-surface-border bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={LINKS.internal.home} className="text-lg font-semibold text-white">
          {BRAND.name}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-gray-400">
          <Link
            href={LINKS.internal.privacy}
            className="hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href={LINKS.internal.terms}
            className="hover:text-white transition-colors"
          >
            Terms
          </Link>
          <Link
            href={LINKS.internal.smsTerms}
            className="hover:text-white transition-colors"
          >
            SMS
          </Link>
        </nav>
      </div>
    </header>
  );
}
