import { TESTIMONIALS } from "@/lib/testimonials";
import Reveal from "./Reveal";

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 font-display text-[13px] font-medium uppercase tracking-[0.3em] text-ink/60">
            Ils m&apos;ont fait confiance
          </p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold tracking-[-0.02em]">
            Ce que disent les marques.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-ink/12 p-7">
                <p className="text-[15px] leading-relaxed text-ink/80">« {t.quote} »</p>
                <footer className="mt-5 font-display text-sm font-medium">
                  {t.author}
                  <span className="block text-[12px] font-normal uppercase tracking-[0.16em] text-ink/50">
                    {t.role}
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
