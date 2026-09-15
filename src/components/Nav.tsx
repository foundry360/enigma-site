import Link from "next/link";
import { nav } from "@/content/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between gap-6 px-6 sm:px-10">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="text-lg font-bold tracking-tight">Enigma</span>
          <span className="hidden font-mono text-[10px] tracking-[0.16em] text-faint uppercase sm:inline">
            by Foundry360
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.cta.href}
          className="rounded-md border border-accent px-3.5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
