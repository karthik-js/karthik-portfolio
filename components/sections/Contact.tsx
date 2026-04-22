'use client'

import { motion, type Variants } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const contacts = [
  {
    label: 'Email',
    value: 'karthiktalam8@gmail.com',
    href: 'mailto:karthiktalam8@gmail.com',
    icon: Mail,
    description: 'Best way to reach me',
  },
  {
    label: 'LinkedIn',
    value: '/in/karthik-talam',
    href: 'https://www.linkedin.com/in/karthik-talam/',
    icon: LinkedInIcon,
    description: 'Let\'s connect professionally',
  },
  {
    label: 'GitHub',
    value: 'karthik-js',
    href: 'https://github.com/karthik-js',
    icon: GitHubIcon,
    description: 'See what I\'m building',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-4">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-bold text-[var(--color-foreground)] mb-6 leading-tight">
            Let&apos;s Build
            <br />
            <span className="text-[var(--color-accent)]">Something Great</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--color-muted)] text-lg mb-16 max-w-xl mx-auto leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
          </motion.p>

          <motion.div
            className="grid sm:grid-cols-3 gap-4 mb-16"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {contacts.map(({ label, value, href, icon: Icon, description }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)]/50 hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                  />
                </div>
                <p className="font-semibold text-[var(--color-foreground)] text-sm mb-1">{label}</p>
                <p className="text-xs text-[var(--color-muted)] mb-1">{description}</p>
                <p className="text-xs text-[var(--color-accent)] font-mono truncate">{value}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-[var(--color-muted)]">
            Based in India · Available for remote work worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
