"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { scrollToHash } from "./SmoothScroll";

type Pack = {
  name: string;
  tagline: string;
  items: string[];
  featured?: boolean;
};

const PACKS: Pack[] = [
  {
    name: "Découverte",
    tagline: "Pour tester la différence sur 2 produits",
    items: [
      "2 produits mis en scène",
      "10 visuels haute définition",
      "2 posts graphiques par produit",
      "Previews sous 72h — 1 série de retouches",
      "Livraison Google Drive organisée",
    ],
  },
  {
    name: "Collection",
    tagline: "Le best-seller — votre ligne complète",
    featured: true,
    items: [
      "3 produits + 1 produit OFFERT",
      "20 visuels haute définition",
      "8 posts graphiques sur-mesure",
      "Visuel famille des 4 produits",
      "Previews sous 72h — 1 série de retouches",
      "Livraison Google Drive organisée",
    ],
  },
  {
    name: "Studio",
    tagline: "Pour une campagne ou un restockage complet",
    items: [
      "7 produits + 2 produits OFFERTS",
      "45 visuels haute définition",
      "18 posts graphiques sur-mesure",
      "Direction artistique complète",
      "Previews sous 72h — 2 séries de retouches",
      "Livraison Google Drive organisée",
    ],
  },
];

const A_LA_CARTE = [
  "Produit supplémentaire — 5 visuels + 2 posts",
  "Post graphique additionnel",
  "Livraison express 48h",
];

export default function Packs() {
  return (
    <section id="packs" className="relative scroll-mt-24 bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-14 text-center md:mb-20">
          <p className="mb-3 font-display text-[13px] font-medium uppercase tracking-[0.3em] text-cream/50">
            Packs
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            Simple. Par packs. Sans surprise.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-cream/60">
            Chaque pack est un projet clé en main : direction artistique,
            production, retouches et livraison. Tarifs sur demande.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PACKS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  p.featured
                    ? "border-cream/70 bg-cream text-ink"
                    : "border-cream/15 bg-cream/[0.04]"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-1.5 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-cream">
                    Le plus choisi
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
                <p className={`mt-1.5 text-sm ${p.featured ? "text-ink/60" : "text-cream/55"}`}>
                  {p.tagline}
                </p>
                <ul className={`my-7 flex flex-col gap-3 border-t pt-7 text-[14.5px] leading-snug ${p.featured ? "border-ink/10" : "border-cream/10"}`}>
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className={`mt-[3px] font-display text-xs ${p.featured ? "text-ink" : "text-cream/70"}`}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToHash("#contact")}
                  className={`mt-auto rounded-full py-3.5 font-display text-[13px] font-medium uppercase tracking-[0.16em] transition-transform duration-300 hover:scale-[1.03] ${
                    p.featured
                      ? "bg-ink text-cream"
                      : "border border-cream/30 hover:bg-cream hover:text-ink"
                  }`}
                >
                  Demander un devis
                </button>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-cream/12 px-8 py-7 text-center md:flex-row md:justify-between md:text-left">
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-cream/70">
              À la carte — {A_LA_CARTE.join(" · ")}
            </p>
            <button
              onClick={() => scrollToHash("#contact")}
              className="whitespace-nowrap rounded-full bg-cream px-6 py-3 font-display text-[13px] font-medium uppercase tracking-[0.16em] text-ink transition-transform duration-300 hover:scale-105"
            >
              Tarifs sur demande 📩
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
