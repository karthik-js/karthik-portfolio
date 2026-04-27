'use client'

import { motion, type Variants } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/BrandIcons'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
            Selected Work
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted max-w-xl mb-16">
            A selection of projects I&apos;ve built — from client tools to developer utilities.
          </motion.p>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.name}
                variants={fadeUp}
                className="group relative p-6 rounded-2xl border border-border bg-card hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 ml-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub`}
                      className="text-muted hover:text-foreground transition-colors"
                    >
                      <GitHubIcon size={16} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="text-muted hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.article>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 text-center">
            <a
              href="https://github.com/karthik-js"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <GitHubIcon size={16} />
              See more on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
