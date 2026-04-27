"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "4,500+", label: "Tests Shipped" },
  { value: "~35%", label: "Faster Ticket Closure" },
  { value: "10+", label: "Engineers Led" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Left: Text */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
            >
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-8 leading-tight"
            >
              Engineer by craft,
              <br />
              <span className="text-accent">builder by nature</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted leading-relaxed"
            >
              <p>
                I&apos;m a Lead Frontend Engineer with 8+ years building
                high-traffic web platforms — from startup MVPs to
                enterprise-grade B2B e-commerce serving multiple markets. I
                specialize in Next.js App Router architecture, enterprise
                authentication, and platform migrations at monorepo scale.
              </p>
              <p>
                Currently leading ~10 frontend engineers across two parallel
                tracks on a TypeScript monorepo, where I drove a 20% page-load
                improvement, scaled test coverage to 4,500+ tests, and pioneered
                an agentic AI workflow that cut ticket closure time by ~35%.
              </p>
              <p>
                When I&apos;m not building products, I&apos;m designing
                AI-augmented development workflows, contributing to open source,
                and automating everything I possibly can.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {[
                "Next.js 15",
                "React 19",
                "TypeScript",
                "GraphQL",
                "AI-Augmented DX",
                "Frontend Architecture",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium border border-border bg-card text-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo + Stats */}
          <div>
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-accent/20 shadow-lg shadow-accent/5">
                <Image
                  src="/karthik-profile.jpg"
                  alt="Karthik Talam"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, 224px"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border bg-card group hover:border-accent/50 transition-all duration-300"
                >
                  <p className="text-4xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {value}
                  </p>

                  <p className="mt-2 text-sm text-muted">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-4 p-6 rounded-2xl border border-border bg-card"
            >
              <p className="text-sm font-medium text-foreground mb-3">
                Currently at
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">PS</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Publicis Sapient
                  </p>
                  <p className="text-xs text-muted">
                    Lead Experience Engineer · Nov 2024 – Present
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-4 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-sm text-emerald-400 font-medium">
                Open to new opportunities
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
