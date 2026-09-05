"use client";

import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Brief & direction",
    text: "Vous m'envoyez le produit et vos envies. Je propose un univers visuel aligné avec votre marque : lumière, matières, émotions.",
  },
  {
    n: "02",
    title: "Previews sous 72h",
    text: "Vous recevez des aperçus basse résolution pour validation. On ajuste ensemble jusqu'à ce que ce soit exactement ça.",
  },
  {
    n: "03",
    title: "Livraison HD",
    text: "Fichiers haute définition prêts pour Instagram, votre site et l'impression. Organisés, nommés, prêts à publier.",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-10">
        <div>
          <Reveal>
            <p className="mb-3 font-display text-[13px] font-medium uppercase tracking-[0.3em] text-ink/60">
              À propos
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              La photographie produit, réinventée.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-7 flex flex-col gap-5 text-[15px] leading-relaxed text-ink/75">
              <p>
                Je m'appelle <strong className="font-medium text-ink">AbdAllah El Golli</strong>.
                J'aide les marques de parfums, cosmétiques et skincare à arrêter
                de poster des photos de produit bancales — et à publier des
                visuels qui donnent envie d'acheter.
              </p>
              <p>
                Ma méthode : les fondamentaux de la photographie de studio,
                une direction artistique exigeante et une finition à la main.
                Le résultat a le calibre d'une campagne internationale, avec la
                réactivité et la proximité d'un studio local.
              </p>
              <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-ink/50">
                Basé à Tunis, Tunisie 🇹🇳
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="group flex gap-6 rounded-2xl border border-ink/12 p-6 transition-colors duration-300 hover:border-ink/40 md:p-7" data-cursor>
                <span className="font-display text-3xl font-semibold text-ink/15 transition-colors duration-300 group-hover:text-ink/60">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
