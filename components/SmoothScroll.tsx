"use client";

import { useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    window.__lenis = lenis;
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    setEnabled(true);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return (
    <div data-lenis-enabled={enabled || undefined}>{children}</div>
  );
}

/** Scroll fluide vers une ancre, via Lenis si disponible. */
export function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el as HTMLElement, { offset: -70 });
  else el.scrollIntoView({ behavior: "smooth" });
}
