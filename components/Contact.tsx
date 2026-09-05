"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

const IG_URL = "https://www.instagram.com/abdallah.elgolli";
const EMAIL = "ElGoulliAgency@gmail.com"; // ← remplace par ton email
const WEB3FORMS_KEY = "2d2d5d89-8281-4de4-a742-24f08fdad664";
const WHATSAPP_NUMBER = ""; // ← ton numéro au format international sans "+", ex: "21612345678". Laisse vide pour masquer le bouton.

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error" | "nokey">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (WEB3FORMS_KEY === "VOTRE_CLE_WEB3FORMS") {
      setStatus("nokey");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Nouveau message — aeg-portfolio",
          from_name: String(data.get("marque") || data.get("nom") || "Site portfolio"),
          nom: data.get("nom"),
          marque: data.get("marque"),
          replyto: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3.5 text-[15px] outline-none transition-colors placeholder:text-ink/35 focus:border-ink";

  return (
    <section id="contact" className="scroll-mt-24 border-t border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        {/* — gauche — */}
        <div>
          <Reveal>
            <p className="mb-3 font-display text-[13px] font-medium uppercase tracking-[0.3em] text-ink/60">
              Contact
            </p>
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
              Collaborons<span className="text-ink/40">.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/70">
              Une marque, un produit, une idée ? Écris-moi — réponse sous 24h,
              devis sous 48h.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3.5">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-ink/15 p-4 transition-colors duration-300 hover:border-ink"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:scale-110">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.8" cy="6.2" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span>
                  <span className="block font-display text-[11px] font-medium uppercase tracking-[0.22em] text-ink/50">
                    Instagram
                  </span>
                  <span className="block font-display text-lg font-medium">@abdallah.elgolli</span>
                </span>
              </a>

              {WHATSAPP_NUMBER && (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-ink/15 p-4 transition-colors duration-300 hover:border-ink"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1fAe54] text-white transition-transform duration-300 group-hover:scale-110">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.7l.5-.6c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.3Z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-display text-[11px] font-medium uppercase tracking-[0.22em] text-ink/50">
                      WhatsApp
                    </span>
                    <span className="block font-display text-lg font-medium">Réponse rapide</span>
                  </span>
                </a>
              )}

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-ink/15 p-4 transition-colors duration-300 hover:border-ink"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:scale-110">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2.5" y="5" width="19" height="14" rx="3" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span>
                  <span className="block font-display text-[11px] font-medium uppercase tracking-[0.22em] text-ink/50">
                    Email
                  </span>
                  <span className="block font-display text-lg font-medium">{EMAIL}</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* — formulaire — */}
        <Reveal delay={0.2}>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input name="nom" required placeholder="Votre nom *" className={inputCls} />
              <input name="marque" placeholder="Votre marque" className={inputCls} />
            </div>
            <input name="email" type="email" required placeholder="Votre email *" className={inputCls} />
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Parlez-moi de votre produit et de ce dont vous avez besoin… *"
              className={`${inputCls} resize-none`}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 rounded-full bg-ink py-4 font-display text-sm font-medium uppercase tracking-[0.18em] text-cream transition-transform duration-300 hover:scale-[1.02] disabled:opacity-50"
            >
              {status === "sending" ? "Envoi…" : "Envoyer le message"}
            </button>

            {status === "ok" && (
              <p className="rounded-xl border border-ink/20 px-4 py-3 text-center text-sm">
                Message envoyé ✦ Je vous réponds sous 24h.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-xl border border-red-900/30 px-4 py-3 text-center text-sm text-red-900">
                Une erreur est survenue — réessayez ou passez par Instagram.
              </p>
            )}
            {status === "nokey" && (
              <p className="rounded-xl border border-amber-700/40 bg-amber-100/60 px-4 py-3 text-center text-sm text-amber-900">
                Formulaire pas encore activé (clé Web3Forms à configurer — voir DEPLOY.md).
                En attendant : Instagram ou email ✦
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
