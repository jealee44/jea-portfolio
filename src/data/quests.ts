// src/data/quests.ts
export type Quest = {
  id: string
  title: string
  blurb: string
  image: string
  tech: string[]
  live?: string
  code?: string
  problem?: string
  solution?: string
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
      'Ditto is a GUI-based database migration platform that streamlines schema version control, collaboration, and security for development teams. With features like role-based access control (RBAC), migration tracking, and multi-project/database support, it ensures teams can manage database changes confidently and efficiently.',
    problem:
      'Database schema migrations often break down due to human error, poor collaboration, and lack of accessible security controls.',
    solution:
      'Ditto centralizes migration management with built-in version control and RBAC, giving teams a secure and collaborative way to update databases without errors.',
    image: '/images/ditto.png',
    tech: ['React', 'Redux', 'TypeScript', 'AWS', 'Node.js', 'PostgreSQL', 'Docker', 'CI/CD'],
    code: 'https://github.com/oslabs-beta/ditto',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    blurb:
      'Personal site styled like a progression system with responsive layout, animated panels, and themed UI.',
    problem:
      'Most portfolios feel static and interchangeable which makes it hard to convey personality and craft.',
    solution:
      'Build a living UI with a consistent theme, reusable components, and motion that still loads fast and reads clearly.',
    image: '/images/website.png',
    tech: ['React', 'Tailwind', 'Motion'],
    code: 'https://github.com/jealee44/jea-portfolio',
  },
  {
    id: 'gamebook',
    title: 'GameBook',
    blurb:
      'Gamebook integrates with the IGDB API to let players browse titles, save favorites, and manage a personal game library. It helps reduce decision fatigue by giving you a streamlined way to pick what to play next.',
    problem:
      'Gamers with large libraries often waste hours deciding what to play, sometimes ending up playing nothing at all.',
    solution:
      'Gamebook simplifies discovery by curating options and tracking favorites, so you can spend less time choosing and more time playing.',
    image: '/images/gamebook.png',
    tech: ['React', 'MongoDB', 'Mongoose', 'Node.js'],
    code: 'https://github.com/codesmith-goblin-sharks/gamebook',
  },
  {
    id: 'shellscape',
    title: 'ShellScape',
    blurb:
      'A garden-planning tool for sketching beds, testing layouts, and previewing harvests on any screen.',
    problem:
      'Plotting beds, companions, and spacing by hand led to mistakes and rework once the season started.',
    solution:
      'Design an interactive planner with persistent state and simple rules so layouts are clear before planting.',
    image: '/images/garden.png',
    tech: ['JavaScript', 'CSS', 'Webpack', 'Node.js', 'Jest'],
    code: 'https://github.com/Heat-Seeking-Devil-Chicken-Corporation/ShellScape-Garden-Planner',
  },
  {
    id: 'meetwithfriends',
    title: 'Meet With Friends',
    blurb:
      'Meet With Friends syncs with Google Calendar to highlight overlapping availability across everyone’s schedules. It eliminates the endless back-and-forth of “when are you free?” by instantly suggesting dates that work for the whole group.',
    problem:
      'Coordinating plans with friends is frustrating and time-consuming when you have to manually ask each person’s availability.',
    solution:
      'Meet With Friends automates scheduling by comparing linked calendars and surfacing the best time for everyone to meet.',
    image: '/images/meetfriends.png',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'REST API', 'PostgreSQL', 'OAuth 2.0'],
    code: 'https://github.com/csjigglypuff/scheduleapp/tree/dev',
  },
  {
    id: 'caloricx',
    title: 'CaloricX',
    blurb:
      'Adaptive calorie-budget app that recalculates targets weekly from weight, activity, and results.',
    image: '/images/caloricx.png',
    tech: ['React', 'TypeScript', 'Tanstack Query', 'Next.js', 'PostgreSQL', 'Supabase', 'Prisma'],
    planned: {
      problem:
        "Static calorie budgets don't adapt as weight and activity change which causes stalls or overshooting.",
      solution:
        'Recalculate a personalized daily target each week from the latest check-ins to keep progress on track.',
      mvp: [
        'Onboarding to capture profile and goal',
        'Weekly check-ins for weight and workouts',
        'Auto-adjusting target with history charts',
        'Google or email sign-in on Next.js + PostgreSQL',
      ],
    },
  },
]
