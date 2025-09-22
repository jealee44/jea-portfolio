import { useMemo, useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { TREES, type TalentTree, type TalentNode } from '../../data/skillsTree'

type NodeChipStyleVars = React.CSSProperties & {
  '--gap-chip-lv': string
  '--gap-lv-tip': string
  '--gap-chip-lv-sm': string
  '--gap-lv-tip-sm': string
}

function NodeChip({ n }: { n: TalentNode }) {
  const planned = n.planned
  const styleVars: NodeChipStyleVars = {
    '--gap-chip-lv': '4px',
    '--gap-lv-tip': '6px',
    '--gap-chip-lv-sm': '6px',
    '--gap-lv-tip-sm': '8px',
  }

  return (
    <div className="group relative flex flex-col items-center" style={styleVars}>
      <div
        className={[
          'flex items-center justify-center rounded-full border transition-transform duration-150',
          'h-16 w-16 sm:h-20 sm:w-20',
          planned ? 'border-cyan-light/20 opacity-40 grayscale' : 'border-cyan-light/40',
          'bg-dark/40',
          planned
            ? ''
            : 'hover:-translate-y-0.5 hover:[box-shadow:0_0_14px_var(--color-cyan-light)]',
        ].join(' ')}
      >
        <n.Icon
          size={30}
          className={planned ? 'text-cyan-light/40' : ''}
          style={planned ? undefined : { color: n.color }}
        />
      </div>

      <div className="relative mt-[var(--gap-chip-lv)] sm:mt-[var(--gap-chip-lv-sm)]">
        <div className="border-cyan-light/30 bg-dark/60 text-cyan-light/90 font-family-game pointer-events-none grid h-5 min-w-[50px] place-items-center rounded border px-1.5 text-[10px] leading-none sm:text-[11px]">
          {planned ? 'LV 0' : `LV ${n.level}`}
        </div>
        <div className="border-cyan-light/20 text-cyan-light pointer-events-none absolute top-full left-1/2 mt-[var(--gap-lv-tip)] -translate-x-1/2 rounded border bg-[rgba(10,8,24,0.92)] px-2 py-1 text-[11px] whitespace-nowrap opacity-0 shadow transition-opacity duration-150 group-hover:opacity-100 sm:mt-[var(--gap-lv-tip-sm)]">
          {n.name}
        </div>
      </div>
    </div>
  )
}

function Column({ tree }: { tree: TalentTree }) {
  const maxRow = useMemo(() => Math.max(...tree.nodes.map((n) => n.row)), [tree.nodes])
  const rows = useMemo(() => {
    const map = new Map<number, TalentNode[]>()
    for (let i = 1; i <= maxRow; i++) map.set(i, [])
    tree.nodes.forEach((n) => map.get(n.row)!.push(n))
    return Array.from(map.entries()).map(([row, arr]) => ({ row, arr }))
  }, [tree, maxRow])

  return (
    <div className="relative">
      <div className="border-cyan-light/20 absolute top-0 left-1/2 h-full -translate-x-1/2 border-l" />
      <ul className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
        {rows.map((r) => (
          <li key={r.row} className="group relative flex items-center justify-center">
            <div className="border-cyan-light/10 absolute top-0 left-1/2 h-full -translate-x-1/2 border-l" />
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
              {r.arr.map((n) => (
                <div key={n.id} className="group">
                  <NodeChip n={n} />
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TreeCard({ tree }: { tree: TalentTree }) {
  const MAX = 840
  const ref = useRef<HTMLDivElement>(null)
  const [needsScroll, setNeedsScroll] = useState(false)

  const measure = () => {
    const el = ref.current
    if (!el) return
    setNeedsScroll(el.scrollHeight > MAX)
  }

  useEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    if (ref.current) ro.observe(ref.current)
    const on = () => measure()
    window.addEventListener('resize', on)
    return () => {
      window.removeEventListener('resize', on)
      ro.disconnect()
    }
  }, [tree])

  return (
    <motion.div
      className="border-cyan-light/40 relative w-full border-2 p-6 [box-shadow:var(--panel-shadow)] [background:var(--panel-gradient)] sm:p-6 lg:p-8"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <h3 className="font-family-heading text-cyan-light mb-4 text-center text-3xl">
        {tree.title}
      </h3>
      <div
        ref={ref}
        className={needsScroll ? 'glow-scroll overflow-y-auto pb-8' : 'overflow-visible pb-8'}
        style={needsScroll ? { maxHeight: MAX } : undefined}
      >
        <Column tree={tree} />
      </div>
    </motion.div>
  )
}

export default function TalentTree() {
  const [active, setActive] = useState<TalentTree['id'] | 'all'>('all')
  const trees = useMemo(() => TREES, [])
  const shown = active === 'all' ? trees : trees.filter((t) => t.id === active)

  return (
    <section id="skills" className="container-90 scroll-mt-24 py-24">
      <div className="mb-8 text-center">
        <div className="border-gold-light/50 bg-dark/40 inline-block border px-8 py-2">
          <h2 className="font-family-heading text-cyan-light text-4xl tracking-wider [text-shadow:0_0_10px_var(--color-cyan-light)] sm:text-5xl">
            Skills Tree
          </h2>
        </div>
        <p className="font-family-body text-cyan-light/80 mx-auto mt-4 max-w-[70ch] text-[length:var(--fs-body)]">
          This tree shows what I use most and what I’m learning next. Hover a node to see the tech
          and level. Levels represent how many years I've worked with that technology. Greyed nodes
          are future unlocks I’m planning to level up.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'all', label: 'All Trees' },
          { id: 'frontend', label: 'Frontend' },
          { id: 'backend', label: 'Backend | Database' },
          { id: 'ops', label: 'Testing | DevOps' },
        ].map((b) => (
          <button
            key={b.id}
            onClick={() => setActive(b.id as typeof active)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
              active === b.id
                ? 'border-gold-light text-gold-light [text-shadow:0_0_10px_var(--color-gold-light)]'
                : 'border-cyan-light/30 text-cyan-light/80 hover:text-cyan-light'
            } `}
          >
            {b.label}
          </button>
        ))}
      </div>

      <motion.div
        className={
          shown.length > 1
            ? 'grid grid-cols-1 gap-8 lg:grid-cols-3'
            : 'grid grid-cols-1 justify-center'
        }
      >
        <AnimatePresence mode="popLayout">
          {shown.map((tree) => (
            <div key={tree.id} className={shown.length === 1 ? 'mx-auto w-full max-w-4xl' : ''}>
              <TreeCard tree={tree} />
            </div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
