import { MapPin, Clock, Phone } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'
import { CONTACT } from '@/data/services'

export function Ubicacion() {
  return (
    <section id="ubicacion" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <BlurFade inView>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold-600">
            Ubicación
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight text-gold-200">
            Estamos para servirle en Monterrey.
          </h2>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <div>
                <p className="text-sm text-cream/80">{CONTACT.city}</p>
                <p className="text-xs text-cream/45">
                  Primer Distrito Registral · Notaría Pública No. 18
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <div className="text-sm text-cream/80">
                {CONTACT.phones.map((p) => (
                  <a key={p} href={`tel:+52${p.replace(/-/g, '')}`} className="block transition-colors hover:text-gold-400">
                    {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <p className="text-sm text-cream/80">
                Lunes a viernes · horario de oficina
              </p>
            </li>
          </ul>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <div className="overflow-hidden rounded-md border border-gold-400/20">
            <iframe
              title="Ubicación Notaría Pública No. 18"
              src={CONTACT.mapsEmbed}
              width="100%"
              height="420"
              style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
