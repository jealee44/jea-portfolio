import type { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiJsonwebtokens,
  SiAmazon,
  SiDocker,
  SiGithubactions,
  SiJest,
  SiTestinglibrary,
} from 'react-icons/si'

export type TalentNode = {
  id: string
  name: string
  level: 0 | 1 | 2 | 3 | 4 | 5
  Icon: IconType
  row: number
  planned?: boolean
  color?: string
}

export type TalentTree = {
  id: 'frontend' | 'backend' | 'ops'
  title: string
  nodes: TalentNode[]
}

export const TREES: TalentTree[] = [
  {
    id: 'frontend',
    title: 'Frontend Tree',
    nodes: [
      { id: 'js', name: 'JavaScript', level: 5, Icon: SiJavascript, row: 1, color: '#F7DF1E' },
      { id: 'ts', name: 'TypeScript', level: 5, Icon: SiTypescript, row: 2, color: '#3178C6' },
      { id: 'react', name: 'React', level: 5, Icon: SiReact, row: 2, color: '#61DAFB' },
      { id: 'next', name: 'Next.js', level: 4, Icon: SiNextdotjs, row: 3, color: '#FFFFFF' },
      { id: 'redux', name: 'Redux', level: 4, Icon: SiRedux, row: 3, color: '#764ABC' },
      {
        id: 'router',
        name: 'React Router',
        level: 4,
        Icon: SiReactrouter,
        row: 4,
        color: '#CA4245',
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        level: 5,
        Icon: SiTailwindcss,
        row: 5,
        color: '#38BDF8',
      },
      { id: 'html', name: 'HTML5', level: 5, Icon: SiHtml5, row: 6, color: '#E34F26' },
      { id: 'css', name: 'CSS3', level: 5, Icon: SiCss3, row: 6, color: '#1572B6' },
      { id: 'a11y', name: 'Accessibility', level: 4, Icon: SiReact, row: 7, color: '#61DAFB' },
      {
        id: 'core-web-vitals',
        name: 'Core Web Vitals',
        level: 0,
        Icon: SiReact,
        row: 8,
        planned: true,
        color: '#61DAFB',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Tree',
    nodes: [
      { id: 'node', name: 'Node.js', level: 5, Icon: SiNodedotjs, row: 1, color: '#339933' },
      { id: 'express', name: 'Express', level: 4, Icon: SiExpress, row: 2, color: '#FFFFFF' },
      { id: 'jwt', name: 'JWT', level: 4, Icon: SiJsonwebtokens, row: 3, color: '#000000' },
      { id: 'pg', name: 'PostgreSQL', level: 4, Icon: SiPostgresql, row: 3, color: '#336791' },
      { id: 'mongo', name: 'MongoDB', level: 4, Icon: SiMongodb, row: 3, color: '#47A248' },
      { id: 'oauth', name: 'OAuth2', level: 4, Icon: SiJsonwebtokens, row: 4, color: '#000000' },
      { id: 'audit', name: 'Audit', level: 4, Icon: SiJsonwebtokens, row: 5, color: '#000000' },
      {
        id: 'redis',
        name: 'Redis',
        level: 0,
        Icon: SiReact,
        row: 6,
        planned: true,
        color: '#D82C20',
      },
      {
        id: 'prisma',
        name: 'Prisma',
        level: 0,
        Icon: SiReact,
        row: 6,
        planned: true,
        color: '#2D3748',
      },
    ],
  },
  {
    id: 'ops',
    title: 'Ops / Testing Tree',
    nodes: [
      { id: 'aws', name: 'AWS', level: 4, Icon: SiAmazon, row: 1, color: '#FF9900' },
      { id: 'docker', name: 'Docker', level: 4, Icon: SiDocker, row: 2, color: '#2496ED' },
      {
        id: 'gha',
        name: 'GitHub Actions',
        level: 4,
        Icon: SiGithubactions,
        row: 2,
        color: '#2088FF',
      },
      { id: 'jest', name: 'Jest', level: 5, Icon: SiJest, row: 3, color: '#99425B' },
      {
        id: 'rtl',
        name: 'React Testing Library',
        level: 5,
        Icon: SiTestinglibrary,
        row: 3,
        color: '#E33332',
      },
      {
        id: 'supabase',
        name: 'Supabase',
        level: 0,
        Icon: SiReact,
        row: 5,
        planned: true,
        color: '#3ECF8E',
      },
      {
        id: 'angular',
        name: 'Angular',
        level: 0,
        Icon: SiReact,
        row: 5,
        planned: true,
        color: '#DD0031',
      },
    ],
  },
]
