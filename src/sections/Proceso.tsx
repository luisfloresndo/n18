import { BlurFade } from '@/components/ui/blur-fade'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

const STEPS = [
  { n: '01', title: 'Contáctenos', desc: 'Escríbanos por WhatsApp o llámenos. Le orientamos sobre el trámite que necesita.' },
  { n: '02', title: 'Reúna requisitos', desc: 'Descargue de este sitio los formatos y requisitos de su operación.' },
  { n: '03', title: 'Agende su cita', desc: 'Coordinamos una cita para revisar su caso y resolver cualquier duda.' },
  { n: '04', title: 'Firma con fe pública', desc: 'Formalizamos el instrumento con la certeza y seguridad que merece.' },
]

export function Proceso() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-ink"
      style={{
        backgroundImage: 'url(/images/proceso-texture.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay para legibilidad sobre la textura */}
      <div aria-hidden className="absolute inset-0 bg-ink/85" />

      <div className="relative">
        {/* Reveal cinemático de la firma (ContainerScroll · 21st.dev) */}
        <ContainerScroll
          titleComponent={
            <div className="mb-2">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.45em] text-gold-600">
                <span className="mr-3 font-display text-gold-400">V</span> Cómo trabajamos
              </p>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.02] text-gold-100">
                Un proceso claro, <em className="italic text-gold-400">de principio a fin.</em>
              </h2>
            </div>
          }
        >
          <img
            src="/images/firma-macro.webp"
            alt="Pluma fuente firmando un documento con tinta dorada"
            className="h-full w-full rounded-2xl object-cover"
            draggable={false}
          />
        </ContainerScroll>

        {/* Pasos */}
        <div className="mx-auto max-w-[1440px] px-6 pb-32 lg:px-12 xl:px-16">
          <div className="grid gap-px overflow-hidden rounded-sm border border-gold-400/15 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <BlurFade
                key={s.n}
                inView
                delay={0.1 * i}
                className="group bg-ink/70 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-charcoal/40"
              >
                <p className="font-display text-5xl font-light text-gold-400/40 transition-colors duration-300 group-hover:text-gold-400">
                  {s.n}
                </p>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-cream/65">{s.desc}</p>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
