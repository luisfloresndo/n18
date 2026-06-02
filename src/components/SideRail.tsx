import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'inicio', num: 'I' },
  { id: 'nosotros', num: 'II' },
  { id: 'notario', num: 'III' },
  { id: 'servicios', num: 'IV' },
  { id: 'proceso', num: 'V' },
  { id: 'ubicacion', num: 'VI' },
  { id: 'contacto', num: 'VII' },
]

/** Riel lateral editorial fijo: numerales romanos + marca vertical (solo desktop) */
export function SideRail() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-16 flex-col items-center justify-between py-8 lg:flex">
      <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-gold-400/40 [writing-mode:vertical-rl]">
        Fe Pública
      </span>

      <ul className="pointer-events-auto flex flex-col items-center gap-4">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-label={`Sección ${s.num}`}
              className={`block font-display text-xs transition-all duration-300 ${
                active === s.id
                  ? 'scale-125 text-gold-400'
                  : 'text-gold-400/25 hover:text-gold-400/60'
              }`}
            >
              {s.num}
            </a>
          </li>
        ))}
      </ul>

      <span className="font-display text-[11px] uppercase tracking-[0.4em] text-gold-400/50 [writing-mode:vertical-rl]">
        Notaría Nº18
      </span>
    </div>
  )
}
