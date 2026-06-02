import { BlurFade } from '@/components/ui/blur-fade'
import { TextRevealByWord } from '@/components/ui/text-reveal'

export function QuienesSomos() {
  return (
    <section id="nosotros" className="relative px-6 lg:px-10">
      {/* Declaración con reveal palabra-por-palabra al scroll (21st.dev) */}
      <TextRevealByWord
        text="Una Notaría enfocada en brindar certeza y seguridad a través de un servicio profesional y la excelencia jurídica."
        className="mx-auto max-w-5xl"
      />

      <div className="mx-auto max-w-6xl pb-28">
        <BlurFade inView delay={0.1}>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold-600">
            Quiénes Somos
          </p>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <p className="max-w-3xl font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-light leading-snug text-gold-200">
            Servicios de calidad y honestidad, con calidez en el trato, de la
            mano de un equipo con experiencia y preparación para orientarle.
          </p>
        </BlurFade>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-gold-400/15 md:grid-cols-2">
          <BlurFade inView delay={0.3} className="bg-charcoal/20 p-10">
            <h3 className="mb-4 font-display text-2xl font-normal text-gold-400">
              Misión
            </h3>
            <p className="text-sm leading-[1.9] text-cream/55">
              Proporcionar la certeza y seguridad jurídica que buscan nuestros
              clientes en sus necesidades personales y patrimonio, siempre
              prestando una atención y servicio de excelencia.
            </p>
          </BlurFade>

          <BlurFade inView delay={0.4} className="bg-charcoal/20 p-10">
            <h3 className="mb-4 font-display text-2xl font-normal text-gold-400">
              Visión
            </h3>
            <p className="text-sm leading-[1.9] text-cream/55">
              Ser la mejor opción notarial en términos de servicio, atención y
              profesionalismo para nuestros clientes.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
