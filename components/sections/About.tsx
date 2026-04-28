"use client";

import { Scales } from "@/components/ui/scales";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stats = [
  { value: "8+", label: "Years Exp." },
  { value: "4,500+", label: "Tests Shipped" },
  { value: "~35%", label: "Faster Shipping" },
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
              className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              About
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-foreground mb-8 leading-tight"
            >
              I make teams ship
              <br />
              <span className="text-primary">better — and faster.</span>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed"
            >
              <p>
                When I&apos;m not building products, I&apos;m designing
                AI-augmented development workflows, contributing to open source,
                and automating everything I possibly can.
              </p>
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
          <div className="flex flex-col gap-4">
            {/* Photo with Scales border strips */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="relative h-80 w-64 rounded-lg bg-card">
                {/* Left strip */}
                <div className="absolute inset-y-[-30%] -left-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
                  <Scales size={8} className="rounded-lg" />
                </div>
                {/* Right strip */}
                <div className="absolute inset-y-[-30%] -right-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
                  <Scales size={8} className="rounded-lg" />
                </div>
                {/* Top strip */}
                <div className="absolute inset-x-[-30%] -top-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
                  <Scales size={8} className="rounded-lg" />
                </div>
                {/* Bottom strip */}
                <div className="absolute inset-x-[-30%] -bottom-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
                  <Scales size={8} className="rounded-lg" />
                </div>
                {/* Photo */}
                <div className="relative z-10 h-full w-full overflow-hidden rounded-lg border border-border shadow-sm">
                  <Image
                    src="/karthik-profile.jpg"
                    alt="Karthik Talam"
                    fill
                    className="object-cover object-top"
                    sizes="256px"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQME/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAUREiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqO08Hna+VzMiymU4bsJiWomNy2iA4kLBKSRz7Hin2VHHX2RGjSHnGFPISW0qUpCVAlIPByM5x96KKAf/9k="
                  />
                </div>
              </div>
            </motion.div>

            {/* Stats — 4 columns under the photo */}
            <motion.div
              className="grid grid-cols-4 gap-3 mt-20"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="p-4 rounded-2xl border border-border bg-card group hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-tight">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Currently at */}
            <motion.div
              variants={fadeUp}
              className="p-5 rounded-2xl border border-border bg-card"
            >
              <p className="text-sm font-medium text-foreground mb-3">
                Currently at
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://www.publicissapient.com/etc.clientlibs/ps-redesign/clientlibs/clientlib-site/resources/images/PS-Logo-Positive.svg"
                    alt="Publicis Sapient"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Publicis Sapient
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Lead Experience Engineer · Nov 2024 – Present
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Open to work */}
            <motion.div
              variants={fadeUp}
              className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
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
