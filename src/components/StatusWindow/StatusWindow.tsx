import {motion} from 'motion/react'

const StatusWindow = () => {
    const stats = {
        name: "Jea Lee",
        level: 2,
        class: "Full-Stack Developer",
        energy: { current: 85, max: 100 },
        focus: { current: 99, max: 100}
    }

    const containerVariants = { 
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: -50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition : {
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.6
            }
        }
    }

    return (
        <div className="bg-gradient-to-br from-[rgba(10,8,24,0.95)] to-[rgba(26,18,48,0.95)] border-2 border-solid border-[rgba(163,230,255,0.5)] shadow-[0_0_30px_rgba(147,51,234,0.4),inset_0_0_30px_rgba(147,51,234,0.1)] backdrop-blur-[10px] rounded-none p-8">
            {/* Status Window */}
            <div className="flex justify-center">
            <div className="border-1 border-solid border-[rgba(163, 230, 255, .3)] bg-[rgba(10, 8, 24, .5)] px-2 py-8 mb-6 inline-block">
                STATUS
            </div>
        </div>
        <p>{stats.name}</p>
        <p>Level: {stats.level}</p>
        <p>Class: {stats.class}</p>
        <p>Energy: {stats.energy.current}/{stats.energy.max}</p>
        <p>Focus: {stats.focus.current}/{stats.focus.max}</p>
        </div>
    )
}

export default StatusWindow