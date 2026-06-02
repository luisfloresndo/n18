import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Boxes } from '@/components/ui/background-boxes'
import { CONTACT } from '@/data/services'

export function Ubicacion() {
  return (
    <section id="ubicacion" className="relative bg-ink">
      {/* Banda de imagen Monterrey con título iluminado */}
      <div className="img-vignette relative h-[42vh] min-h-[320px] overflow-hidden">
        <img
          src="/images/monterrey.webp"
          alt="Arquitectura institucional de Monterrey con el Cerro de la Silla"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 lg:px-20">
            <BlurFade inView>
              <p
                className="mb-4 text-[10px] font-medium uppercase tracking-[0.45em] text-gold-200"
                style={{ textShadow: '0 1px 12px rgba(0,0,0,0.85)' }}
              >
                <span className="mr-3 font-display">VI</span> Ubicación
              </p>
              <h2
                className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-normal leading-[1.02] text-gold-50"
                style={{
                  textShadow:
                    '0 2px 24px rgba(0,0,0,0.9), 0 0 50px rgba(201,168,76,0.45)',
                }}
              >
                Estamos para servirle en{' '}
                <em className="italic text-gold-200">Monterrey.</em>
              </h2>
            </BlurFade>
          </div>
        </div>
      </div>

      {/* Info + mapa sobre grid animado (background-boxes · 21st.dev) */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-20 bg-ink [mask-image:radial-gradient(ellipse_at_center,transparent_5%,#000_75%)]" />
        <Boxes />

        <div className="relative z-30 mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-20">
          <BlurFade inView className="flex flex-col justify-center gap-4">
            {[
              {
                icon: MapPin,
                main: CONTACT.city,
                sub: 'Primer Distrito Registral · Notaría Pública No. 18',
              },
              {
                icon: Phone,
                main: CONTACT.phones.join('  ·  '),
                sub: 'Atención telefónica directa',
                links: CONTACT.phones,
              },
              {
                icon: Clock,
                main: 'Lunes a viernes',
                sub: 'Horario de oficina',
              },
            ].map((item, i) => (
              <BlurFade key={i} inView delay={0.1 * i}>
                <div className="group flex items-start gap-4 rounded-sm border border-gold-400/15 bg-ink/60 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-gold-400/40">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    {item.links ? (
                      <div className="flex flex-col gap-0.5">
                        {item.links.map((p) => (
                          <a
                            key={p}
                            href={`tel:+52${p.replace(/-/g, '')}`}
                            className="text-base text-cream/90 transition-colors hover:text-gold-400"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-base text-cream/90">{item.main}</p>
                    )}
                    <p className="mt-1 text-xs text-cream/50">{item.sub}</p>
                  </div>
                </div>
              </BlurFade>
            ))}

            <BlurFade inView delay={0.35}>
              <a
                href={CONTACT.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-400 transition-colors hover:text-gold-200"
              >
                Cómo llegar <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </BlurFade>
          </BlurFade>

          {/* Mapa enmarcado premium */}
          <BlurFade inView delay={0.15}>
            <figure className="relative rounded-lg border border-gold-400/30 bg-ink p-2 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
              <BorderBeam size={320} duration={16} colorFrom="#C9A84C" colorTo="#6B5420" borderWidth={1.5} />
              {/* Esquinas ornamentales */}
              {['left-2 top-2 border-l border-t', 'right-2 top-2 border-r border-t', 'left-2 bottom-2 border-l border-b', 'right-2 bottom-2 border-r border-b'].map((c) => (
                <span key={c} className={`absolute z-10 h-5 w-5 border-gold-400/70 ${c}`} />
              ))}
              <div className="overflow-hidden rounded-md">
                <iframe
                  title="Ubicación Notaría Pública No. 18"
                  src={CONTACT.mapsEmbed}
                  width="100%"
                  height="440"
                  style={{ border: 0, filter: 'grayscale(0.35) contrast(1.05) brightness(0.92)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </figure>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
