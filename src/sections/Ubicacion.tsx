import { MapPin, Clock, Phone } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'
import { CONTACT } from '@/data/services'

export function Ubicacion() {
  return (
    <section id="ubicacion" className="relative bg-ink">
      {/* Banda de imagen Monterrey con título superpuesto */}
      <div className="img-vignette relative h-[42vh] min-h-[320px] overflow-hidden">
        <img
          src="/images/monterrey.webp"
          alt="Arquitectura institucional de Monterrey con el Cerro de la Silla"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:px-20">
            <BlurFade inView>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.45em] text-gold-400">
                <span className="mr-3 font-display">VI</span> Ubicación
              </p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.02] text-gold-100">
                Estamos para servirle en{' '}
                <em className="italic text-gold-400">Monterrey.</em>
              </h2>
            </BlurFade>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-20">
        <BlurFade inView className="flex flex-col justify-center">
          <ul className="space-y-7">
            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <div>
                <p className="text-sm text-cream/85">{CONTACT.city}</p>
                <p className="text-xs text-cream/45">Primer Distrito Registral · Notaría Pública No. 18</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <div className="text-sm text-cream/85">
                {CONTACT.phones.map((p) => (
                  <a key={p} href={`tel:+52${p.replace(/-/g, '')}`} className="block transition-colors hover:text-gold-400">
                    {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <p className="text-sm text-cream/85">Lunes a viernes · horario de oficina</p>
            </li>
          </ul>
        </BlurFade>

        <BlurFade inView delay={0.15}>
          <div className="overflow-hidden rounded-md border border-gold-400/20">
            <iframe
              title="Ubicación Notaría Pública No. 18"
              src={CONTACT.mapsEmbed}
              width="100%"
              height="420"
              style={{ border: 0, filter: 'grayscale(0.45) contrast(1.05) brightness(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
