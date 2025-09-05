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
        <div className="[background:var(--panel-gradient)] [box-shadow:var(--panel-shadow)] border-2 border-cyan-light/50 backdrop-blur-md rounded-none px-8 py-4">
            <div className="flex justify-center">
            <div className="border border-cyan-light/30 bg-solo-dark/50 px-8 py-2 mb-6 inline-block">
                <span className="text-4xl uppercase tracking-wider text-cyan-light font-family-heading [text-shadow:0_0_10px_var(--color-cyan-light)]">
                About Me
                </span>
            </div>
        </div>
        <h1 className="text-3xl font-family-body text-white text-center my-4 text-shadow-lg text-shadow-purple-500/50">{stats.name}</h1>
        <div className="mb-6 flex justify-evenly text-2x1 text-cyan-light font-family-game">
            <span>LEVEL {stats.level}</span>
            <span>TITLE: {stats.class}</span>
        </div>
        <p>Energy: {stats.energy.current}/{stats.energy.max}</p>
        <p>Focus: {stats.focus.current}/{stats.focus.max}</p>
        </div>
        </motion.div>
    )
}

export default StatusWindow