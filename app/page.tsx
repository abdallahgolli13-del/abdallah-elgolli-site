import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import Packs from "@/components/Packs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AbdAllah El Golli Photography",
  description:
    "Visuels produit haut de gamme pour marques de beauté, parfums et cosmétiques. Studio créatif à Tunis.",
  url: "https://abdallah-elgolli.vercel.app",
  image: "https://abdallah-elgolli.vercel.app/og.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tunis",
    addressCountry: "TN",
  },
  sameAs: ["https://www.instagram.com/abdallah.elgolli"],
  areaServed: "TN",
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Gallery />
        <Packs />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
