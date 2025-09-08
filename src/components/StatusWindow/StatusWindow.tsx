import {motion, type Variants} from 'motion/react'
import StatBar from './StatBar'

const StatusWindow = () => {
    type Stats = {
    name: string;
    level: number;
    class: string;
    energy: {current: number; max: number};
    focus: {current: number; max: number};
};

    const stats: Stats = {
        name: "Jea Lee",
        level: 2,
        class: "Full-Stack Developer",
        energy: { current: 85, max: 100 },
        focus: { current: 99, max: 100}
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
        </div>
        </motion.div>

        
    )
}

export default StatusWindow