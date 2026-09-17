"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Send, X } from "lucide-react";
import { contact, ctaLabel } from "@/content/site";

const copy = contact.assistant;

type ContactContextValue = {
  open: boolean;
  show: () => void;
  hide: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContact must be used inside ContactProvider");
  }
  return ctx;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);
  const hide = useCallback(() => setOpen(false), []);

  return (
    <ContactContext.Provider value={{ open, show, hide }}>
      {children}
      <ContactModal />
    </ContactContext.Provider>
  );
}

const fieldClass =
  "w-full rounded-full border border-white/12 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-blue";

type Status = "idle" | "sending" | "sent" | "error";

function ContactModal() {
  const { open, hide } = useContact();
  if (!open) return null;
  return <ContactDialog hide={hide} />;
}

function ContactDialog({ hide }: { hide: () => void }) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") hide();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [hide]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    /* Honeypot: bots that fill hidden fields are dropped silently. */
    if (String(data.get("company_website") ?? "").trim()) {
      setStatus("sent");
      return;
    }

    const first = String(data.get("first") ?? "").trim();
    const last = String(data.get("last") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          first,
          last,
          email,
          company,
          message,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "submit-failed");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError(copy.errorBody);
    }
  }

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        aria-label="Close contact"
        className="absolute inset-0 bg-black/55"
        onClick={hide}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute right-4 bottom-4 flex max-h-[min(720px,calc(100vh-2rem))] w-[min(24.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141416] shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:right-6 sm:bottom-6"
      >
        <header className="flex items-start justify-between gap-4 px-5 pt-5 pb-3">
          <div>
            <h2 id={titleId} className="text-base font-semibold text-white">
              {copy.title}
            </h2>
            <p className="mt-1 flex items-center gap-2 text-xs text-slate-dim">
              <span
                className="size-2 rounded-full bg-[#4ade80]"
                aria-hidden
              />
              {copy.status}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={hide}
            aria-label="Close"
            className="rounded-full p-1 text-white/55 transition-colors hover:text-white"
          >
            <X className="size-4" strokeWidth={2} aria-hidden />
          </button>
        </header>

        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-5 pb-3">
          <ChatBubble>{copy.greeting}</ChatBubble>
          <ChatBubble>{copy.hint}</ChatBubble>

          {status === "sent" ? (
            <ChatBubble>
              <span className="font-medium text-white">{copy.successTitle} </span>
              {copy.successBody}
            </ChatBubble>
          ) : (
            <form id="enigma-contact" onSubmit={onSubmit} className="space-y-3">
              <div className="rounded-xl border border-white/10 px-4 py-4">
                <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-white/55 uppercase">
                  {copy.detailsLabel}
                </p>
                <div className="mt-3 space-y-2.5">
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder={copy.emailPlaceholder}
                    className={fieldClass}
                  />
                  <div className="grid grid-cols-2 gap-2.5">
                    <input
                      required
                      type="text"
                      name="first"
                      autoComplete="given-name"
                      placeholder={copy.firstPlaceholder}
                      className={fieldClass}
                    />
                    <input
                      required
                      type="text"
                      name="last"
                      autoComplete="family-name"
                      placeholder={copy.lastPlaceholder}
                      className={fieldClass}
                    />
                  </div>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder={copy.companyPlaceholder}
                    className={fieldClass}
                  />
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-white/40">
                  {copy.detailsHelp}
                </p>
              </div>
            </form>
          )}
        </div>

        {status === "sent" ? (
          <div className="border-t border-white/10 px-5 py-4">
            <button
              type="button"
              onClick={hide}
              className="w-full rounded-full bg-blue-deep px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-deep-hover"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="border-t border-white/10 px-5 pt-4 pb-4">
            <div className="relative">
              <textarea
                required
                form="enigma-contact"
                name="message"
                rows={3}
                placeholder={copy.messagePlaceholder}
                className="w-full resize-none rounded-xl border border-white/12 bg-transparent py-3 pr-14 pl-4 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-blue"
              />
              <button
                type="submit"
                form="enigma-contact"
                disabled={status === "sending"}
                aria-label={status === "sending" ? copy.sending : "Send message"}
                className="absolute right-2.5 bottom-2.5 flex size-9 items-center justify-center rounded-full bg-blue-deep text-white transition-colors hover:bg-blue-deep-hover disabled:opacity-50"
              >
                <Send className="size-4" strokeWidth={2} aria-hidden />
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-white/40">
              {status === "error" ? error : copy.sendHint}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ChatBubble({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-deep text-[10px] font-bold tracking-wide text-white"
        aria-hidden
      >
        E
      </span>
      <p className="rounded-2xl bg-white/6 px-3.5 py-3 text-sm leading-relaxed text-white/85">
        {children}
      </p>
    </div>
  );
}

const ctaStyles = {
  solid: "rounded-full bg-blue-deep px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-deep-hover",
  outline:
    "inline-block rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white",
  onAccent:
    "inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-blue-deep transition-colors hover:bg-offwhite",
  nav: "rounded-full bg-blue-deep px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-deep-hover",
};

export function ConsultButton({
  variant = "solid",
  children = ctaLabel,
}: {
  variant?: keyof typeof ctaStyles;
  children?: ReactNode
}) {
  const { show } = useContact();

  return (
    <button type="button" onClick={show} className={ctaStyles[variant]}>
      {children}
    </button>
  );
}
