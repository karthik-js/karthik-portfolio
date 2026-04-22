'use client'

import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '5', label: 'Companies' },
  { value: '3', label: 'Countries Reached' },
  { value: '4', label: 'Teams Led' },
]

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
            <motion.p variants={fadeUp} className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-4">
              About
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-[var(--color-foreground)] mb-8 leading-tight">
              Engineer by craft,<br />
              <span className="text-[var(--color-accent)]">builder by nature</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-[var(--color-muted)] leading-relaxed">
              <p>
                I&apos;m a Full Stack Engineer with 7+ years of shipping products that move the needle. I specialize in React, Next.js, and Node.js — but what I actually do is turn complex problems into elegant, fast, and delightful digital experiences.
              </p>
              <p>
                I&apos;ve led teams, redesigned entire platforms, cut API latency by 30%, grown sign-ups by 400%, and shipped a full compliance product in 4 months. Currently leading experience engineering at Publicis Sapient, building enterprise-grade B2B applications.
              </p>
              <p>
                When I&apos;m not building products, I&apos;m exploring new patterns in distributed systems, contributing to open source, and automating everything I possibly can.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {['React / Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'System Design'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] group hover:border-[var(--color-accent)]/50 transition-all duration-300"
                >
                  <p className="text-4xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]"
            >
              <p className="text-sm font-medium text-[var(--color-foreground)] mb-3">Currently at</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[var(--color-accent)]">PS</span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-foreground)]">Publicis Sapient</p>
                  <p className="text-xs text-[var(--color-muted)]">Lead Experience Engineer · Nov 2024 – Present</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-4 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-sm text-emerald-400 font-medium">Open to new opportunities</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
