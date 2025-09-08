import {motion} from  'motion/react';

interface StatBarProps {
    label: string;
    current: number;
    max: number;
    color?: string;
    delay?: number;
}

export default function StatBar({
    label,
    current,
    max,
    color = "cyan-light",
    delay = 0.5,
}: StatBarProps) {
    const percentage = Math.min(100, (current / max ) * 100);

    return (
        <div className="space-y-1" aria-label={`${label}: ${current}/${max}`}>
            <div className="flex justify-between text-xs">
                <span className="tracking-wide font-family-game text-cyan-light/80">
                {label}
                </span>
                <span className="font-family-game text-cyan-light/70">
                {current}/{max}
                </span>
            </div>

            <div className="relative h-3 w-full overflow-hidden border border-cyan-light/30 bg-dark/60">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.9, ease: "easeOut", delay }}
                    className="h-full relative"
                    style={{
                        background: `linear-gradient(90deg, var(--color-${color}), var(--color-${color}))`,
                        boxShadow: `0 0 12px var(--color-${color})`,
                    }}
                >
                </motion.div>
            </div>
        </div>
    )
}