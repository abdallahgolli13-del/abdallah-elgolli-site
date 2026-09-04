import type { Metadata } from "next";
import { Jost, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdallah-elgolli.vercel.app"),
  title: "AbdAllah El Golli — Photographie produit · Parfums & Cosmétiques · Tunis",
  description:
    "Visuels produit haut de gamme pour marques de beauté, parfums et cosmétiques. Studio créatif à Tunis : photographie assistée par IA, finie à la main. Previews sous 72h, livraison haute définition.",
  keywords: [
    "photographie produit",
    "packshot",
    "parfum",
    "cosmétiques",
    "Tunisie",
    "Tunis",
    "photographe",
    "visuels réseaux sociaux",
  ],
  openGraph: {
    title: "AbdAllah El Golli — Photographie produit",
    description:
      "Visuels produit haut de gamme pour marques de beauté & parfums. Studio à Tunis.",
    images: ["/og.jpg"],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${jost.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
