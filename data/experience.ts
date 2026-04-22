export interface ExperienceItem {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Lead Experience Engineer',
    company: 'Publicis Sapient',
    period: 'Nov 2024 – Present',
    bullets: [
      'Leading frontend development for an enterprise B2B application built on Next.js',
      'Driving architecture decisions, performance optimization, and cross-team collaboration',
      'Establishing engineering standards and mentoring junior developers',
    ],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Nordek Technologies',
    period: 'Jan 2024 – Aug 2024',
    bullets: [
      'Maintained and optimized Norpay post-redesign — reduced customer service inquiries by 15%',
      'Engineered and launched GQpay for the EU market, leading a team of 3 engineers ahead of schedule',
      'Integrated Web3 contract interactions for cryptocurrency transactions using Wagmi and Viem',
    ],
  },
  {
    role: 'Senior Product Developer',
    company: 'Backstage Technologies',
    period: 'Aug 2021 – Dec 2023',
    bullets: [
      'Redesigned the Backstage platform with Next.js, unifying blogs, feature videos, and sign-up flows',
      'Built creator pages with SSR — drove 100% increase in sign-ups, 400% post-ad campaigns',
      'Led a team of 4 to ship paid membership flows, reaching 500+ active subscribers in month one',
      'Consolidated 3 microservices into one, cutting API latency by 30%; built in-app rewards boosting engagement 25%',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Mindship Technologies',
    period: 'Aug 2020 – Jul 2021',
    bullets: [
      'Optimized boat listing SEO and architecture for Harbormoor — 5x performance improvement on community feature',
      '50% load time reduction on service listings through caching and architecture improvements',
      'Redesigned service enquiry flow resulting in a 10% increase in sales conversions',
    ],
  },
  {
    role: 'MERN Developer',
    company: 'Lavupos Technologies',
    period: 'Aug 2019 – Apr 2020',
    bullets: [
      'Delivered a full POSH compliance product (Conduct) in just 4 months — complaint tracking, video learning, dashboards, and admin interfaces',
      'Recognized as Best Employee of the Month — January 2020',
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'Suraaga Technologies',
    period: 'Jun 2017 – Jul 2019',
    bullets: [
      'Led migration of legacy PHP site to React, achieving 25% improvement in Lighthouse accessibility scores',
      'Reduced code review time by 20% via automated CI/CD pipelines',
    ],
  },
]
