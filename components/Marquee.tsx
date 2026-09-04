const ITEMS = ["Parfums", "Cosmétiques", "Skincare", "Packshots", "Design graphique", "Tunis"];

export default function Marquee() {
  const strip = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="relative z-10 -rotate-1 overflow-hidden bg-ink py-3.5" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap pr-10">
        {strip.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm font-medium uppercase tracking-[0.3em] text-cream">
            {item}
            <span className="text-cream/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
