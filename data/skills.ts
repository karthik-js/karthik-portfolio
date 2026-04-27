export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Architecture",
    skills: [
      "Frontend Architecture",
      "Monorepo (Turbo, pnpm)",
      "Design Systems",
      "Core Web Vitals",
      "Accessibility",
    ],
  },
  {
    label: "Backend",
    skills: ["Node.js", "GraphQL", "REST APIs", "Fastify", "Koa.js"],
  },
  {
    label: "Auth & Security",
    skills: ["NextAuth v5", "Azure AD B2C", "Microsoft Entra ID"],
  },
  {
    label: "Testing",
    skills: ["Jest", "React Testing Library", "Storybook", "SonarCloud"],
  },
  {
    label: "DevOps & Infra",
    skills: [
      "Docker",
      "CI/CD",
      "Git",
      "GitHub",
      "Azure DevOps",
      "AWS (Lambda, S3)",
      "Datadog",
    ],
  },
  {
    label: "AI & DX",
    skills: [
      "AI-augmented workflows",
      "Copilot agents",
      "MCP servers",
      "Prompt engineering",
    ],
  },
  {
    label: "Leadership",
    skills: [
      "Technical Leadership",
      "Cross-functional Collaboration",
      "Architecture Decision Records",
      "Mentoring",
    ],
  },
];
