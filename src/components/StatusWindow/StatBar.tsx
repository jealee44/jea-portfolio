import { motion } from 'motion/react'

interface StatBarProps {
  label: string
  current: number
  max: number
  color?: 'cyan-light' | 'gold-light'
  delay?: number
}

export default function StatBar({
  label,
  current,
  max,
  color = 'cyan-light',
  delay = 0.5,
}: StatBarProps) {
  const percentage = Math.min(100, (current / max) * 100)
  const colorMap = {
    'cyan-light': 'var(--color-cyan-light)',
    'gold-light': 'var(--color-gold-light)',
  } as const
  const tint = colorMap[color]

  return (
    <div className="space-y-1" aria-label={`${label}: ${current}/${max}`}>
      <div className="flex justify-between text-xs">
        <span className="font-family-game text-cyan-light/80 tracking-wide">{label}</span>
        <span className="font-family-game text-cyan-light/70">
          {current}/{max}
        </span>
      </div>
      <div className="border-cyan-light/30 bg-dark/60 relative h-3 w-full overflow-hidden border">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.9, ease: 'easeOut', delay }}
          className="h-full"
          style={{ backgroundColor: tint, boxShadow: `0 0 12px ${tint}` }}
        />
      </div>
    </div>
  )
}
