"use client";

import { motion, type Variants } from "framer-motion";
import {
  Bot,
  Check,
  Code,
  Globe,
  Mail,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ─── Packages ─────────────────────────────────────────────────── */
const packages = [
  {
    name: "Starter",
    subtitle: "Codebase Health Check",
    price: { usd: "$29", inr: "₹999" },
    period: "one-time",
    bullets: [
      "30-min async audit of your repo or PR",
      "Actionable feedback via Loom or written notes",
      "Performance, structure & best-practice tips",
      "48-hour turnaround",
    ],
    cta: "Book a Review",
    href: "mailto:karthiktalam8@gmail.com?subject=Code%20Review%20Request",
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Consulting Hours",
    price: { usd: "$75/hr", inr: "₹2,500/hr" },
    period: "Minimum 2 hours",
    bullets: [
      "Architecture design & decision support",
      "Performance optimization (Core Web Vitals)",
      "Enterprise auth setup (Azure AD B2C, NextAuth v5)",
      "AI-augmented workflow design",
      "Live Zoom/Meet sessions",
    ],
    cta: "Schedule a Call",
    href: "https://cal.com/karthiktalam",
    popular: true,
  },
  {
    name: "Partnership",
    subtitle: "Fractional Lead",
    price: { usd: "Custom", inr: "Custom" },
    period: "Ongoing engagement",
    bullets: [
      "Embedded technical leadership for your team",
      "Architecture ownership & code review cadence",
      "Hiring support & team mentoring",
      "AI workflow implementation",
      "Monthly retainer pricing",
    ],
    cta: "Let's Talk",
    href: "mailto:karthiktalam8@gmail.com?subject=Fractional%20Lead%20Inquiry",
    popular: false,
  },
];

/* ─── Expertise ─────────────────────────────────────────────────── */
const expertise = [
  {
    icon: Code,
    title: "Next.js Architecture",
    description: "App Router, RSC, monorepo design, performance",
  },
  {
    icon: Shield,
    title: "Enterprise Auth",
    description: "Azure AD B2C, NextAuth v5, OIDC, multi-tenant",
  },
  {
    icon: Zap,
    title: "Core Web Vitals",
    description: "LCP, CLS, INP — measurable, real-world improvements",
  },
  {
    icon: Bot,
    title: "AI-Augmented DX",
    description: "Copilot agents, MCP servers, workflow automation",
  },
  {
    icon: Users,
    title: "Team Mentoring",
    description: "Code reviews, ADRs, engineering culture",
  },
  {
    icon: Globe,
    title: "Web3 Integration",
    description: "Wagmi, Viem, EVM-compatible payment flows",
  },
];

/* ─── FAQ ────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How do I get started?",
    a: "Send an email to karthiktalam8@gmail.com with a brief description of your project or challenge. I'll respond within 24 hours.",
  },
  {
    q: "Do you take on full-time contracts?",
    a: "I'm open to fractional/part-time engagements. For full-time roles, let's talk first.",
  },
  {
    q: "What timezone are you in?",
    a: "I'm based in India (IST, UTC+5:30) but work async-first and can accommodate US/EU hours.",
  },
  {
    q: "Do you offer refunds?",
    a: "For code reviews, if you're not satisfied with the quality of the report, I'll do a free revision.",
  },
];

/* ─── Trusted by ────────────────────────────────────────────────── */
const trustedBy = [
  "Publicis Sapient",
  "Carlsberg Group",
  "Enterprise B2B teams",
  "Early-stage startups",
];

/* ════════════════════════════════════════════════════════════════ */
export function ServicesContent() {
  const [isIndia] = useState(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return tz === "Asia/Kolkata" || tz === "Asia/Calcutta";
    } catch {
      return false;
    }
  });

  return (
    <main className="pt-16 relative">
      {/* ── Global grid background ────────────────────────────── */}
      <div
        className="fixed inset-0 -z-10 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary)/10%,transparent)]" />

        <motion.div
          className="max-w-3xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-primary text-sm font-medium mb-4"
          >
            Services
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Work With Me
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto"
          >
            Available for consulting, code reviews, and fractional technical
            leadership — remote-first, worldwide.
          </motion.p>
        </motion.div>
      </section>

      {/* ── What I Help With ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-primary text-sm font-medium text-center mb-4"
          >
            Expertise
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
          >
            What I Help With
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 flex gap-4 hover:border-primary/50 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Trusted By ─────────────────────────────────────────── */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-6"
          >
            Worked with teams at
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {trustedBy.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Consulting Packages ────────────────────────────────── */}
      <section
        id="packages"
        className="pt-10 pb-20 sm:pt-12 sm:pb-24 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-primary text-sm font-medium text-center mb-4"
          >
            Packages
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
          >
            Engagement Options
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                className={`relative rounded-2xl border bg-card p-8 flex flex-col transition-all duration-300 hover:border-primary/50 ${
                  pkg.popular
                    ? "border-primary/60 shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow-md">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">
                    {pkg.name}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {pkg.subtitle}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-foreground">
                      {isIndia ? pkg.price.inr : pkg.price.usd}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.period}</p>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {pkg.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        size={15}
                        className="text-primary mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={pkg.href}
                  target={pkg.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    pkg.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : "border border-border bg-card text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {pkg.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-primary text-sm font-medium text-center mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
          >
            Before You Reach Out
          </motion.h2>

          <div className="flex flex-col gap-6">
            {faqs.map(({ q, a }) => (
              <motion.div
                key={q}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Ready to ship better software?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground mb-10"
          >
            Let&apos;s talk about your project.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="mailto:karthiktalam8@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail size={18} aria-hidden="true" />
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
