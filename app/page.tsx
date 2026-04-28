import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { DotBackground } from "@/components/ui/dot-background";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <DotBackground>
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </DotBackground>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
