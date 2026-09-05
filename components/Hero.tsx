"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { scrollToHash } from "./SmoothScroll";

const HERO_IMAGES = [
  { src: "/images/souplesse-design-full.webp", alt: "Affiche éditoriale Souplesse — typographie géante derrière le flacon" },
  { src: "/images/progenix-2-full.webp", alt: "Sérum ProGénix, compte-gouttes et goutte suspendue" },
  { src: "/images/jcb-brume-1-full.webp", alt: "Brume Japanese Cherry Blossom en lueur dorée" },
  { src: "/images/jcb-creme-1-full.webp", alt: "Crème corps sur prisme rouge" },
];

const WORDS = ["Visuels", "produit", "pour", "marques", "de", "beauté", "&", "parfums."];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), 4200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-10 px-5 pb-16 pt-32 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pt-24">
        {/* — texte — */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-display text-[13px] font-medium uppercase tracking-[0.3em] text-ink/60"
          >
            Studio créatif · Tunis
          </motion.p>

          <h1 className="font-display text-[clamp(2.6rem,7.2vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            {WORDS.map((w, i) => (
              <motion.span
                key={i}
                className="mr-[0.28em] inline-block"
                initial={{ opacity: 0, y: 40, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.75, delay: 0.18 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70 md:text-base"
          >
            Photographie produit, finition à la main. Chaque image
            est construite comme une campagne — lumière, matière, émotion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToHash("#travaux")}
              className="rounded-full bg-ink px-7 py-3.5 font-display text-sm font-medium uppercase tracking-[0.16em] text-cream transition-transform duration-300 hover:scale-105"
            >
              Voir le travail
            </button>
            <button
              onClick={() => scrollToHash("#contact")}
              className="rounded-full border border-ink/30 px-7 py-3.5 font-display text-sm font-medium uppercase tracking-[0.16em] transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream"
            >
              Collaborons
            </button>
          </motion.div>
        </div>

        {/* — visuel en arche, crossfade — */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-[400px] md:block"
        >
          <div className="absolute inset-0 overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-ink/5">
            <AnimatePresence mode="sync">
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.07 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              >
                <Image
                  src={HERO_IMAGES[index].src}
                  alt={HERO_IMAGES[index].alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* cadre décalé */}
          <div className="absolute -inset-3 -z-10 rounded-t-[999px] rounded-b-[36px] border border-ink/15" />
        </motion.div>
      </div>

      {/* indicateur scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-ink/30 p-1.5"
        >
          <div className="h-2 w-[3px] rounded-full bg-ink/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
