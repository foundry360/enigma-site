import { hero } from "@/content/site";
import { Button } from "./ui";

export function Hero() {
  const [beforeAccent, afterAccent] = hero.headline.split(hero.headlineAccent);

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-center sm:px-10 lg:py-36">
      <div
        className="enigma-hero-grid pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="enigma-hero-glow pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1000px]">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-blue-soft uppercase">
          {hero.eyebrow} · {hero.tagline}
        </p>

        <h1 className="mt-7 text-5xl leading-[1.06] font-bold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
          {beforeAccent}
          {/* the italic slant leans into the next word, so pad the trailing side
              back out to match the space before it */}
          <span className="text-blue pr-[0.07em] italic">
            {hero.headlineAccent}
          </span>
          {afterAccent}
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-slate-dim">
          {hero.body}
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
          <Button href={hero.cta.href} variant="outline">
            {hero.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
