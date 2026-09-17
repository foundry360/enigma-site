import type { ReactNode } from "react";
import type { Accent } from "@/content/site";
import { icons, type IconName } from "./icons";

export type Tone = "dark" | "light" | "white";

const bandBg: Record<Tone, string> = {
  dark: "bg-black",
  light: "bg-light",
  white: "bg-white",
};

export const headingColor: Record<Tone, string> = {
  dark: "text-white",
  light: "text-ink",
  white: "text-ink",
};

export const bodyColor: Record<Tone, string> = {
  dark: "text-slate-dim",
  light: "text-slate",
  white: "text-slate",
};

const cardShell: Record<Tone, string> = {
  dark: "border-white/12 bg-[#0a0a0a]",
  light: "border-black/10 bg-white",
  white: "border-black/10 bg-offwhite",
};

/* Opt-in hover state: the card fills solid blue and pulses. Children opt into
   the inverted text colour with group-hover, since the fill is the same on
   every tone. */
const cardHover = "enigma-card group hover:border-blue hover:bg-blue";

/* Semantic decision colors are tuned per band so contrast holds on both.
   Tailwind requires literal class strings, hence the explicit maps. */
export const accentText: Record<Tone, Record<Accent, string>> = {
  dark: {
    accent: "text-blue-soft",
    brand: "text-[#4ade80]",
    warn: "text-[#fbbf24]",
    danger: "text-[#f87171]",
    muted: "text-slate-dim",
  },
  light: {
    accent: "text-blue-deep",
    brand: "text-[#15803d]",
    warn: "text-[#b45309]",
    danger: "text-[#b91c1c]",
    muted: "text-slate",
  },
  white: {
    accent: "text-blue-deep",
    brand: "text-[#15803d]",
    warn: "text-[#b45309]",
    danger: "text-[#b91c1c]",
    muted: "text-slate",
  },
};

export function Band({
  tone,
  id,
  children,
  className = "",
}: {
  tone: Tone;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${bandBg[tone]} px-6 py-24 sm:px-10 ${className}`}>
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}

export function SectionHead({
  tone,
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  tone: Tone;
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : ""}>
      {kicker ? (
        <p
          className={`font-mono text-xs font-medium tracking-[0.18em] uppercase ${accentText[tone].accent}`}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${headingColor[tone]}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed ${bodyColor[tone]} ${
            centered ? "mx-auto max-w-2xl" : "max-w-3xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function Panel({
  tone,
  className = "",
  hover = false,
  children,
}: {
  tone: Tone;
  className?: string;
  hover?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-lg border ${cardShell[tone]} ${
        hover ? cardHover : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* Icons are graphics, not text, so they keep the brand blue at the 3:1 bar the
   deeper text shade would overshoot. Only the accent entry differs. */
const accentIcon: Record<Tone, Record<Accent, string>> = {
  dark: accentText.dark,
  light: { ...accentText.light, accent: "text-blue" },
  white: { ...accentText.white, accent: "text-blue" },
};

export function CardIcon({
  name,
  tone,
  accent = "accent",
  /* Tailwind resolves conflicting size utilities by stylesheet order, not by
     class order, so the caller passes a replacement rather than an override. */
  size = "size-9",
  className = "",
}: {
  name: IconName;
  tone: Tone;
  accent?: Accent;
  size?: string;
  className?: string;
}) {
  const Glyph = icons[name];
  return (
    <Glyph
      className={`${size} ${accentIcon[tone][accent]} ${className}`}
      strokeWidth={1.5}
      aria-hidden
    />
  );
}

export function Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "onAccent";
}) {
  const styles = {
    solid: "bg-blue-deep text-white hover:bg-blue-deep-hover",
    outline: "border border-white/30 text-white hover:border-white",
    onAccent: "bg-white text-blue-deep hover:bg-offwhite",
  }[variant];

  return (
    <a
      href={href}
      className={`inline-block rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles}`}
    >
      {children}
    </a>
  );
}
