import {motion} from 'motion/react'

const StatusWindow = () => {
    const stats = {
        name: "Jea Lee",
        level: 2,
        class: "Full-Stack Developer",
    }

    return (
        <div className="bg-gradient-to-br from-[rgba(10,8,24,0.95)] to-[rgba(26,18,48,0.95)] border-2 border-solid border-[rgba(163,230,255,0.5)]">
            Status Window Component
        </div>
    )
}

export default StatusWindow