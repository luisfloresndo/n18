import { Logo } from './Logo'

export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative border-t border-gold-400/15 px-6 py-16 lg:px-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo className="mb-6 h-10 w-auto" />
          <p className="max-w-xs text-xs leading-relaxed text-cream/40">
            Notaría Pública No. 18 · Monterrey, Nuevo León.
            <br />
            Fe pública · Escritura pública · Certeza jurídica.
          </p>
        </div>

        <div className="text-xs leading-loose text-gold-600">
          {/* TODO: confirmar datos reales con el cliente antes de publicar */}
          <p>Av. Constitución 1800, Col. Centro</p>
          <p>Monterrey, N.L., C.P. 64000</p>
          <p>Tel: +52 (81) 8342-1800</p>
          <p>contacto@notaria18.mx</p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-gold-400/10 pt-6">
        <p className="text-[9px] uppercase tracking-[0.3em] text-gold-400/30">
          © {new Date().getFullYear()} Notaría No. 18 · Monterrey
        </p>
      </div>
    </footer>
  )
}
