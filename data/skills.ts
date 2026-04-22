export interface SkillCategory {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'GraphQL', 'REST APIs', 'Go'],
  },
  {
    label: 'Mobile',
    skills: ['Flutter'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Docker', 'CI/CD', 'Git', 'GitHub', 'Datadog'],
  },
  {
    label: 'Web3',
    skills: ['Wagmi', 'Viem'],
  },
  {
    label: 'Leadership',
    skills: ['Agile', 'Scrum', 'Team Leadership', 'Architecture'],
  },
]
