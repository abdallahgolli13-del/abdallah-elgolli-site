"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { scrollToHash } from "./SmoothScroll";

const LINKS = [
  { href: "#travaux", label: "Travaux" },
  { href: "#packs", label: "Packs" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-cream/75 shadow-[0_1px_0_rgba(19,19,19,0.08)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          aria-label="Retour en haut"
          className="relative block h-11 w-[86px] transition-transform duration-300 hover:scale-[1.04] md:h-12 md:w-[94px]"
        >
          <Image src="/logo/aeg-logo.png" alt="AbdAllah El Golli Photography" fill className="object-contain" priority />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="group relative font-display text-[15px] font-medium uppercase tracking-[0.14em]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="rounded-full bg-ink px-5 py-2.5 font-display text-[13px] font-medium uppercase tracking-[0.16em] text-cream transition-transform duration-300 hover:scale-105"
            >
              Collaborons
            </a>
          </li>
        </ul>

        {/* burger mobile */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`h-[1.5px] w-6 bg-ink transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="backdrop-blur-lg bg-cream/95 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <a
                    href={l.href}
                    onClick={(e) => go(e, l.href)}
                    className="block py-3 font-display text-2xl font-medium uppercase tracking-[0.12em]"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
