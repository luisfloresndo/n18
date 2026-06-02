import { motion } from 'motion/react'
import { Logo } from './Logo'

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-gold-400/15 bg-ink/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#inicio" aria-label="Notaría No. 18 — inicio">
          <Logo className="h-9 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
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
          className="rounded-sm border border-gold-400 px-5 py-2.5 text-[9px] font-medium uppercase tracking-[0.25em] text-gold-400 transition-colors duration-300 hover:bg-gold-400 hover:text-ink"
        >
          Agendar Cita
        </a>
      </nav>
    </motion.header>
  )
}
