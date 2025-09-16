import { useMemo, useState, useEffect, useCallback } from 'react'
import { QUESTS } from '../../data/quests'
import { MdOpenInNew, MdCode, MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { motion, AnimatePresence } from 'motion/react'

/* ---------- Confirm Modal ---------- */
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
          <div
            className="absolute inset-0 bg-[var(--color-dark)]/90 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 border-2 border-[var(--color-cyan-light)]/50 p-6 [box-shadow:var(--panel-shadow)] [background:var(--panel-gradient)]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-4 text-center">
              <div className="mb-3 inline-block border border-[var(--color-cyan-light)]/30 bg-[var(--color-dark)]/50 px-4 py-1">
                <span className="font-family-heading text-cyan-light text-2xl tracking-wider [text-shadow:0_0_10px_var(--color-cyan-light)]">
                  Warning
                </span>
              </div>
              <p className="font-family-body text-cyan-light/85">{message}</p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="font-family-game text-cyan-light/80 hover:text-cyan-light border border-[var(--color-cyan-light)]/30 px-3 py-1.5 hover:[text-shadow:0_0_8px_var(--color-cyan-light)]"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="font-family-game border-2 border-[var(--color-gold-light)]/60 px-3 py-1.5 text-[color:var(--color-gold-light)] hover:[text-shadow:0_0_10px_var(--color-gold-light)]"
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

/* ---------- Quest Log ---------- */
export default function QuestLog() {
  const [index, setIndex] = useState(0)
  const [confirmUrl, setConfirmUrl] = useState<string | null>(null)

  const q = useMemo(() => QUESTS[index], [index])

  const goto = useCallback(
    (dir: -1 | 1) => setIndex((i) => (i + dir + QUESTS.length) % QUESTS.length),
    [],
  )

  const openLink = (url?: string) => {
    if (!url) return
    setConfirmUrl(url)
  }

  const confirm = () => {
    if (confirmUrl) window.open(confirmUrl, '_blank', 'noopener,noreferrer')
    setConfirmUrl(null)
  }

  // Optional: allow ← / → keys to switch quests
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goto(-1)
      if (e.key === 'ArrowRight') goto(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goto])

  return (
    <section id="projects" className="container-quest scroll-mt-24 py-24">
      {/* Title + subtitle */}
      <div className="mb-10 text-center">
        <div className="inline-block border border-[var(--color-cyan-light)]/30 bg-[var(--color-dark)]/40 px-8 py-2">
          <h2 className="font-family-heading text-cyan-light text-4xl tracking-wider [text-shadow:0_0_10px_var(--color-cyan-light)] sm:text-5xl">
            Quest Log
          </h2>
        </div>
        <p className="font-family-body text-cyan-light/80 mx-auto mt-4 max-w-[70ch] text-(length:--fs-body)">
          A chronicle of quests completed and in-progress by{' '}
          <span className="text-cyan-light font-semibold">Jea Lee</span>—each one a dungeon clear:
          tools forged, bugs vanquished, and users rescued from needless friction. Browse entries,
          check the loot (tech stack), and venture to the live realms if you accept the risk.
        </p>
      </div>

      {/* Card */}
      <motion.article
        key={q.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="min-h-[460px] border-2 border-[var(--color-cyan-light)]/40 p-6 [box-shadow:var(--panel-shadow)] [background:var(--panel-gradient)] sm:p-8 lg:min-h-[520px]"
        aria-labelledby={`quest-${q.id}-title`}
      >
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[min(42vw,680px)_1fr] lg:gap-10">
          {/* Image (left on desktop) */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-[720px] overflow-hidden border border-[var(--color-cyan-light)]/30 bg-[var(--color-dark)]/40">
              <img
                src={q.image} // e.g. '/images/ditto.png' (public/images)
                alt={`${q.title} screenshot`}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover select-none"
              />
            </div>
          </div>

          {/* Details (right on desktop) */}
          <div className="order-3 lg:order-2">
            <h3
              id={`quest-${q.id}-title`}
              className="font-family-heading text-cyan-light mb-4 text-center text-3xl sm:text-4xl lg:text-left"
            >
              {q.title}
            </h3>

            <p className="font-family-body text-cyan-light/85 leading-relaxed">{q.blurb}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {q.tech.map((t) => (
                <li
                  key={t}
                  className="font-family-game text-cyan-light/90 border border-[var(--color-cyan-light)]/30 bg-[var(--color-dark)]/40 px-2.5 py-1 text-xs tracking-wide"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {q.live && (
                <button
                  type="button"
                  onClick={() => openLink(q.live)}
                  className="font-family-game inline-flex items-center gap-2 border-2 border-[var(--color-gold-light)]/60 px-3 py-1.5 text-[color:var(--color-gold-light)] hover:[text-shadow:0_0_10px_var(--color-gold-light)]"
                >
                  <MdOpenInNew size={18} />
                  Visit Site
                </button>
              )}

              {q.code && (
                <button
                  type="button"
                  onClick={() => openLink(q.code)}
                  className="font-family-game text-cyan-light/90 hover:text-cyan-light inline-flex items-center gap-2 border border-[var(--color-cyan-light)]/40 px-3 py-1.5 hover:[text-shadow:0_0_10px_var(--color-cyan-light)]"
                >
                  <MdCode size={18} />
                  View Code
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.article>

      {/* Arrows */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          aria-label="Previous quest"
          onClick={() => goto(-1)}
          className="text-cyan-light/80 hover:text-cyan-light rounded border border-[var(--color-cyan-light)]/30 p-2 hover:[text-shadow:0_0_10px_var(--color-cyan-light)]"
        >
          <MdChevronLeft size={26} />
        </button>
        <button
          aria-label="Next quest"
          onClick={() => goto(1)}
          className="text-cyan-light/80 hover:text-cyan-light rounded border border-[var(--color-cyan-light)]/30 p-2 hover:[text-shadow:0_0_10px_var(--color-cyan-light)]"
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
