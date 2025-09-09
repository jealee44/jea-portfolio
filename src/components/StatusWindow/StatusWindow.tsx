import {motion, type Variants} from 'motion/react'
import StatBar from './StatBar'

const StatusWindow = () => {
    type Stats = {
    name: string;
    level: number;
    class: string;
    energy: {current: number; max: number};
    focus: {current: number; max: number};
    summary: string;
};

    const stats: Stats = {
        name: "JEA LEE",
        level: 2,
        class: "Full-Stack Developer",
        energy: { current: 85, max: 100 },
        focus: { current: 99, max: 100},
        summary: "Welcome, Adventurer! Allow me to introduce Jea Lee, a level 2 (y.o.e) Full-stack Developer who specializes in React, TypeScript, Node.js, PostgreSQL, and AWS. He enjoys tackling quests that remove friction in people's lives. Recent achievement: built a database schema migration engine at Ditto. If he's not tackling any quests (or deep in manhwa/anime), you might spot him training **Perception** on the fairway scouting for his lost golf balls or **STR** at the local gym"
    }

    const variants: Variants = { 
        hidden: {
            opacity: 0,
            scale: 0.1,
            y: -24
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition : {
                type: "spring",
                stiffness: 150,
                damping: 20,
                duration: .3
            }
        }
    }

    return (
        <motion.div 
        variants={variants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-20 px-4"
        >
        <div className="[background:var(--panel-gradient)] [box-shadow:var(--panel-shadow)] border-2 border-cyan-light/50 backdrop-blur-md rounded-none px-8 py-4">
            <div className="flex justify-center">
            <div className="border border-cyan-light/30 bg-dark/50 px-8 py-2 mb-6 inline-block">
                <span className="text-4xl uppercase tracking-wider text-cyan-light font-family-heading [text-shadow:0_0_10px_var(--color-cyan-light)]">
                About Me
                </span>
            </div>
        </div>
        <div className="mb-6 flex flex-col md:flex-row md:justify-around md:items-center gap-2">

        <h1 className=" text-3xl md:text-4xl  font-family-body text-center md:text-left
      text-cyan-light [text-shadow:0_0_10px_var(--color-cyan-light)]">{stats.name}</h1>

        <div className="text-cyan-light font-family-game text-sm md:text-left text-center">
            <div className="leading-tight">LEVEL {stats.level}</div>
            <div className="leading-tight">
                <span className="opacity-70">TITLE:</span>{' '}
                <span className="[text-shadow:0_0_10px_var(--color-cyan-light)]">{stats.class}</span></div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
        <section aria-labelledby='about-desc' className="mt-4 border-t border-cyan-light/40 pt-4 ">
            <h2 id="about-desc" className="sr-only">About Description</h2>
            <p className="font-family-body text-cyan-light/70 leading-relaxed text-(length:--fs-body) max-w-fit">
        Welcome, Adventurer! Allow me to introduce <strong className="text-green [text-shadow:0_0_12px_var(--color-green)]">Jea Lee</strong>
, a level 2 (y.o.e) <strong className="text-cyan-light"> Full-stack Developer</strong> who specializes in  <strong className="text-gold-light/90"> React</strong>, <strong className="text-gold-light/90">TypeScript</strong>,
  <strong className="text-gold-light/90"> Node.js</strong>, <strong className="text-gold-light/90">PostgreSQL</strong>, and
  <strong className="text-gold-light/90"> AWS</strong>. He enjoys tackling quests that remove friction in people's lives. <strong className="text-cyan-light"> Recent achievement:</strong> <strong className="text-cyan-light/80"> built a database schema migration engine at Ditto.</strong> If he's not tackling any quests (or deep in manhwa/anime), you might spot him training <strong className="text-green/90">Perception</strong> on the fairway scouting for his lost golf balls or <strong className="text-green/90">STR</strong> at the local gym
            </p>
        </section>
        </div>
        </motion.div>
    )
}

export default StatusWindow