export interface Project {
  name: string
  description: string
  stack: string[]
  github: string
  live?: string
}

export const projects: Project[] = [
  {
    name: 'Mailify',
    description: 'A modern email client web app with a clean, intuitive interface for managing your inbox efficiently.',
    stack: ['Next.js', 'TypeScript'],
    github: 'https://github.com/karthik-js/mailify',
    live: 'https://mailify-six.vercel.app',
  },
  {
    name: 'Inventory Management System',
    description: 'Full-featured inventory tracking application with real-time updates, product management, and reporting.',
    stack: ['Next.js', 'TypeScript'],
    github: 'https://github.com/karthik-js/inventory-management',
    live: 'https://inventory-management-one-ochre.vercel.app',
  },
  {
    name: 'Next.js E-Commerce Starter',
    description: 'Demonstrates React Server Components, parallel routes, SQLite integration, and modern e-commerce patterns.',
    stack: ['Next.js 16', 'TypeScript', 'SQLite'],
    github: 'https://github.com/karthik-js/nextjs-ecommerce-starter',
    live: 'https://nextjs-ecommerce-starter-sand.vercel.app',
  },
  {
    name: 'Dotfiles & System Automation',
    description: 'Automates new system setup with Zsh, Homebrew, NVM, Neovim config, and developer tooling — from zero to productive in minutes.',
    stack: ['Rust', 'Shell'],
    github: 'https://github.com/karthik-js/dotfiles',
  },
]
