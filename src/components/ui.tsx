import type { ReactNode } from "react";
import type { Accent } from "@/content/site";

/* Tailwind needs literal class names, so accents resolve through explicit maps. */
export const accentText: Record<Accent, string> = {
  accent: "text-accent",
  brand: "text-brand",
  warn: "text-warn",
  danger: "text-danger",
  muted: "text-muted",
};

export const accentBorder: Record<Accent, string> = {
  accent: "border-accent",
  brand: "border-brand",
  warn: "border-warn",
  danger: "border-danger",
  muted: "border-line-strong",
};

export const accentRule: Record<Accent, string> = {
  accent: "bg-accent",
  brand: "bg-brand",
  warn: "bg-warn",
  danger: "bg-danger",
  muted: "bg-line-strong",
};

export function Kicker({
  children,
  accent = "accent",
}: {
  children: ReactNode;
  accent?: Accent;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className={`font-mono text-[11px] font-semibold tracking-[0.18em] uppercase ${accentText[accent]}`}
      >
        {children}
      </span>
      <span className={`h-px w-14 ${accentRule[accent]}`} aria-hidden />
    </div>
  );
}

export function Section({
  id,
  kicker,
  title,
  subtitle,
  accent = "accent",
  children,
  bordered = true,
}: {
  id?: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  accent?: Accent;
  children?: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-6 py-20 sm:px-10 lg:py-28 ${bordered ? "border-t border-line" : ""}`}
    >
      <div className="mx-auto w-full max-w-[1180px]">
        {kicker ? <Kicker accent={accent}>{kicker}</Kicker> : null}
        {title ? (
          <h2 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
        ) : null}
        {subtitle ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function Card({
  accent,
  className = "",
  children,
}: {
  accent?: Accent;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-line bg-panel ${className}`}
    >
      {accent ? (
        <span
          className={`absolute inset-y-0 left-0 w-[3px] ${accentRule[accent]}`}
          aria-hidden
        />
      ) : null}
      {children}
    </div>
  );
}

export function Mono({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[11px] font-semibold tracking-[0.12em] uppercase ${className}`}
    >
      {children}
    </span>
  );
}
