export type Quest = {
  id: string
  title: string
  blurb: string
  image: string
  tech: string[]
  live?: string
  code?: string
  planned?: {
    problem: string
    solution: string
    mvp: string[]
  }
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
    image: '/public/images/website.png',
    tech: ['React', 'Tailwind', 'Motion'],
    code: 'https://github.com/jealee44/jea-portfolio',
  },
  {
    id: 'gamebook',
    title: 'GameBook',
    blurb:
      'Choosing what to play can feel overwhelming, with so many titles and scattered notes. Gamebook puts everything in one place so you can browse, save favorites, and compare key details at a glance. It turns a messy list into a clear plan so you can pick your next game with confidence.',
    image: '/public/images/gamebook.png',
    tech: ['React', 'MongoDB', 'Mongoose', 'Node.js'],
    code: 'https://github.com/codesmith-goblin-sharks/gamebook',
  },
  {
    id: 'shellscape',
    title: 'ShellScape',
    blurb:
      'The garden plot is a wild frontier where seedlings wander and companions clash, and you need a map before the season begins. Wield ShellScape to sketch beds, test layouts, and preview the harvest on any screen like a true field tactician. Its Redux ledger tracks every move so your plan stays clear, efficient, and ready before a single spade hits soil.',
    image: '/public/images/garden.png',
    tech: ['JavaScript', 'CSS', 'Webpack', 'Node.js', 'Jest'],
    code: 'https://github.com/Heat-Seeking-Devil-Chicken-Corporation/ShellScape-Garden-Planner',
  },
  {
    id: 'meetwithfriends',
    title: 'Meet With Friends',
    blurb:
      'Meet With Friends makes group scheduling simple by finding the time slots everyone shares. Users sign in with Google, add their availability, and instantly see a combined schedule that highlights mutual free time on one screen. No back-and-forth messages, just a clear overlap view your group can act on.',
    image: '/public/images/meetfriends.png',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'REST API', 'PostgreSQL', 'OAuth 2.0'],
    code: 'https://github.com/csjigglypuff/scheduleapp/tree/dev',
  },
  {
    id: 'caloricx',
    title: 'CaloricX',
    blurb:
      'Adaptive calorie-budget app that recalculates your daily target each week from your latest weight, activity, and progress so your plan stays realistic and on track.',
    image: '/public/images/caloricx.png',
    tech: ['React', 'TypeScript', 'Tanstack Query', 'Next.js', 'PostgreSQL', 'Supabase', 'Prisma'],
    planned: {
      problem: `Static calorie budgets don't adapt as your weight and activity change, causing progress to stall or overshoot.`,
      solution: `CaloricX recalculates a personalized daily calorie target each week from your latest weight, activity, and results.`,
      mvp: [
        'Onboarding to capture profile and goal',
        'Weekly check-ins for weight and workouts',
        'Auto-adjusting calorie target with history charts',
        'Google or email sign-in, deployed with Next.js + PostgreSQL',
      ],
    },
  },
]
