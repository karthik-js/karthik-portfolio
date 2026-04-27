export interface Project {
  name: string;
  description: string;
  impact?: string;
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
  stars?: number;
}

export const projects: Project[] = [
  {
    name: "Know Your Government",
    description:
      "Open-source civic tech tool that makes Andhra Pradesh government orders searchable and understandable using AI-generated summaries — empowering citizens with transparent access to public data.",
    impact: "Used by citizens to decode AP government orders in plain English",
    stack: ["SvelteKit", "TypeScript"],
    github: "https://github.com/karthik-js/knowyourgovt",
    live: "https://knowyourgovt.vercel.app",
    featured: true,
  },
  {
    name: "AP GO Scraper",
    description:
      "Serverless API pipeline that scrapes AP government orders, generates AI overviews via Gemini 2.5 Flash, and caches results with Upstash Redis — all running on Vercel's edge runtime.",
    impact: "Processes hundreds of PDFs → AI summaries via edge runtime",
    stack: ["Hono", "TypeScript", "Gemini AI", "Upstash Redis"],
    github: "https://github.com/karthik-js/ap-go-scraper",
    featured: true,
  },
  {
    name: "Next.js E-Commerce Starter",
    description:
      "Production-ready e-commerce template showcasing Next.js 16 React Server Components, parallel routes, and SQLite — a reference architecture for building modern, high-performance storefronts.",
    impact: "Reference architecture for high-performance Next.js storefronts",
    stack: ["Next.js 16", "TypeScript", "SQLite"],
    github: "https://github.com/karthik-js/nextjs-ecommerce-starter",
    live: "https://nextjs-ecommerce-starter-sand.vercel.app",
    featured: true,
  },
  {
    name: "Next.js FCM",
    description:
      "Drop-in Firebase Cloud Messaging integration for Next.js web apps — the simplest way to add web push notifications. Actively maintained.",
    impact: "The simplest drop-in push notification solution for Next.js",
    stack: ["Next.js", "JavaScript", "Firebase"],
    github: "https://github.com/karthik-js/nextjs-fcm",
    stars: 18,
    featured: true,
  },
  {
    name: "Mailify",
    description:
      "Clean, keyboard-first email client UI built with Next.js and TypeScript — demonstrates complex state management, optimistic updates, and real-time inbox synchronization patterns.",
    stack: ["Next.js", "TypeScript"],
    github: "https://github.com/karthik-js/mailify",
  },
  {
    name: "Inventory Management System",
    description:
      "End-to-end inventory platform with real-time stock tracking, barcode scanning support, and analytics dashboard — built for small businesses to manage products, suppliers, and order fulfillment.",
    stack: ["Next.js", "TypeScript"],
    github: "https://github.com/karthik-js/inventory-management",
  },
  {
    name: "Dotfiles & System Automation",
    description:
      "One-command dev environment bootstrap written in Rust — sets up Zsh, Homebrew, NVM, Neovim, and all essential developer tooling from zero to fully productive in under 5 minutes.",
    impact: "Zero-to-productive dev environment in under 5 minutes",
    stack: ["Rust", "Shell"],
    github: "https://github.com/karthik-js/dotfiles",
  },
];
