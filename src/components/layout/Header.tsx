import Link from "next/link";
import { BRAND } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="brand-wordmark text-xl font-bold">
          {BRAND.name}
        </Link>

        <Link href="https://beta.instainstru.com/login" className="glass-cta glass-cta-sm">
          Login
        </Link>
      </div>
    </header>
  );
}
