"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CATEGORIES, PRODUCTS, WORKS, Work, Category } from "@/lib/projects";
import Reveal from "./Reveal";

export default function Gallery() {
  const [filter, setFilter] = useState<Category | "tout">("tout");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (filter === "tout" ? WORKS : WORKS.filter((w) => w.category === filter)),
    [filter]
  );

  // Groupes par produit (ordre défini par PRODUCTS), seuls les produits filtrés visibles
  const groups = useMemo(
    () =>
      PRODUCTS.map((p) => ({
        product: p,
        works: filtered.filter((w) => w.product === p.id),
      })).filter((g) => g.works.length > 0),
    [filtered]
  );

  const close = useCallback(() => setOpenSlug(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenSlug((cur) => {
        if (cur === null) return null;
        const i = filtered.findIndex((w) => w.slug === cur);
        return filtered[(i + dir + filtered.length) % filtered.length].slug;
      }),
    [filtered]
  );

  useEffect(() => {
    if (openSlug === null) return;
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
  }, [openSlug, close, step]);

  const openWork = openSlug ? filtered.find((w) => w.slug === openSlug) : null;

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
            {CATEGORIES.map((c) => {
              const count = c.id === "tout" ? WORKS.length : WORKS.filter((w) => w.category === c.id).length;
              if (count === 0) return null; // jamais de filtre vide
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setFilter(c.id);
                    setOpenSlug(null);
                  }}
                  className={`rounded-full border px-4.5 py-2 font-display text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                    filter === c.id
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/25 hover:border-ink"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* — blocs par produit — */}
      <div className="flex flex-col gap-16 md:gap-20">
        {groups.map((g) => (
          <div key={g.product.id}>
            <Reveal>
              <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3">
                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {g.product.name}
                  <span className="ml-3 text-base font-normal text-ink/50 md:text-lg">{g.product.subtitle}</span>
                </h3>
                <span className="shrink-0 font-display text-[12px] font-medium uppercase tracking-[0.2em] text-ink/40">
                  {g.works.length} visuel{g.works.length > 1 ? "s" : ""}
                </span>
              </div>
            </Reveal>
            <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${g.works.length >= 3 ? "lg:grid-cols-3" : ""}`}>
              {g.works.map((w, i) => (
                <motion.figure
                  key={w.slug}
                  initial={reduce ? false : { opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: reduce ? 0 : i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-pointer"
                  onClick={() => setOpenSlug(w.slug)}
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
                        {w.year}
                      </p>
                      <p className="mt-1 font-display text-xl font-medium text-cream">{w.title}</p>
                    </figcaption>
                  </div>
                </motion.figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* — Lightbox — */}
      <AnimatePresence>
        {openWork && (
          <Lightbox work={openWork} onClose={close} onPrev={() => step(-1)} onNext={() => step(1)} />
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
  const product = PRODUCTS.find((p) => p.id === work.product);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
      >
        ✕
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Précédente"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink md:left-6"
      >
        ←
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Suivante"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink md:right-6"
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
            {product?.name} — {product?.subtitle} · {work.year}
          </p>
          <p className="mt-1 font-display text-2xl font-medium text-cream">{work.title}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
