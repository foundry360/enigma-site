import { hero } from "@/content/site";
import { Mono } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:px-10 lg:pt-28 lg:pb-32">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1180px]">
        <Mono className="text-muted">{hero.eyebrow}</Mono>

        <h1 className="mt-6 text-6xl font-bold tracking-tight sm:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-3 text-2xl font-light text-accent sm:text-3xl">
          {hero.tagline}
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
          {hero.body}
        </p>

        <ol className="mt-10 flex flex-wrap items-center gap-2">
          {hero.stages.map((stage, i) => (
            <li key={stage} className="flex items-center gap-2">
              <span
                className={`rounded-full border px-4 py-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] uppercase ${
                  i === hero.stages.length - 1
                    ? "border-brand text-brand"
                    : "border-accent text-accent"
                }`}
              >
                {stage}
              </span>
              {i < hero.stages.length - 1 ? (
                <span className="text-faint" aria-hidden>
                  ›
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-11 flex flex-wrap items-center gap-3">
          <a
            href={hero.primary.href}
            className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            {hero.primary.label}
          </a>
          <a
            href={hero.secondary.href}
            className="rounded-md border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {hero.secondary.label}
          </a>
        </div>

        <p className="mt-10 font-mono text-[11px] tracking-[0.1em] text-faint">
          {hero.meta}
        </p>
      </div>
    </section>
  );
}
