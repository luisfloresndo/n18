import { BlurFade } from '@/components/ui/blur-fade'

export function QuienesSomos() {
  return (
    <section
      id="nosotros"
      className="section-light relative overflow-hidden px-6 py-28 lg:px-20 lg:py-40"
      style={{
        backgroundImage: 'url(/images/pergamino-claro.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        {/* Texto */}
        <div>
          <BlurFade inView>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-gold-800">
              <span className="mr-3 font-display not-italic">II</span> Quiénes Somos
            </p>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <h2 className="max-w-xl font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.08] text-gold-900">
              Certeza y seguridad a través de un servicio{' '}
              <em className="italic text-gold-600">profesional</em> y la
              excelencia jurídica.
            </h2>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="mt-8 max-w-lg text-sm leading-[1.95] text-charcoal/70">
              Ofrecemos con prontitud servicios de calidad y honestidad, además
              de calidez en el trato, de la mano de un equipo de trabajo con
              experiencia y preparación para orientarle.
            </p>
          </BlurFade>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <BlurFade inView delay={0.3}>
              <div className="border-t border-gold-800/25 pt-5">
                <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-800">
                  Misión
                </h3>
                <p className="text-sm leading-[1.85] text-charcoal/65">
                  Proporcionar la certeza y seguridad jurídica que buscan
                  nuestros clientes en sus necesidades personales y patrimonio.
                </p>
              </div>
            </BlurFade>
            <BlurFade inView delay={0.4}>
              <div className="border-t border-gold-800/25 pt-5">
                <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-800">
                  Visión
                </h3>
                <p className="text-sm leading-[1.85] text-charcoal/65">
                  Ser la mejor opción notarial en términos de servicio, atención
                  y profesionalismo para nuestros clientes.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Imagen 4:5 enmarcada */}
        <BlurFade inView delay={0.2}>
          <figure className="relative">
            <div className="overflow-hidden rounded-sm border border-gold-800/20 shadow-[0_30px_80px_rgba(61,47,14,0.25)]">
              <img
                src="/images/nosotros.webp"
                alt="Códigos legales encuadernados y balanza de la justicia"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-4 -left-4 bg-ink px-5 py-3 text-[9px] uppercase tracking-[0.3em] text-gold-400">
              Tradición jurídica
            </figcaption>
          </figure>
        </BlurFade>
      </div>
    </section>
  )
}
