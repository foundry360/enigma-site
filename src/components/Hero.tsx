import { hero } from "@/content/site";
import { Button } from "./ui";

export function Hero() {
  return (
    <section className="bg-black px-6 py-28 text-center sm:px-10 lg:py-36">
      <div className="mx-auto w-full max-w-[1000px]">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-purple-soft uppercase">
          {hero.eyebrow} · {hero.tagline}
        </p>

        <h1 className="mt-7 text-5xl leading-[1.06] font-bold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
          {hero.headline}
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-slate-dim">
          {hero.body}
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
          <Button href={hero.secondary.href} variant="outline">
            {hero.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
