export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

/**
 * Témoignages clients — ajoute une entrée ici quand une marque te laisse un retour.
 * Tant que la liste est vide, la section ne s'affiche pas sur le site.
 *
 * Exemple :
 * { quote: "Des visuels qui ont transformé notre feed.", author: "Sonia B.", role: "Fondatrice, Ma Douce Nature" }
 */
export const TESTIMONIALS: Testimonial[] = [];
