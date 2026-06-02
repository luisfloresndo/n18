import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'El Notario', href: '#notario' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? 'border-b border-gold-400/15 bg-ink/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
          <a href="#inicio" aria-label="Notaría No. 18 — inicio">
            <Logo variant="oro" className="h-8 w-auto lg:h-9" />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.slice(1).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-400/60 transition-colors duration-300 hover:text-gold-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="hidden rounded-sm border border-gold-400 px-5 py-2.5 text-[9px] font-medium uppercase tracking-[0.25em] text-gold-400 transition-colors duration-300 hover:bg-gold-400 hover:text-ink lg:inline-block"
          >
            Agendar Cita
          </a>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="text-gold-400 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      {/* Overlay menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <Logo variant="oro" className="h-8 w-auto" />
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú" className="text-gold-400">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-7">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-display text-3xl font-light text-gold-100"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
