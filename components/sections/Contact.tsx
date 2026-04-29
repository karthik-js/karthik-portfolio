"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import * as m from "motion/react-m";
import type { Variants } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contacts = [
  {
    label: "Email",
    value: "karthiktalam8@gmail.com",
    href: "mailto:karthiktalam8@gmail.com",
    icon: Mail,
    description: "Best way to reach me",
  },
  {
    label: "LinkedIn",
    value: "/in/karthik-talam",
    href: "https://www.linkedin.com/in/karthik-talam/",
    icon: LinkedInIcon,
    description: "Let's connect professionally",
  },
  {
    label: "GitHub",
    value: "karthik-js",
    href: "https://github.com/karthik-js",
    icon: GitHubIcon,
    description: "See what I'm building",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-left lg:text-center">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <m.p
            variants={fadeUp}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            Contact
          </m.p>
          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Working on something
            <br />
            <span className="text-primary">ambitious?</span>
          </m.h2>
          <m.p
            variants={fadeUp}
            className="text-muted-foreground text-lg mb-16 max-w-xl lg:mx-auto leading-relaxed"
          >
            I&apos;m selective about what I take on — but if you&apos;re
            building something hard, that&apos;s exactly where I do my best
            work.
          </m.p>

          <m.div
            className="grid sm:grid-cols-3 gap-4 mb-16"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {contacts.map(({ label, value, href, icon: Icon, description }) => (
              <m.a
                key={label}
                variants={fadeUp}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:-translate-y-1 transition duration-300 text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
                <p className="font-semibold text-foreground text-sm mb-1">
                  {label}
                </p>
                <p className="text-xs text-muted-foreground mb-1">
                  {description}
                </p>
                <p className="text-xs text-primary font-mono truncate">
                  {value}
                </p>
              </m.a>
            ))}
          </m.div>

          <m.p variants={fadeUp} className="text-sm text-muted-foreground">
            Based in India · Available for remote work worldwide
          </m.p>
        </m.div>
      </div>
    </section>
  );
}
