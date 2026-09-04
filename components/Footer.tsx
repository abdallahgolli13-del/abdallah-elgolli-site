import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-14 md:flex-row md:justify-between md:px-8">
        <div className="relative h-14 w-32 invert mix-blend-difference">

          <Image src="/logo/aeg-logo.png" alt="AbdAllah El Golli Photography" fill className="object-contain" />
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-7">
          {[
            ["#travaux", "Travaux"],
            ["#packs", "Packs"],
            ["#a-propos", "À propos"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="font-display text-[12px] font-medium uppercase tracking-[0.2em] text-cream/60 transition-colors hover:text-cream"
            >
              {label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/abdallah.elgolli"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[12px] font-medium uppercase tracking-[0.2em] text-cream/60 transition-colors hover:text-cream"
          >
            Instagram ↗
          </a>
        </nav>

        <p className="text-center font-display text-[12px] uppercase tracking-[0.2em] text-cream/40">
          © 2026 AbdAllah El Golli · Tunis
        </p>
      </div>
    </footer>
  );
}
