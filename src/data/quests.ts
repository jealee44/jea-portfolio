export type Quest = {
  id: string
  title: string
  blurb: string
  image: string
  tech: string[]
  live?: string
  code?: string
}

export const QUESTS: Quest[] = [
  {
    id: 'ditto',
    title: 'Ditto',
    blurb:
      'Database schema migration tool built at Ditto. Designed to minimize deploy friction and ensure safe, repeatable migrations.',
    image: '/public/images/ditto.png',
    tech: ['React', 'Redux', 'TypeScript', 'AWS', 'Node.js', 'PostgreSQL', 'Docker', 'CI/CD'],
    code: 'https://github.com/oslabs-beta/ditto',
  },
  {
    id: 'portfolio',
    title: `Jea's Portfolio`,
    blurb:
      "This site you're on with custom theming, animated status windows, responsive layout, system manhwa design",
    image: '/images/website.png',
    tech: ['React', 'Tailwind', 'Motion'],
  },
]
