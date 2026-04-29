"use client";

import { Badge } from "@/components/ui/Badge";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { projects } from "@/data/projects";
import {
  AnimatePresence,
  motion,
  type Transition,
  type Variants,
} from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const enterTransition: Transition = { duration: 0.4, ease: "easeOut" };
const exitTransition: Transition = { duration: 0.2 };

const cardAnim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: enterTransition },
  exit: { opacity: 0, y: 12, transition: exitTransition },
};

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight"
          >
            Selected Work
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-16"
          >
            Side projects with real users, real metrics, and real code.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {displayed.map((project) => (
                <motion.article
                  key={project.name}
                  {...cardAnim}
                  layout
                  className="group relative p-6 rounded-2xl border border-border dark:border-transparent bg-card hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <GlowingEffect disabled={false} proximity={64} spread={40} borderWidth={2} movementDuration={1.2} />
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 ml-4 shrink-0">
                      {project.stars != null && (
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium">
                          <Star
                            size={12}
                            className="text-yellow-400 fill-yellow-400"
                            aria-hidden="true"
                          />
                          {project.stars}
                        </span>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GitHubIcon size={16} />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.name} live demo`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {project.impact && (
                    <p className="text-xs text-primary font-medium mb-4 leading-relaxed">
                      → {project.impact}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {projects.length > featured.length && (
              <button
                onClick={() => setShowAll((v) => !v)}
                className="text-sm text-muted-foreground hover:text-foreground border border-border hover:border-primary/50 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                {showAll
                  ? "← Show featured only"
                  : `Show all ${projects.length} projects →`}
              </button>
            )}
            <a
              href="https://github.com/karthik-js"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitHubIcon size={16} />
              See more on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
