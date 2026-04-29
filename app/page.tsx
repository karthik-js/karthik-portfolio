import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { StatsHud } from "@/components/StatsHud";
import { DotBackground } from "@/components/ui/dot-background";

export const metadata = {
  title: "Karthik Talam — Lead Frontend Engineer",
  description:
    "8+ years building high-performance web platforms. Expert in Next.js App Router, enterprise auth, and AI-augmented engineering workflows.",
};

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
      <StatsHud />
    </>
  );
}
