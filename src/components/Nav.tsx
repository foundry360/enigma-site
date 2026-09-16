import Link from "next/link";
import { nav } from "@/content/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex h-[72px] w-full max-w-[1180px] items-center justify-between gap-6 px-6 sm:px-10">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="text-xl font-bold tracking-tight text-white">
            Enigma
          </span>
          <span className="text-xl font-bold text-purple-soft">/</span>
          <span className="hidden text-[11px] font-medium tracking-[0.14em] text-slate uppercase sm:inline">
            Foundry360
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-dim transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.cta.href}
          className="rounded-md bg-purple px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-hover"
        >
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
