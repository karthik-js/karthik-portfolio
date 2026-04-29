import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsHud } from "@/components/StatsHud";
import { DotBackground } from "@/components/ui/dot-background";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/sections/About").then(m => ({ default: m.About })), {
  loading: () => <div className="h-96" />,
});

const Projects = dynamic(() => import("@/components/sections/Projects").then(m => ({ default: m.Projects })), {
  loading: () => <div className="h-96" />,
});

const Experience = dynamic(() => import("@/components/sections/Experience").then(m => ({ default: m.Experience })), {
  loading: () => <div className="h-96" />,
});

const Skills = dynamic(() => import("@/components/sections/Skills").then(m => ({ default: m.Skills })), {
  loading: () => <div className="h-96" />,
});

const Contact = dynamic(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })), {
  loading: () => <div className="h-96" />,
});

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
