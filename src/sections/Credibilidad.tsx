import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'

const STATS = [
  { value: 'No. 18', label: 'Notaría Pública' },
  { value: '1.er', label: 'Distrito Registral' },
  { value: '2019', label: 'Notario Titular desde' },
]

const COLEGIOS = [
  'Colegio de Notarios Públicos del Estado de Nuevo León',
  'Colegio Nacional del Notariado Mexicano',
]

export function Credibilidad() {
  return (
    <section
      id="notario"
      className="relative overflow-hidden bg-ink px-6 py-28 lg:px-12 xl:px-16 lg:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-96" style={{background:"radial-gradient(ellipse 60% 100% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)"}} />
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Sello con borde animado */}
        <BlurFade inView>
          <figure className="relative mx-auto max-w-md overflow-hidden rounded-md">
            <img
              src="/images/seal-macro.webp"
              alt="Sello de cera dorado con escudo heráldico"
              className="aspect-square w-full object-cover"
            />
            <BorderBeam size={260} duration={12} colorFrom="#C9A84C" colorTo="#6B5420" borderWidth={2} />
          </figure>
        </BlurFade>

        {/* Bio del notario */}
        <div>
          <BlurFade inView delay={0.1}>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-gold-600">
              <span className="mr-3 font-display text-gold-400">III</span> El Notario Titular
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.02] text-gold-100">
              Salvador Martínez
              <br />
              <em className="italic text-gold-400">Martínez</em>
            </h2>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <p className="mt-7 max-w-2xl text-sm leading-[1.95] text-cream/75">
              Licenciado en Derecho por la Universidad de Monterrey (2001) y
              Maestro en Administración con especialidad en Recursos Humanos
              (2007). Tras ejercer como Asesor Jurídico y Notario Público
              Suplente en la Notaría Pública No. 23, obtuvo el 4 de junio de 2019
              la patente de Notario Público Titular de la Notaría Pública No. 18,
              con demarcación en el Primer Distrito Registral de Monterrey, Nuevo
              León.
            </p>
          </BlurFade>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-gold-400/15">
            {STATS.map((s, i) => (
              <BlurFade key={s.label} inView delay={0.3 + i * 0.08} className="bg-charcoal/20 px-5 py-7 text-center">
                <p className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-light text-gold-400">
                  {s.value}
                </p>
                <p className="mt-2 text-[9px] uppercase leading-tight tracking-[0.2em] text-gold-600">
                  {s.label}
                </p>
              </BlurFade>
            ))}
          </div>

          <BlurFade inView delay={0.5}>
            <div className="mt-7 flex flex-wrap gap-3">
              {COLEGIOS.map((c) => (
                <span
                  key={c}
                  className="rounded-sm border border-gold-400/25 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-gold-400/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
