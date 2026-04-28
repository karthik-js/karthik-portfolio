"use client";

import { skillCategories } from "@/data/skills";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight"
          >
            How I Build
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-16"
          >
            Tools and technologies I reach for when building products.
          </motion.p>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.label}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors duration-300"
              >
                <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-background border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
