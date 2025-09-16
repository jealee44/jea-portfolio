import { motion, type Variants } from 'motion/react'
import StatBar from './StatBar'

const StatusWindow = () => {
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
    hidden: {
      opacity: 0,
      scale: 0.1,
      y: -24,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 20,
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div variants={variants} initial="hidden" animate="visible" className="w-full">
      <div className="border-cyan-light/50 rounded-none border-2 px-8 py-4 [box-shadow:var(--panel-shadow)] backdrop-blur-md [background:var(--panel-gradient)]">
        <div className="flex justify-center">
          <div className="border-cyan-light/30 bg-dark/50 mb-6 inline-block border px-8 py-2">
            <span className="text-cyan-light font-family-heading text-4xl tracking-wider uppercase [text-shadow:0_0_10px_var(--color-cyan-light)]">
              About Me
            </span>
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-around">
          <h1 className="font-family-body text-cyan-light text-center text-3xl [text-shadow:0_0_10px_var(--color-cyan-light)] md:text-left md:text-4xl">
            {stats.name}
          </h1>

          <div className="text-cyan-light font-family-game text-center text-sm md:text-left">
            <div className="leading-tight">LEVEL {stats.level}</div>
            <div className="leading-tight">
              <span className="opacity-70">TITLE:</span>{' '}
              <span className="[text-shadow:0_0_10px_var(--color-cyan-light)]">{stats.class}</span>
            </div>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <StatBar
            label="Energy"
            current={stats.energy.current}
            max={stats.energy.max}
            color="gold-light"
            delay={0.1}
          />
          <StatBar
            label="Focus"
            current={stats.focus.current}
            max={stats.focus.max}
            color="cyan-light"
            delay={0.2}
          />
        </div>
        <section aria-labelledby="about-desc" className="border-cyan-light/40 mt-4 border-t pt-4">
          <h2 id="about-desc" className="sr-only">
            About Description
          </h2>
          <p className="font-family-body text-cyan-light/70 max-w-fit text-(length:--fs-body) leading-normal">
            Welcome, Adventurer! Allow me to introduce{' '}
            <strong className="text-green [text-shadow:0_0_12px_var(--color-green)]">
              Jea Lee
            </strong>
            , a level 2 (y.o.e) <strong className="text-cyan-light"> Full-stack Developer</strong>{' '}
            who specializes in <strong className="text-gold-light/90"> React</strong>,{' '}
            <strong className="text-gold-light/90">TypeScript</strong>,
            <strong className="text-gold-light/90"> Node.js</strong>,{' '}
            <strong className="text-gold-light/90">PostgreSQL</strong>, and
            <strong className="text-gold-light/90"> AWS</strong>. He enjoys tackling quests that
            remove friction in people's lives.{' '}
            <strong className="text-cyan-light"> Recent achievement:</strong>{' '}
            <strong className="text-cyan-light/80">
              {' '}
              built a database schema migration engine at Ditto.
            </strong>{' '}
            If he's not tackling any quests (or deep in manhwa/anime), you might spot him training{' '}
            <strong className="text-green/90">Perception</strong> on the fairway scouting for his
            lost golf balls or <strong className="text-green/90">STR</strong> at the local gym
          </p>
        </section>
      </div>
    </motion.div>
  )
}

export default StatusWindow
