import { useMemo, useState, useEffect, useCallback } from 'react'
import { QUESTS } from '../../data/quests'
import { MdOpenInNew, MdCode, MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { motion, AnimatePresence } from 'motion/react'

function ConfirmModal({
  open,
  onClose,
  onConfirm,
  message,
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  message: string
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 border-2 border-red-500/50 p-8 [box-shadow:var(--panel-shadow)] [background:var(--panel-gradient)]"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-4 text-center">
              <div className="mb-3 inline-block border border-red-500/50 bg-black/40 px-5 py-1.5">
                <span className="font-family-heading text-2xl tracking-wider text-red-400 [text-shadow:0_0_14px_#ef4444]">
                  Warning
                </span>
              </div>
              <p className="font-family-body text-cyan-light/85">{message}</p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="font-family-game border-cyan-light/30 text-cyan-light/80 hover:text-cyan-light border px-3 py-1.5 hover:[text-shadow:0_0_8px_var(--color-cyan-light)]"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="font-family-game border-gold-light/60 text-gold-light border-2 px-3 py-1.5 hover:[text-shadow:0_0_10px_var(--color-gold-light)]"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function QuestLog() {
  const [index, setIndex] = useState(0)
  const [confirmUrl, setConfirmUrl] = useState<string | null>(null)
  const q = useMemo(() => QUESTS[index], [index])

  const goto = useCallback((dir: -1 | 1) => {
    setIndex((i) => (i + dir + QUESTS.length) % QUESTS.length)
  }, [])

  const openLink = (url?: string) => {
    if (!url) return
    setConfirmUrl(url)
  }

  const confirm = () => {
    if (confirmUrl) window.open(confirmUrl, '_blank', 'noopener,noreferrer')
    setConfirmUrl(null)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goto(-1)
      if (e.key === 'ArrowRight') goto(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goto])

  const isPlanned = !!q.planned

  return (
    <section id="projects" className="container-quest scroll-mt-24 py-24">
      <div className="mb-10 text-center">
        <div className="border-gold-light/50 bg-dark/40 inline-block border px-8 py-2">
          <h2 className="font-family-heading text-cyan-light text-4xl tracking-wider [text-shadow:0_0_10px_var(--color-cyan-light)] sm:text-5xl">
            Quest Log
          </h2>
        </div>
        <p className="font-family-body text-cyan-light/80 mx-auto mt-4 max-w-[70ch] text-[length:var(--fs-body)]">
          A showcase of shipped projects and in-progress ideas presented like a progression log.
          Each entry notes the challenge, the answer, and the tools I leveled to get it done.
          Explore the stack, then jump to the live realm if you accept the risk.
        </p>
      </div>

      <motion.article
        key={q.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className={`border-cyan-light/40 max-h-[700px] border-2 p-4 [box-shadow:var(--panel-shadow)] [background:var(--panel-gradient)] md:h-[520px] md:p-6 lg:h-[580px] lg:p-8 ${isPlanned ? 'opacity-85 grayscale-[35%]' : ''}`}
        aria-labelledby={`quest-${q.id}-title`}
      >
        <div className="flex h-full flex-col md:flex-row md:gap-6 lg:gap-8">
          <h3
            id={`quest-${q.id}-title`}
            className="font-family-heading text-cyan-light mb-3 text-center text-2xl md:hidden"
          >
            {q.title}
          </h3>

          <div className="mb-4 md:mb-0 md:h-full md:w-[45%] md:flex-shrink-0 lg:w-[50%]">
            <div className="border-cyan-light/30 bg-dark/40 relative h-[200px] w-full overflow-hidden border md:h-full">
              <img
                src={q.image}
                alt={`${q.title} screenshot`}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover select-none"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden md:h-full">
            <h3 className="font-family-heading text-cyan-light mb-2 hidden text-xl md:mb-3 md:block md:text-2xl lg:text-3xl">
              {q.title}
            </h3>

            <div className="glow-scroll mb-3 max-h-[180px] flex-1 overflow-y-auto md:mb-4 md:max-h-none">
              <div className="font-family-body text-cyan-light/85 text-sm leading-relaxed md:text-sm lg:text-base">
                <p className="mb-2">{q.blurb}</p>
                {!isPlanned && q.problem && q.solution && (
                  <div className="space-y-2">
                    <p className="text-cyan-light/85">
                      <span className="text-gold-light font-semibold">Problem:</span> {q.problem}
                    </p>
                    <span className="text-green/90 font-semibold">Solution:</span> {q.solution}
                  </div>
                )}
                {isPlanned && q.planned && (
                  <div className="mt-2 space-y-2 md:mt-3">
                    <p className="text-cyan-light/85">
                      <span className="text-gold-light font-semibold">Problem:</span>{' '}
                      {q.planned.problem}
                    </p>
                    <span className="text-green/90 font-semibold">Solution:</span>{' '}
                    {q.planned.solution}
                    <p className="text-cyan-light/85 pt-1">
                      <span className="text-cyan-light font-semibold">MVP:</span>{' '}
                      {q.planned.mvp.join(' · ')}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto">
              <ul className="mb-3 flex flex-wrap gap-1 md:mb-4 md:gap-2">
                {q.tech.map((t) => (
                  <li
                    key={t}
                    className="font-family-game border-green/30 bg-dark/40 text-green border px-1.5 py-0.5 text-[10px] tracking-wide md:px-2.5 md:py-1 md:text-xs"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {isPlanned ? (
                  <span
                    aria-label="Coming Soon"
                    className="font-family-game border-cyan-light/30 text-cyan-light/70 inline-flex items-center gap-1 border px-2 py-1 text-xs md:gap-2 md:px-3 md:py-1.5 md:text-sm"
                  >
                    Coming Soon
                  </span>
                ) : (
                  <>
                    {q.live && (
                      <button
                        type="button"
                        onClick={() => openLink(q.live)}
                        className="font-family-game border-gold-light/60 text-gold-light inline-flex items-center gap-1 border-2 px-2 py-1 text-xs hover:[text-shadow:0_0_10px_var(--color-gold-light)] md:gap-2 md:px-3 md:py-1.5 md:text-sm"
                      >
                        <MdOpenInNew size={16} className="md:h-[18px] md:w-[18px]" />
                        Visit Site
                      </button>
                    )}
                    {q.code && (
                      <button
                        type="button"
                        onClick={() => openLink(q.code)}
                        className="font-family-game border-cyan-light/40 text-cyan-light/90 hover:text-cyan-light inline-flex items-center gap-1 border px-2 py-1 text-xs hover:[text-shadow:0_0_10px_var(--color-cyan-light)] md:gap-2 md:px-3 md:py-1.5 md:text-sm"
                      >
                        <MdCode size={16} className="md:h-[18px] md:w-[18px]" />
                        View Code
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous quest"
          onClick={() => goto(-1)}
          className="border-gold-light/30 text-gold-light/80 hover:text-gold-light rounded border p-2 hover:[text-shadow:0_0_10px_var(--color-gold-light)]"
        >
          <MdChevronLeft size={26} />
        </button>
        <button
          aria-label="Next quest"
          onClick={() => goto(1)}
          className="border-gold-light/30 text-gold-light/80 hover:text-gold-light rounded border p-2 hover:[text-shadow:0_0_10px_var(--color-gold-light)]"
        >
          <MdChevronRight size={26} />
        </button>
      </div>

      <ConfirmModal
        open={!!confirmUrl}
        onClose={() => setConfirmUrl(null)}
        onConfirm={confirm}
        message="You are about to leave the safe zone and travel to an external realm. Proceed?"
      />
    </section>
  )
}
