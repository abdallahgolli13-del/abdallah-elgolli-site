import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Gallery from "@/components/Gallery";
import Packs from "@/components/Packs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Gallery />
        <Packs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
