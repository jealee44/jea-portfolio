import { useEffect, useRef, useState } from 'react'
import StatusWindow from './components/StatusWindow/StatusWindow'
import Avatar from './components/StatusWindow/Avatar'
import NavBar from './components/Nav/NavBar'
import QuestLog from './components/Projects/QuestLog'
import TalentTree from './components/Skills/TalentTree'

export default function App() {
  const avatarRef = useRef<HTMLDivElement | null>(null)
  const [avatarH, setAvatarH] = useState<number | undefined>(undefined)

  useEffect(() => {
    const el = avatarRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setAvatarH(entry.contentRect.height)
      }
    })
    ro.observe(el)
    setAvatarH(el.getBoundingClientRect().height)
    const on = () => setAvatarH(el.getBoundingClientRect().height)
    window.addEventListener('resize', on)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', on)
    }
  }, [])

  return (
    <>
      <NavBar />

      <section id="about" className="container-90 pt-48 lg:pt-60">
        <div className="text-center">
          <div className="border-gold-light/50 bg-dark/40 inline-block border px-8 py-2">
            <h2 className="font-family-heading text-cyan-light text-4xl tracking-wider [text-shadow:0_0_10px_var(--color-cyan-light)] sm:text-5xl">
              About Me
            </h2>
          </div>
          <p className="font-family-body text-cyan-light/80 mx-auto mt-4 max-w-[70ch] text-[length:var(--fs-body)]">
            I build products the way I train stats: focus on the next clear win, measure progress,
            and level up fast. I like turning messy problems into clean systems that feel great to
            use. Below is my current loadout and recent activity.
          </p>
        </div>

        <div className="isolate mt-8 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex">
            <StatusWindow maxHeight={avatarH} />
          </div>

          <div
            className="relative z-0 mt-14 flex items-center justify-center sm:mt-16 lg:mt-0"
            ref={avatarRef}
          >
            <Avatar className="w-[260px] sm:w-[320px] lg:w-[380px] xl:w-[420px]" />
          </div>
        </div>
      </section>

      <QuestLog />
      <TalentTree />
    </>
  )
}
