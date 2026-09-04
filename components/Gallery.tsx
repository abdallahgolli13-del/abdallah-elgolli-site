"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CATEGORIES, WORKS, Work, Category } from "@/lib/projects";
import Reveal from "./Reveal";

export default function Gallery() {
  const [filter, setFilter] = useState<Category | "tout">("tout");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (filter === "tout" ? WORKS : WORKS.filter((w) => w.category === filter)),
    [filter]
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) => (i === null ? null : (i + dir + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  return (
    <section id="travaux" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="mb-3 font-display text-[13px] font-medium uppercase tracking-[0.3em] text-ink/60">
            Portfolio
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Le travail<span className="text-ink/40"> parle.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setFilter(c.id);
                  setOpenIndex(null);
                }}
                className={`rounded-full border px-4.5 py-2 font-display text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                  filter === c.id
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/25 hover:border-ink"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((w, i) => (
            <motion.figure
              layout
              key={w.slug}
              initial={reduce ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.55, delay: reduce ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group mb-5 break-inside-avoid cursor-pointer"
              onClick={() => setOpenIndex(i)}
              data-cursor
            >
              <div className="relative overflow-hidden rounded-2xl bg-ink/5">
                <Image
                  src={w.thumb}
                  alt={w.alt}
                  width={900}
                  height={1125}
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-[11px] font-medium uppercase tracking-[0.22em] text-cream/75">
                    {w.brand} · {w.year}
                  </p>
                  <p className="mt-1 font-display text-xl font-medium text-cream">{w.title}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* — Lightbox — */}
      <AnimatePresence>
        {openIndex !== null && filtered[openIndex] && (
          <Lightbox
            work={filtered[openIndex]}
            onClose={close}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function Lightbox({
  work,
  onClose,
  onPrev,
  onNext,
}: {
  work: Work;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* fermer */}
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
      >
        ✕
      </button>
      {/* nav */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Précédente"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink md:left-6"
      >
        ←
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Suivante"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink md:right-6"
      >
        →
      </button>

      <motion.div
        key={work.slug}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={work.full}
          alt={work.alt}
          width={1280}
          height={1600}
          className="lightbox-img rounded-lg shadow-2xl"
        />
        <div className="mt-5 text-center">
          <p className="font-display text-[11px] font-medium uppercase tracking-[0.24em] text-cream/60">
            {work.brand} · {work.year}
          </p>
          <p className="mt-1 font-display text-2xl font-medium text-cream">{work.title}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
