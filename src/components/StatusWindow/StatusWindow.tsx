import { motion, type Variants } from 'motion/react'
import StatBar from './StatBar'

type StatusWindowProps = {
  maxHeight?: number
}

const StatusWindow = ({ maxHeight }: StatusWindowProps) => {
  type Stats = {
    name: string
    level: number
    class: string
    energy: { current: number; max: number }
    focus: { current: number; max: number }
  }

  const stats: Stats = {
    name: 'JEA LEE',
    level: 2,
    class: 'Full-Stack Developer',
    energy: { current: 85, max: 100 },
    focus: { current: 99, max: 100 },
  }

  const variants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 160, damping: 20, duration: 0.28 },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      // add bottom spacing on mobile so the avatar never overlaps
      className="relative z-10 mb-16 w-full lg:mb-0"
      style={maxHeight ? { maxHeight } : undefined}
    >
      {/* a little taller on mobile so you always see multiple lines */}
      <div className="border-cyan-light/50 flex h-full min-h-[520px] w-full flex-col border-2 px-8 py-8 [box-shadow:var(--panel-shadow)] backdrop-blur-md [background:var(--panel-gradient)] md:min-h-[460px] md:px-10 md:py-10">
        {/* Name */}
        <div className="mb-8 flex flex-col items-center">
          <h1 className="font-family-body text-cyan-light text-3xl [text-shadow:0_0_10px_var(--color-cyan-light)] md:text-4xl">
            {stats.name}
          </h1>
        </div>

        {/* Level / Title — aligned with bars on desktop, stacked/centered on mobile */}
        <div className="mb-6 grid grid-cols-1 gap-3 text-center md:mb-8 md:grid-cols-2 md:gap-4 md:text-center">
          <div className="text-cyan-light font-family-game text-sm leading-tight md:text-base">
            LEVEL {stats.level}
          </div>
          <div className="text-cyan-light font-family-game text-sm leading-tight md:text-base">
            <span className="opacity-70">TITLE:</span>{' '}
            <span className="[text-shadow:0_0_10px_var(--color-cyan-light)]">{stats.class}</span>
          </div>
        </div>

        {/* Bars */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:mb-8 md:grid-cols-2">
          <StatBar
            label="Energy"
            current={stats.energy.current}
            max={stats.energy.max}
            color="gold-light"
            delay={0.05}
          />
          <StatBar
            label="Focus"
            current={stats.focus.current}
            max={stats.focus.max}
            color="cyan-light"
            delay={0.12}
          />
        </div>

        {/* underline sits between bars and description */}
        <div className="border-cyan-light/40 mb-4 border-t md:mb-6" />

        {/* Description scroll area (recent achievement at the bottom of this area) */}
        <div className="glow-scroll flex-1 overflow-y-auto">
          <section aria-labelledby="about-desc">
            <h2 id="about-desc" className="sr-only">
              About Description
            </h2>
            <p className="font-family-body text-cyan-light/70 text-(length:--fs-body) leading-normal">
              Welcome, Adventurer! Allow me to introduce{' '}
              <strong className="text-green [text-shadow:0_0_12px_var(--color-green)]">Jea</strong>,
              a<strong className="text-cyan-light"> Full-stack Developer</strong> who specializes in{' '}
              <strong className="text-gold-light/90"> React</strong>,{' '}
              <strong className="text-gold-light/90">TypeScript</strong>,{' '}
              <strong className="text-gold-light/90"> Node.js</strong>,{' '}
              <strong className="text-gold-light/90">PostgreSQL</strong>, and
              <strong className="text-gold-light/90"> AWS</strong>. He enjoys completing quests that
              remove friction in people's lives. If he's not tackling any quests (or deep in
              manhwa/anime), you might spot him training{' '}
              <strong className="text-green/90">Perception</strong> in the hazard area looking for
              his lost golf balls or raising his <strong className="text-green/90">STR</strong> at
              the local gym.
            </p>

            {/* recent achievement pinned to the bottom of the scroll content */}
            <p className="font-family-body text-cyan-light mt-4 md:mt-6">
              <strong className="text-cyan-light">Recent achievement:</strong>{' '}
              <strong className="text-cyan-light/80">
                built a database schema migration engine at Ditto.
              </strong>
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

export default StatusWindow
