import { useState, useEffect } from 'react'
import { MdMenu, MdEmail, MdClose } from 'react-icons/md'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { motion, AnimatePresence } from 'motion/react'

type NavItem = { href: string; label: string; download?: boolean }

const NAV: readonly NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '/JeaLee_Resume.pdf', label: 'Resume', download: true },
] as const

const SOCIAL = [
  { href: 'https://github.com/jaylee44', label: 'GitHub', Icon: SiGithub },
  { href: 'https://linkedin.com/in/jaylee44', label: 'LinkedIn', Icon: SiLinkedin },
  { href: 'mailto:jealee44@gmail.com', label: 'Email', Icon: MdEmail },
] as const

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${hasScrolled ? 'bg-[var(--color-dark)]/60 backdrop-blur-md' : 'bg-[var(--color-dark)]/40 backdrop-blur-sm'} border-b border-[var(--color-cyan-light)]/20`}
      >
        <nav className="container-90 flex h-20 items-center justify-between">
          <a
            href="#about"
            className="font-family-heading text-cyan-light text-base tracking-wide hover:[text-shadow:0_0_14px_var(--color-cyan-light)] md:text-xl"
          >
            JAY LEE
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <ul className="font-family-heading text-cyan-light/85 flex items-center gap-6 text-base md:text-xl">
              {NAV.map((n) => (
                <li key={n.label}>
                  {n.download ? (
                    <a
                      href={n.href}
                      download
                      className="hover:text-cyan-light relative inline-block underline-offset-8 hover:underline hover:[text-shadow:0_0_14px_var(--color-cyan-light)]"
                    >
                      {n.label}
                    </a>
                  ) : (
                    <a
                      href={n.href}
                      className="hover:text-cyan-light relative inline-block underline-offset-8 hover:underline hover:[text-shadow:0_0_14px_var(--color-cyan-light)]"
                    >
                      {n.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="ml-2 flex items-center gap-3">
              {SOCIAL.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-cyan-light/70 hover:text-cyan-light rounded p-1 hover:[text-shadow:0_0_10px_var(--color-cyan-light)] focus:ring-2 focus:ring-[color:var(--color-cyan-light)]/60 focus:outline-none"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Open Menu"
            onClick={() => setOpen(true)}
            className="text-cyan-light/85 hover:text-cyan-light p-2 md:hidden"
          >
            <MdMenu size={28} />
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div
              className="bg-dark/95 absolute inset-0 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="absolute top-1/2 left-1/2 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 border-2 border-[var(--color-cyan-light)]/50 p-8 [box-shadow:var(--panel-shadow)] [background:var(--panel-gradient)]"
            >
              <button
                onClick={() => setOpen(false)}
                className="text-cyan-light/50 hover:text-cyan-light absolute top-4 right-4 transition-all duration-200 hover:scale-110 hover:[text-shadow:0_0_10px_var(--color-cyan-light)]"
                aria-label="Close Menu"
              >
                <MdClose size={24} />
              </button>
              <nav className="mt-8 flex flex-col items-center gap-6">
                {NAV.map((n) =>
                  n.download ? (
                    <a
                      key={n.label}
                      href={n.href}
                      download
                      onClick={() => setOpen(false)}
                      className="font-family-heading text-cyan-light text-2xl tracking-wider transition-all hover:scale-110 hover:[text-shadow:0_0_10px_var(--color-cyan-light)]"
                    >
                      {n.label}
                    </a>
                  ) : (
                    <button
                      key={n.label}
                      onClick={() => scrollToSection(n.href)}
                      className="font-family-heading text-cyan-light text-2xl tracking-wider transition-all hover:scale-110 hover:[text-shadow:0_0_10px_var(--color-cyan-light)]"
                    >
                      {n.label}
                    </button>
                  ),
                )}
                <div className="mt-6 flex items-center gap-6 border-t border-[var(--color-cyan-light)]/30 pt-6">
                  {SOCIAL.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-light/70 hover:text-cyan-light transition-all hover:scale-110 hover:[text-shadow:0_0_10px_var(--color-cyan-light)]"
                    >
                      <Icon size={28} />
                    </a>
                  ))}
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
