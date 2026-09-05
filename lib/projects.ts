export type Category = "parfum" | "skincare" | "cheveux" | "graphique";

export type ProductId = "progenix" | "jcb-brume" | "jcb-creme" | "souplesse" | "souplesse-design";

export type Work = {
  slug: string;
  product: ProductId;
  title: string;
  category: Category;
  year: string;
  thumb: string;
  full: string;
  alt: string;
};

export const PRODUCTS: { id: ProductId; name: string; subtitle: string }[] = [
  { id: "progenix", name: "ProGénix", subtitle: "Sérum contour des yeux — série concept" },
  { id: "jcb-brume", name: "Japanese Cherry Blossom", subtitle: "Brume parfumée" },
  { id: "jcb-creme", name: "Japanese Cherry Blossom", subtitle: "Crème corps ultime" },
  { id: "souplesse", name: "Souplesse", subtitle: "Shampoing Pomme & Raisin" },
  { id: "souplesse-design", name: "Souplesse", subtitle: "Design graphique — affiche éditoriale" },
];

export const CATEGORIES: { id: Category | "tout"; label: string }[] = [
  { id: "tout", label: "Tout" },
  { id: "parfum", label: "Parfums" },
  { id: "skincare", label: "Skincare" },
  { id: "cheveux", label: "Cheveux" },
  { id: "graphique", label: "Graphique" },
];

export const WORKS: Work[] = [
  // — ProGénix · sérum contour des yeux (concept) —
  {
    slug: "progenix-portrait",
    product: "progenix",
    title: "Le portrait",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-1-thumb.webp",
    full: "/images/progenix-1-full.webp",
    alt: "Sérum contour des yeux ProGénix, flacon fermé dressé sur un socle sombre dans une lumière violette.",
  },
  {
    slug: "progenix-suspension",
    product: "progenix",
    title: "La suspension",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-2-thumb.webp",
    full: "/images/progenix-2-full.webp",
    alt: "Compte-gouttes suspendu au-dessus du flacon ouvert de sérum ProGénix, goutte en formation.",
  },
  {
    slug: "progenix-chute",
    product: "progenix",
    title: "La chute",
    category: "skincare",
    year: "2026",
    thumb: "/images/progenix-3-thumb.webp",
    full: "/images/progenix-3-full.webp",
    alt: "Compte-gouttes levé au-dessus du sérum ProGénix, une goutte tombe dans une lueur pourpre.",
  },
  // — JCB · brume parfumée —
  {
    slug: "jcb-brume-lueur",
    product: "jcb-brume",
    title: "La lueur",
    category: "parfum",
    year: "2026",
    thumb: "/images/jcb-brume-1-thumb.webp",
    full: "/images/jcb-brume-1-full.webp",
    alt: "Brume parfumée Japanese Cherry Blossom debout sous une branche de cerisier, lueur dorée et pétales en chute.",
  },
  {
    slug: "jcb-brume-crepuscule",
    product: "jcb-brume",
    title: "Le crépuscule",
    category: "parfum",
    year: "2026",
    thumb: "/images/jcb-brume-2-thumb.webp",
    full: "/images/jcb-brume-2-full.webp",
    alt: "Brume parfumée Japanese Cherry Blossom sur fond bordeaux profond, branche de cerisier en fleurs.",
  },
  {
    slug: "jcb-brume-soie",
    product: "jcb-brume",
    title: "La soie",
    category: "parfum",
    year: "2026",
    thumb: "/images/jcb-brume-3-thumb.webp",
    full: "/images/jcb-brume-3-full.webp",
    alt: "Brume parfumée Japanese Cherry Blossom allongée sur soie ivoire, éclats d'or et bouchon posé à côté.",
  },
  // — JCB · crème corps —
  {
    slug: "jcb-creme-joyau",
    product: "jcb-creme",
    title: "Le joyau",
    category: "skincare",
    year: "2026",
    thumb: "/images/jcb-creme-1-thumb.webp",
    full: "/images/jcb-creme-1-full.webp",
    alt: "Tube de crème corps Japanese Cherry Blossom dressé sur un coin de verre rouge, fond rouge profond.",
  },
  {
    slug: "jcb-creme-floraison",
    product: "jcb-creme",
    title: "La floraison",
    category: "skincare",
    year: "2026",
    thumb: "/images/jcb-creme-2-thumb.webp",
    full: "/images/jcb-creme-2-full.webp",
    alt: "Tube de crème corps Japanese Cherry Blossom sur bois sombre près d'une branche de cerisier, pétales en chute.",
  },
  {
    slug: "jcb-creme-matin",
    product: "jcb-creme",
    title: "Le matin",
    category: "skincare",
    year: "2026",
    thumb: "/images/jcb-creme-3-thumb.webp",
    full: "/images/jcb-creme-3-full.webp",
    alt: "Tube de crème corps Japanese Cherry Blossom allongé sur soie ivoire avec éclats d'or au soleil chaud.",
  },
  // — Souplesse · shampoing —
  {
    slug: "souplesse-verger",
    product: "souplesse",
    title: "Au verger",
    category: "cheveux",
    year: "2026",
    thumb: "/images/souplesse-1-thumb.webp",
    full: "/images/souplesse-1-full.webp",
    alt: "Shampoing Souplesse Effet Fortifiant dressé au milieu de pommes vertes et de raisins.",
  },
  {
    slug: "souplesse-recolte",
    product: "souplesse",
    title: "La récolte",
    category: "cheveux",
    year: "2026",
    thumb: "/images/souplesse-2-thumb.webp",
    full: "/images/souplesse-2-full.webp",
    alt: "Flacon de shampoing Souplesse serré parmi de grosses pommes vertes couvertes de gouttes d'eau.",
  },
  {
    slug: "souplesse-podium",
    product: "souplesse",
    title: "Le podium",
    category: "cheveux",
    year: "2026",
    thumb: "/images/souplesse-3-thumb.webp",
    full: "/images/souplesse-3-full.webp",
    alt: "Shampoing Souplesse sur un podium gris en coin, fond vert d'eau studio.",
  },
  {
    slug: "souplesse-mousse",
    product: "souplesse",
    title: "La mousse",
    category: "cheveux",
    year: "2026",
    thumb: "/images/souplesse-4-thumb.webp",
    full: "/images/souplesse-4-full.webp",
    alt: "Flacon de shampoing Souplesse entouré d'une mousse blanche onctueuse et de bulles.",
  },
  // — Souplesse · design graphique —
  {
    slug: "souplesse-affiche",
    product: "souplesse-design",
    title: "L'affiche",
    category: "graphique",
    year: "2026",
    thumb: "/images/souplesse-design-thumb.webp",
    full: "/images/souplesse-design-full.webp",
    alt: "Affiche éditoriale : typographie géante « Souplesse » derrière le flacon, accroche Pomme & Raisin sur socle sombre.",
  },
];
