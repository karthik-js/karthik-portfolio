"use client";

import { experience } from "@/data/experience";
import { Timeline } from "@/components/ui/timeline";
import * as m from "motion/react-m";
import type { Variants } from "motion/react";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ExperienceCard({
  item,
}: Readonly<{ item: (typeof experience)[number] }>) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="font-semibold text-foreground">{item.role}</h3>
          <p className="text-primary text-sm font-medium">{item.company}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {item.industry}
          </p>
        </div>
        <time className="text-xs text-muted-foreground bg-background px-3 py-1.5 rounded-full border border-border whitespace-nowrap self-start">
          {item.period}
        </time>
      </div>

      <ul className="space-y-2">
        {item.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
          >
            <span
              className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0"
              aria-hidden="true"
            />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const [showEarly, setShowEarly] = useState(false);
  const mainExperience = experience.filter((e) => !e.earlyCareer);
  const earlyExperience = experience.filter((e) => e.earlyCareer);
  const displayed = showEarly ? experience : mainExperience;

  const timelineData = displayed.map((item) => ({
    title: item.period.split(" – ")[0],
    content: <ExperienceCard item={item} />,
  }));

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            Experience
          </m.p>
          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight"
          >
            Career Journey
          </m.h2>
          <m.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-16"
          >
            8+ years across startups and enterprises — shipping products that
            matter.
          </m.p>
        </m.div>

        <Timeline data={timelineData} />

        {earlyExperience.length > 0 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowEarly((v) => !v)}
              className="text-sm text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              {showEarly
                ? "← Hide early career"
                : `Show early career (${earlyExperience.length} more roles) →`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
