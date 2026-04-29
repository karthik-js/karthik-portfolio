"use client";

import * as m from "motion/react-m";
import type { Variants } from "motion/react";
import { Quote } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// TODO: Replace these placeholders with real testimonials.
// Recommended: pull quotes from LinkedIn recommendations or ask colleagues directly.
// Each testimonial needs: quote, name, role, company.
const testimonials = [
  {
    quote:
      "TODO: Add a testimonial here. Ask a manager or senior colleague for a LinkedIn recommendation and copy it in.",
    name: "Colleague Name",
    role: "Engineering Manager",
    company: "Company",
    initials: "CN",
  },
  {
    quote:
      "TODO: Add a testimonial here. A quote from a peer engineer about your technical leadership or collaboration style works great.",
    name: "Colleague Name",
    role: "Senior Engineer",
    company: "Company",
    initials: "CN",
  },
  {
    quote:
      "TODO: Add a testimonial here. A client or stakeholder quote about delivery quality or impact is highly effective.",
    name: "Colleague Name",
    role: "Product Manager",
    company: "Company",
    initials: "CN",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <m.p
            variants={fadeUp}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Testimonials
          </m.p>
          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight"
          >
            What People Say
          </m.h2>
          <m.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-16"
          >
            From managers, peers, and collaborators I&apos;ve worked with across
            the years.
          </m.p>

          <m.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {testimonials.map((t, i) => (
              <m.figure
                key={i}
                variants={fadeUp}
                className="relative p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors duration-300 flex flex-col"
              >
                <Quote
                  size={20}
                  className="text-primary/40 mb-4 shrink-0"
                  aria-hidden="true"
                />
                <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </figcaption>
              </m.figure>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
