"use client";

import { HeroSky } from "@/components/hero-sky/HeroSky";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useCallback, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const handleIlluminationChange = useCallback((illumination: number) => {
    sectionRef.current?.style.setProperty(
      "--sky-light",
      illumination.toFixed(3),
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-start lg:items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      aria-label="Hero"
    >
      {/* WebGL celestial backdrop (sun/moon based on visitor's local sky) */}
      <HeroSky onIlluminationChange={handleIlluminationChange} />

      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary)/12%,transparent)]" />

      <motion.div
        className="relative max-w-4xl w-full mx-auto text-left lg:text-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-background/75 backdrop-blur-sm text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Lead Frontend Engineer · Open to New Roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground mb-4 leading-none"
        >
          Karthik
          <br />
          <span className="text-primary">Talam</span>
        </motion.h1>

        {/* Specialization */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg font-medium text-foreground/60 uppercase tracking-widest mb-6"
        >
          Next.js Architect · Frontend Platform · Team Lead
        </motion.p>

        {/* One-liner */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-foreground/70 max-w-2xl lg:mx-auto mb-8 leading-relaxed"
        >
          I build high-performance frontend platforms and lead the teams that
          ship them — faster pages, tighter pipelines, and engineering cultures
          that scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-start lg:items-center justify-start lg:justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            variant="primary"
            className="w-full sm:w-auto"
            onClick={() => scrollTo("projects")}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => scrollTo("contact")}
          >
            Get in Touch
          </Button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-medium border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-start lg:justify-center gap-4"
        >
          {[
            {
              href: "https://github.com/karthik-js",
              icon: GitHubIcon,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/karthik-talam/",
              icon: LinkedInIcon,
              label: "LinkedIn",
            },
            {
              href: "mailto:karthiktalam8@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to About"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>

      {/* Sky hint — explains the live sky concept */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 right-4 sm:right-6 lg:right-8 flex items-center gap-1.5 text-[11px] text-foreground/40 pointer-events-none select-none"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
        Live sky · based on your location · hover ☀︎
      </motion.div>
    </section>
  );
}
