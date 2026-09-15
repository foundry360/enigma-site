import type { ReactNode } from "react";
import type { Accent } from "@/content/site";

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

/* Semantic decision colors are tuned per band so contrast holds on both.
   Tailwind requires literal class strings, hence the explicit maps. */
export const accentText: Record<Tone, Record<Accent, string>> = {
  dark: {
    accent: "text-purple-soft",
    brand: "text-[#4ade80]",
    warn: "text-[#fbbf24]",
    danger: "text-[#f87171]",
    muted: "text-slate-dim",
  },
  light: {
    accent: "text-purple",
    brand: "text-[#15803d]",
    warn: "text-[#b45309]",
    danger: "text-[#b91c1c]",
    muted: "text-slate",
  },
  white: {
    accent: "text-purple",
    brand: "text-[#15803d]",
    warn: "text-[#b45309]",
    danger: "text-[#b91c1c]",
    muted: "text-slate",
  },
};

export const accentRule: Record<Tone, Record<Accent, string>> = {
  dark: {
    accent: "bg-purple-soft",
    brand: "bg-[#4ade80]",
    warn: "bg-[#fbbf24]",
    danger: "bg-[#f87171]",
    muted: "bg-white/25",
  },
  light: {
    accent: "bg-purple",
    brand: "bg-[#15803d]",
    warn: "bg-[#b45309]",
    danger: "bg-[#b91c1c]",
    muted: "bg-black/20",
  },
  white: {
    accent: "bg-purple",
    brand: "bg-[#15803d]",
    warn: "bg-[#b45309]",
    danger: "bg-[#b91c1c]",
    muted: "bg-black/20",
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
  accent,
  className = "",
  children,
}: {
  tone: Tone;
  accent?: Accent;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`relative border ${cardShell[tone]} ${className}`}>
      {accent ? (
        <span
          className={`absolute inset-y-0 left-0 w-[3px] ${accentRule[tone][accent]}`}
          aria-hidden
        />
      ) : null}
      {children}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "onPurple";
}) {
  const styles = {
    solid: "bg-purple text-white hover:bg-purple-hover",
    outline: "border border-white/30 text-white hover:border-white",
    onPurple: "bg-white text-purple hover:bg-offwhite",
  }[variant];

  return (
    <a
      href={href}
      className={`inline-block px-6 py-3 text-sm font-medium transition-colors ${styles}`}
    >
      {children}
    </a>
  );
}
