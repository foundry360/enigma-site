"use client";

import { useEffect, useState } from "react";
import { icons } from "./icons";

const ArrowUp = icons.arrowUp;

/* Roughly the height of the hero, so the button appears only once the masthead
   has scrolled away. */
const REVEAL_AFTER_PX = 600;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > REVEAL_AFTER_PX);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      /* Leaving `behavior` unset defers to the `scroll-behavior` in globals.css,
         which already drops to instant under prefers-reduced-motion. */
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 z-40 rounded-full bg-blue-deep p-3 text-white transition-opacity duration-200 hover:bg-blue-deep-hover focus-visible:ring-2 focus-visible:ring-blue-soft focus-visible:outline-none sm:right-10 sm:bottom-10 ${
        visible ? "opacity-100" : "invisible opacity-0"
      }`}
    >
      <ArrowUp className="size-5" strokeWidth={2} aria-hidden />
    </button>
  );
}
