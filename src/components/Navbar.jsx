import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team Structure', href: '#team' },
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const base = 'fixed top-0 inset-x-0 z-50 transition-all'
  const bg = scrolled ? 'bg-slate-900/80 backdrop-blur border-b border-white/10' : 'bg-transparent'

  return (
    <header className={`${base} ${bg}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight">TechBoost NG HUB</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-300 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow-md shadow-blue-500/30 hover:shadow-lg">
              Get in touch
            </a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 bg-white/5 text-slate-200">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white">
              Get in touch
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
