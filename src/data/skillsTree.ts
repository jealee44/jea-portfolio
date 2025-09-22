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
  SiAuth0,
  SiAmazon,
  SiDocker,
  SiGithubactions,
  SiJest,
  SiTestinglibrary,
  SiEslint,
  SiPrettier,
  SiJira,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiVite,
  SiStorybook,
  SiNestjs,
  SiGraphql,
  SiKubernetes,
  SiTerraform,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { AiOutlineAudit } from 'react-icons/ai'
import { RiShieldKeyholeLine } from 'react-icons/ri'
import { SiLighthouse } from 'react-icons/si'
import { MdAccessibility } from 'react-icons/md'
import { BiNetworkChart } from 'react-icons/bi'
import { TbBrandReactNative } from 'react-icons/tb'

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
    title: 'Frontend',
    nodes: [
      { id: 'js', name: 'JavaScript', level: 2, Icon: SiJavascript, row: 1, color: '#F7DF1E' },
      { id: 'ts', name: 'TypeScript', level: 2, Icon: SiTypescript, row: 2, color: '#3178C6' },
      { id: 'html', name: 'HTML5', level: 2, Icon: SiHtml5, row: 3, color: '#E34F26' },
      { id: 'css', name: 'CSS3', level: 2, Icon: SiCss3, row: 3, color: '#1572B6' },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        level: 2,
        Icon: SiTailwindcss,
        row: 4,
        color: '#38BDF8',
      },
      { id: 'react', name: 'React', level: 2, Icon: SiReact, row: 4, color: '#61DAFB' },
      { id: 'redux', name: 'Redux', level: 2, Icon: SiRedux, row: 5, color: '#764ABC' },
      {
        id: 'router',
        name: 'React Router',
        level: 2,
        Icon: SiReactrouter,
        row: 5,
        color: '#CA4245',
      },
      {
        id: 'tanstack',
        name: 'TanStack Query',
        level: 1,
        Icon: TbBrandReactNative,
        row: 6,
        color: '#FF4154',
      },
      { id: 'vite', name: 'Vite', level: 2, Icon: SiVite, row: 6, color: '#646CFF' },
      { id: 'next', name: 'Next.js', level: 1, Icon: SiNextdotjs, row: 7, color: '#FFFFFF' },
      {
        id: 'a11y',
        name: 'Accessibility',
        level: 2,
        Icon: MdAccessibility,
        row: 8,
        color: '#61DAFB',
      },
      {
        id: 'core-web-vitals',
        name: 'Core Web Vitals',
        level: 2,
        Icon: SiLighthouse,
        row: 8,
        color: '#F44B21',
      },
      {
        id: 'storybook',
        name: 'Storybook',
        level: 0,
        Icon: SiStorybook,
        row: 9,
        planned: true,
        color: '#FF4785',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend | Database',
    nodes: [
      { id: 'node', name: 'Node.js', level: 2, Icon: SiNodedotjs, row: 1, color: '#339933' },
      { id: 'express', name: 'Express', level: 2, Icon: SiExpress, row: 2, color: '#FFFFFF' },
      { id: 'rest', name: 'REST APIs', level: 2, Icon: TbApi, row: 3, color: '#009688' },
      { id: 'pg', name: 'PostgreSQL', level: 2, Icon: SiPostgresql, row: 4, color: '#336791' },
      { id: 'mongo', name: 'MongoDB', level: 2, Icon: SiMongodb, row: 4, color: '#47A248' },
      { id: 'jwt', name: 'JWT', level: 2, Icon: RiShieldKeyholeLine, row: 5, color: '#000000' },
      { id: 'oauth', name: 'OAuth2', level: 2, Icon: SiAuth0, row: 5, color: '#EB5424' },
      { id: 'audit', name: 'Audit', level: 2, Icon: AiOutlineAudit, row: 6, color: '#4285F4' },
      {
        id: 'supabase',
        name: 'Supabase',
        level: 0,
        Icon: SiSupabase,
        row: 6,
        planned: true,
        color: '#3ECF8E',
      },
      {
        id: 'redis',
        name: 'Redis',
        level: 0,
        Icon: SiRedis,
        row: 7,
        planned: true,
        color: '#DC382D',
      },
      {
        id: 'prisma',
        name: 'Prisma',
        level: 0,
        Icon: SiPrisma,
        row: 7,
        planned: true,
        color: '#2D3748',
      },
      {
        id: 'graphql',
        name: 'GraphQL',
        level: 0,
        Icon: SiGraphql,
        row: 8,
        planned: true,
        color: '#E10098',
      },
      {
        id: 'nestjs',
        name: 'NestJS',
        level: 0,
        Icon: SiNestjs,
        row: 8,
        planned: true,
        color: '#E0234E',
      },
    ],
  },
  {
    id: 'ops',
    title: 'Testing | DevOps | Process',
    nodes: [
      { id: 'jest', name: 'Jest', level: 2, Icon: SiJest, row: 1, color: '#99425B' },
      {
        id: 'rtl',
        name: 'React Testing Library',
        level: 2,
        Icon: SiTestinglibrary,
        row: 1,
        color: '#E33332',
      },
      { id: 'eslint', name: 'ESLint', level: 2, Icon: SiEslint, row: 2, color: '#4B32C3' },
      { id: 'prettier', name: 'Prettier', level: 2, Icon: SiPrettier, row: 2, color: '#F7B93E' },
      { id: 'aws', name: 'AWS', level: 2, Icon: SiAmazon, row: 3, color: '#FF9900' },
      { id: 'docker', name: 'Docker', level: 2, Icon: SiDocker, row: 4, color: '#2496ED' },
      {
        id: 'gha',
        name: 'GitHub Actions',
        level: 2,
        Icon: SiGithubactions,
        row: 4,
        color: '#2088FF',
      },
      {
        id: 'observability',
        name: 'Observability',
        level: 2,
        Icon: BiNetworkChart,
        row: 5,
        color: '#00BFA5',
      },
      { id: 'jira', name: 'Jira', level: 2, Icon: SiJira, row: 5, color: '#0052CC' },
      {
        id: 'k8s',
        name: 'Kubernetes',
        level: 0,
        Icon: SiKubernetes,
        row: 6,
        planned: true,
        color: '#326CE5',
      },
      {
        id: 'terraform',
        name: 'Terraform',
        level: 0,
        Icon: SiTerraform,
        row: 6,
        planned: true,
        color: '#844FBA',
      },
    ],
  },
]
