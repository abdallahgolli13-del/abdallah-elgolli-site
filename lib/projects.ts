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
  // — ProGénix —
  {
    slug: "progenix-1",
    brand: "ProGénix",
    title: "Sérum Anti-Râge",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-1-thumb.webp",
    full: "/images/progenix-1-full.webp",
    alt: "Sérum ProGénix — portrait studio sur socle sombre.",
  },
  {
    slug: "progenix-2",
    brand: "ProGénix",
    title: "Première Goutte",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-2-thumb.webp",
    full: "/images/progenix-2-full.webp",
    alt: "Sérum ProGénix — compte-gouttes soulevé, goutte suspendue.",
  },
  {
    slug: "progenix-3",
    brand: "ProGénix",
    title: "Texture & Fil",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-3-thumb.webp",
    full: "/images/progenix-3-full.webp",
    alt: "Sérum ProGénix — détail du compte-gouttes.",
  },
  // — Bath & Body Works · Japanese Cherry Blossom Brume —
  {
    slug: "jcb-brume-1",
    brand: "Japanese Cherry Blossom",
    title: "Le Faisceau",
    category: "parfum",
    year: "2026",
    thumb: "/images/jcb-brume-1-thumb.webp",
    full: "/images/jcb-brume-1-full.webp",
    alt: "Brume parfumée JCB — contre-jour et rayons dorés.",
  },
  {
    slug: "jcb-brume-2",
    brand: "Japanese Cherry Blossom",
    title: "La Soie",
    category: "parfum",
    year: "2026",
    thumb: "/images/jcb-brume-2-thumb.webp",
    full: "/images/jcb-brume-2-full.webp",
    alt: "Brume parfumée JCB — sur soie et éclats d'or.",
  },
  {
    slug: "jcb-brume-3",
    brand: "Japanese Cherry Blossom",
    title: "La Lueur",
    category: "parfum",
    year: "2026",
    thumb: "/images/jcb-brume-3-thumb.webp",
    full: "/images/jcb-brume-3-full.webp",
    alt: "Brume parfumée JCB — lueur dorée et cerisiers.",
  },
  // — Bath & Body Works · JCB Crème corps —
  {
    slug: "jcb-creme-1",
    brand: "JCB — Crème corps",
    title: "Le Joyau",
    category: "skincare",
    year: "2026",
    thumb: "/images/jcb-creme-1-thumb.webp",
    full: "/images/jcb-creme-1-full.webp",
    alt: "Crème corps JCB — sur prisme laqué bordeaux.",
  },
  {
    slug: "jcb-creme-2",
    brand: "JCB — Crème corps",
    title: "La Floraison",
    category: "skincare",
    year: "2026",
    thumb: "/images/jcb-creme-2-thumb.webp",
    full: "/images/jcb-creme-2-full.webp",
    alt: "Crème corps JCB — ambiance bois sombre et cerisiers.",
  },
  {
    slug: "jcb-creme-3",
    brand: "JCB — Crème corps",
    title: "Le Matin",
    category: "skincare",
    year: "2026",
    thumb: "/images/jcb-creme-3-thumb.webp",
    full: "/images/jcb-creme-3-full.webp",
    alt: "Crème corps JCB — soleil matinal sur soie ivoire.",
  },
  // — Souplesse Shampoo —
  {
    slug: "souplesse-1",
    brand: "Souplesse",
    title: "Pomme & Raisin — Studio",
    category: "skincare",
    year: "2026",
    thumb: "/images/souplesse-1-thumb.webp",
    full: "/images/souplesse-1-full.webp",
    alt: "Shampooing Souplesse — flacon vert sur podium.",
  },
  {
    slug: "souplesse-2",
    brand: "Souplesse",
    title: "Effet Fortifiant",
    category: "skincare",
    year: "2026",
    thumb: "/images/souplesse-2-thumb.webp",
    full: "/images/souplesse-2-full.webp",
    alt: "Shampooing Souplesse — vue rapprochée étiquette.",
  },
  {
    slug: "souplesse-3",
    brand: "Souplesse",
    title: "Campagne Éditoriale",
    category: "skincare",
    year: "2026",
    thumb: "/images/souplesse-3-thumb.webp",
    full: "/images/souplesse-3-full.webp",
    alt: "Shampooing Souplesse — visuel nettoyé.",
  },
  {
    slug: "souplesse-4",
    brand: "Souplesse",
    title: "Pureté Végétale",
    category: "skincare",
    year: "2026",
    thumb: "/images/souplesse-4-thumb.webp",
    full: "/images/souplesse-4-full.webp",
    alt: "Shampooing Souplesse — angle de vue dynamique.",
  },
];
