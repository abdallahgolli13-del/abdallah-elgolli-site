export type Category = "parfum" | "skincare" | "graphique";

export type Work = {
  slug: string;
  brand: string;
  title: string;
  category: Category;
  year: string;
  thumb: string;
  full: string;
  alt: string;
};

export const CATEGORIES: { id: Category | "tout"; label: string }[] = [
  { id: "tout", label: "Tout" },
  { id: "parfum", label: "Parfums" },
  { id: "skincare", label: "Skincare" },
  { id: "graphique", label: "Graphique" },
];

export const WORKS: Work[] = [
  // — ProGénix · série concept skincare —
  {
    slug: "progenix-fleur",
    brand: "ProGénix",
    title: "La fleur",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-1-thumb.webp",
    full: "/images/progenix-1-full.webp",
    alt: "Sérum anti-rides ProGénix flottant parmi des fleurs violettes sur fond lavande — visuel concept.",
  },
  {
    slug: "progenix-goutte",
    brand: "ProGénix",
    title: "Première goutte",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-2-thumb.webp",
    full: "/images/progenix-2-full.webp",
    alt: "Flacon de sérum ProGénix ouvert, compte-gouttes soulevé, une goutte suspendue sur socle sombre.",
  },
  {
    slug: "progenix-filet",
    brand: "ProGénix",
    title: "Le filet",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-3-thumb.webp",
    full: "/images/progenix-3-full.webp",
    alt: "Compte-gouttes au-dessus d'un flacon de sérum ProGénix, la goutte glisse sur le verre.",
  },
  {
    slug: "progenix-portrait",
    brand: "ProGénix",
    title: "Le portrait",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-4-thumb.webp",
    full: "/images/progenix-4-full.webp",
    alt: "Portrait studio du flacon fermé ProGénix, centré sur un socle sombre sous lumière douce.",
  },
  // — Bath & Body Works · Japanese Cherry Blossom Brume —
  {
    slug: "jcb-brume-faisceau",
    brand: "Japanese Cherry Blossom",
    title: "Le faisceau",
    category: "parfum",
    year: "2026",
    thumb: "/images/jcb-brume-1-thumb.webp",
    full: "/images/jcb-brume-1-full.webp",
    alt: "Brume parfumée en contre-jour : faisceau de lumière dorée et pétales de cerisier en chute.",
  },
  {
    slug: "jcb-brume-soie",
    brand: "Japanese Cherry Blossom",
    title: "La soie",
    category: "parfum",
    year: "2026",
    thumb: "/images/jcb-brume-2-thumb.webp",
    full: "/images/jcb-brume-2-full.webp",
    alt: "Flacon de brume parfumée allongé sur soie ivoire, éclats d'or dispersés en lumière chaude.",
  },
  {
    slug: "jcb-brume-lueur",
    brand: "Japanese Cherry Blossom",
    title: "La lueur",
    category: "parfum",
    year: "2026",
    thumb: "/images/jcb-brume-3-thumb.webp",
    full: "/images/jcb-brume-3-full.webp",
    alt: "Brume parfumée dans une lueur dorée, fleurs de cerisier sur le verre, pétales en suspension.",
  },
  // — Bath & Body Works · JCB Crème corps —
  {
    slug: "jcb-creme-joyau",
    brand: "JCB — Crème corps",
    title: "Le joyau",
    category: "skincare",
    year: "2026",
    thumb: "/images/jcb-creme-1-thumb.webp",
    full: "/images/jcb-creme-1-full.webp",
    alt: "Tube de crème corps rouge dressé sur un prisme laqué, fond bordeaux profond.",
  },
  {
    slug: "jcb-creme-floraison",
    brand: "JCB — Crème corps",
    title: "La floraison",
    category: "skincare",
    year: "2026",
    thumb: "/images/jcb-creme-2-thumb.webp",
    full: "/images/jcb-creme-2-full.webp",
    alt: "Tube de crème corps sur bois sombre près d'une branche de cerisier, pétales en chute.",
  },
  {
    slug: "jcb-creme-matin",
    brand: "JCB — Crème corps",
    title: "Le matin",
    category: "skincare",
    year: "2026",
    thumb: "/images/jcb-creme-3-thumb.webp",
    full: "/images/jcb-creme-3-full.webp",
    alt: "Tube de crème corps allongé sur soie ivoire avec éclats d'or au soleil chaud.",
  },
];
