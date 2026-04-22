'use client'

import { motion, type Variants } from 'framer-motion'
import { experience } from '@/data/experience'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-4">
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-4 leading-tight">
            Career Journey
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--color-muted)] max-w-xl mb-16">
            7+ years across startups and enterprises — shipping products that matter.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-[var(--color-border)] ml-3 sm:ml-4 hidden sm:block" />

            <motion.div
              className="space-y-10"
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            >
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.company}-${index}`}
                  variants={fadeUp}
                  className="relative sm:pl-14"
                >
                  {/* Dot */}
                  <div className="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-background)] items-center justify-center">
                    {index === 0 ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[var(--color-border)]" />
                    )}
                  </div>

                  <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/30 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                      <div>
                        <h3 className="font-semibold text-[var(--color-foreground)]">{item.role}</h3>
                        <p className="text-[var(--color-accent)] text-sm font-medium">{item.company}</p>
                      </div>
                      <time className="text-xs text-[var(--color-muted)] bg-[var(--color-background)] px-3 py-1.5 rounded-full border border-[var(--color-border)] whitespace-nowrap self-start sm:self-auto">
                        {item.period}
                      </time>
                    </div>

                    <ul className="space-y-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-muted)] leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-[var(--color-accent)] flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
