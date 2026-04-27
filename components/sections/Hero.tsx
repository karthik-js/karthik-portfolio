"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      aria-label="Hero"
    >
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-accent)/12%,transparent)]" />

      <motion.div
        className="max-w-4xl w-full mx-auto text-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-accent/30 bg-accent/10 text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Lead Frontend Engineer · Next.js Platform Architecture ·
            AI-Augmented Engineering
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-foreground mb-6 leading-none"
        >
          Karthik
          <br />
          <span className="text-accent">Talam</span>
        </motion.h1>

        {/* One-liner */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building high-traffic web platforms that scale — from enterprise B2B
          e-commerce to AI-augmented engineering workflows.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() => scrollTo("projects")}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollTo("contact")}
          >
            Get in Touch
          </Button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-border text-muted hover:text-foreground hover:border-accent transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4"
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
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted hover:text-foreground hover:border-accent transition-all duration-200"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted hover:text-foreground transition-colors"
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
    </section>
  );
}
