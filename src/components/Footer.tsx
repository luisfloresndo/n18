import { MessageCircle, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { Boxes } from '@/components/ui/background-boxes'
import { BorderBeam } from '@/components/ui/border-beam'
import { CONTACT, WHATSAPP_URL } from '@/data/services'

const NAV = [
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'El Notario', href: '#notario' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-400/20 bg-ink">
      <BorderBeam size={400} duration={18} colorFrom="#C9A84C" colorTo="#6B5420" borderWidth={1} />

      {/* Grid animado de fondo (background-boxes · 21st.dev) */}
      <div className="absolute inset-0 z-20 bg-ink [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#000_80%)]" />
      <Boxes />

      <div className="relative z-30 mx-auto max-w-7xl px-6 py-20 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Marca */}
          <div>
            <Logo variant="oro" className="mb-7 h-16 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-cream/65">
              Notaría Pública No. 18 · {CONTACT.city}.
              <br />
              Fe pública · Escritura pública · Certeza jurídica.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-sm border border-gold-400/40 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-400 transition-colors duration-300 hover:bg-gold-400 hover:text-ink"
            >
              <MessageCircle className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Navegación */}
          <nav>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-600">
              Navegación
            </h4>
            <ul className="space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-cream/70 transition-colors duration-200 hover:text-gold-400"
                  >
                    <span className="h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-600">
              Contacto
            </h4>
            <p className="mb-4 text-sm text-cream/70">
              Notario Titular
              <br />
              <span className="text-cream/90">Salvador Martínez Martínez</span>
            </p>
            <div className="space-y-2">
              {CONTACT.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:+52${p.replace(/-/g, '')}`}
                  className="flex items-center gap-2.5 text-sm text-cream/70 transition-colors hover:text-gold-400"
                >
                  <Phone className="h-3.5 w-3.5 text-gold-400" />
                  {p}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-cream/70 transition-colors hover:text-gold-400"
              >
                <MessageCircle className="h-3.5 w-3.5 text-gold-400" />
                {CONTACT.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-gold-400/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400/45">
            © {new Date().getFullYear()} Notaría Pública No. 18 · {CONTACT.city}
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400/45">
            Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
