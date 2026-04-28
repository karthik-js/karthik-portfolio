"use client";

import { experience } from "@/data/experience";
import {
  AnimatePresence,
  motion,
  type Transition,
  type Variants,
} from "framer-motion";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const enterTransition: Transition = { duration: 0.4, ease: "easeOut" };
const exitTransition: Transition = { duration: 0.2 };

const itemAnim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: enterTransition },
  exit: { opacity: 0, y: 12, transition: exitTransition },
};

export function Experience() {
  const [showEarly, setShowEarly] = useState(false);
  const mainExperience = experience.filter((e) => !e.earlyCareer);
  const earlyExperience = experience.filter((e) => e.earlyCareer);
  const displayed = showEarly ? experience : mainExperience;

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4"
          >
            Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight"
          >
            Career Journey
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted max-w-xl mb-16">
            8+ years across startups and enterprises — shipping products that
            matter.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-border ml-3 sm:ml-4 hidden sm:block" />

            <div className="space-y-10">
              <AnimatePresence mode="popLayout">
                {displayed.map((item, index) => (
                  <motion.article
                    key={`${item.company}-${item.period}`}
                    {...itemAnim}
                    layout
                    className="relative sm:pl-14"
                  >
                    {/* Dot */}
                    <div className="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-border bg-background items-center justify-center">
                      {index === 0 ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-border" />
                      )}
                    </div>

                    <div className="p-6 rounded-2xl border border-border bg-card hover:border-accent/30 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {item.role}
                          </h3>
                          <p className="text-accent text-sm font-medium">
                            {item.company}
                          </p>
                          <p className="text-xs text-muted mt-0.5">
                            {item.industry}
                          </p>
                        </div>
                        <time className="text-xs text-muted bg-background px-3 py-1.5 rounded-full border border-border whitespace-nowrap self-start">
                          {item.period}
                        </time>
                      </div>

                      <ul className="space-y-2">
                        {item.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                          >
                            <span
                              className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {earlyExperience.length > 0 && (
            <motion.div variants={fadeUp} className="mt-10 text-center">
              <button
                onClick={() => setShowEarly((v) => !v)}
                className="text-sm text-muted hover:text-foreground border border-border hover:border-accent/50 px-4 py-2 rounded-lg transition-all duration-200"
              >
                {showEarly
                  ? "← Hide early career"
                  : `Show early career (${earlyExperience.length} more roles) →`}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
