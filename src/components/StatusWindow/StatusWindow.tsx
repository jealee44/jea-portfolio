import {motion, type Variants} from 'motion/react'

const StatusWindow = () => {
    const stats = {
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
        className="max-w-xl mx-auto mt-20"
        >
        <div className="bg-[--gradient-panel] border-2 border-cyan-light/50 shadow-[--shadow-cyan] backdrop-blur-[10px] rounded-none px-8 py-2">
            {/* Status Window */}
            <div className="flex justify-center">
            <div className="border border-[rgba(163,230,255,0.3)] bg-[rgba(10,8,24,0.5)] px-8 py-2 mb-6 inline-block">
                <span className="text-xs uppercase tracking-wider text-[var(--color-solo-purple)] font-family-heading">
                About Me
                </span>
            </div>
        </div>
        <h1 className="text-4xl font-family-body text-white text-center my-4 text-shadow-lg text-shadow-purple-500/50">{stats.name}</h1>
        <p>Level: {stats.level}</p>
        <p>Class: {stats.class}</p>
        <p>Energy: {stats.energy.current}/{stats.energy.max}</p>
        <p>Focus: {stats.focus.current}/{stats.focus.max}</p>
        </div>
        </motion.div>
    )
}

export default StatusWindow