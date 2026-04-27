export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  industry: string;
  bullets: string[];
  earlyCareer?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    role: "Lead Experience Engineer",
    company: "Publicis Sapient",
    period: "Nov 2024 – Present",
    industry: "Retail / B2B Commerce",
    bullets: [
      "Tech lead on a multi-market B2B e-commerce platform (TypeScript monorepo), leading 2 frontend tracks (~10 engineers); own architecture decisions and serve as default code reviewer across the repository",
      "Led a dedicated 3-engineer performance squad that delivered ~20% faster page loads — improving Core Web Vitals (LCP, CLS, INP) across the application",
      "Designed and rolled out the team's AI-augmented development workflow — authored 4 custom Copilot agents, 8 specialized skills, and integrated 7 MCP servers, cutting ticket closure time by ~35% and reducing review-comment addressal by 75%",
      "Drove the test-coverage initiative, growing the suite to 438 test suites / 4,543 tests and lifting component line coverage from 88% to 96%",
      "Led the React 19 / Next.js 15 upgrade and Yarn to pnpm migration across the entire monorepo; introduced TanStack Query and migrated Storybook to v10",
      "Architected an SVG sprite icon system replacing 250+ static React icon components — eliminated ~5.1 MB duplication and achieved a ~77% reduction in gzipped icon payload",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "Nordek Technologies",
    period: "Jan 2024 – Aug 2024",
    industry: "Fintech / Web3",
    bullets: [
      "Stabilized Norpay post-launch — triaged UX friction points and shipped targeted performance fixes that cut usability-related support tickets by 15%",
      "Architected and launched the GQpay application, directing a team of two UI engineers and one backend engineer; completed the project ahead of schedule, increasing market presence across the EU",
      "Built the Web3 transaction layer using Wagmi and Viem, integrating EVM-compatible chains for crypto payments and supporting multiple wallet providers",
    ],
  },
  {
    role: "Senior Product Developer",
    company: "Backstage Technologies",
    period: "Aug 2021 – Dec 2023",
    industry: "Creator Economy",
    bullets: [
      "Led the redesign of the Backstage landing page using Next.js, integrating multiple mini-apps (blogs, feature videos, sign-up flows) into a unified experience",
      "Designed and built creator tools web app that doubled organic sign-ups; platform supported a 4x scale spike during paid acquisition campaigns",
      "Led a team of 4 in designing paid membership flows, supporting 500+ active subscribers within the first month",
      "Designed and shipped in-app rewards system, increasing user engagement by 25% and boosting retention rates by 15%",
      "Consolidated 3 microservices into a single streamlined service, leading to a 30% reduction in API call latency",
      "Instrumented production observability with Datadog and Firebase Crashlytics — reducing mean-time-to-detect for production incidents",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Mindship Technologies",
    period: "Aug 2020 – Jul 2021",
    industry: "Marine Marketplace",
    bullets: [
      "Led 3 engineers building Harbormoor's boat listing marketplace and SEO layer — achieved first-page Google rankings for targeted marine service queries",
      "Redesigned service enquiry flow, leading to a 10% increase in sales",
      "Re-architected community feature with optimized data fetching, reducing load times by 5x",
      "Optimized service listings with efficient data loading/rendering, improving load times by 50%",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Lavupos Technologies",
    period: "Aug 2019 – Apr 2020",
    industry: "HR Compliance",
    earlyCareer: true,
    bullets: [
      "Delivered full-suite POSH compliance product (Conduct) in 4 months for organizations with 1000+ employees — registration, complaint tracking, video-based learning, and interactive assessments",
      "Built dashboards for complaint management and learning modules; designed admin interfaces for company-wide POSH initiatives",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Suraaga Technologies",
    period: "Jun 2017 – Jul 2019",
    industry: "EdTech / AI",
    earlyCareer: true,
    bullets: [
      "Automated scoring systems using TensorFlow ML models; built a scalable transcription service with AWS Lambda and S3",
      "Designed REST APIs (Node.js, Koa.js) supporting microservices architecture; containerized applications with Docker and streamlined CI/CD pipelines via Jenkins",
    ],
  },
];
