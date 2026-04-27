export interface Project {
  name: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: "Know Your Government",
    description:
      "Transparent access to Andhra Pradesh government orders and civic data — search, filter, and browse GOs with AI-generated overviews.",
    stack: ["SvelteKit", "TypeScript"],
    github: "https://github.com/karthik-js/knowyourgovt",
    live: "https://knowyourgovt.vercel.app",
  },
  {
    name: "AP GO Scraper",
    description:
      "Hono API server that scrapes Andhra Pradesh Government Orders with AI overviews via Gemini 2.5 Flash, Vercel Queues, and Upstash Redis.",
    stack: ["Hono", "TypeScript", "Gemini AI", "Upstash Redis"],
    github: "https://github.com/karthik-js/ap-go-scraper",
  },
  {
    name: "Next.js E-Commerce Starter",
    description:
      "Demonstrates React Server Components, parallel routes, SQLite integration, and modern e-commerce patterns.",
    stack: ["Next.js 16", "TypeScript", "SQLite"],
    github: "https://github.com/karthik-js/nextjs-ecommerce-starter",
    live: "https://nextjs-ecommerce-starter-sand.vercel.app",
  },
  {
    name: "Next.js FCM",
    description:
      "Firebase Cloud Messaging integration for Next.js web push notifications. 18 stars on GitHub.",
    stack: ["Next.js", "JavaScript", "Firebase"],
    github: "https://github.com/karthik-js/nextjs-fcm",
  },
  {
    name: "Mailify",
    description:
      "A modern email client web app with a clean, intuitive interface for managing your inbox efficiently.",
    stack: ["Next.js", "TypeScript"],
    github: "https://github.com/karthik-js/mailify",
  },
  {
    name: "Inventory Management System",
    description:
      "Full-featured inventory tracking application with real-time updates, product management, and reporting.",
    stack: ["Next.js", "TypeScript"],
    github: "https://github.com/karthik-js/inventory-management",
  },
  {
    name: "Dotfiles & System Automation",
    description:
      "Automates new system setup with Zsh, Homebrew, NVM, Neovim config, and developer tooling — from zero to productive in minutes.",
    stack: ["Rust", "Shell"],
    github: "https://github.com/karthik-js/dotfiles",
  },
];
