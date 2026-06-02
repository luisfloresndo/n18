import { Logo } from './Logo'
import { CONTACT } from '@/data/services'

export function Footer() {
  return (
    <footer className="relative border-t border-gold-400/15 px-6 py-16 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo className="mb-6 h-10 w-auto" />
          <p className="max-w-xs text-xs leading-relaxed text-cream/40">
            Notaría Pública No. 18 · {CONTACT.city}.
            <br />
            Fe pública · Escritura pública · Certeza jurídica.
          </p>
        </div>

        <div className="text-xs leading-loose text-gold-600">
          <p>Notario Titular: Salvador Martínez Martínez</p>
          {CONTACT.phones.map((p) => (
            <p key={p}>Tel: {p}</p>
          ))}
          <p>WhatsApp: {CONTACT.whatsappDisplay}</p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-gold-400/10 pt-6">
        <p className="text-[9px] uppercase tracking-[0.3em] text-gold-400/30">
          © {new Date().getFullYear()} Notaría Pública No. 18 · {CONTACT.city} ·
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
