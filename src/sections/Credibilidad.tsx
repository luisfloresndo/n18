import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Logo } from '@/components/Logo'

const STATS = [
  { value: 'No. 18', label: 'Notaría Pública' },
  { value: '1.er', label: 'Distrito Registral · Monterrey' },
  { value: 'Desde 2019', label: 'Notario Público Titular' },
]

const COLEGIOS = [
  'Colegio de Notarios Públicos del Estado de Nuevo León',
  'Colegio Nacional del Notariado Mexicano',
]

export function Credibilidad() {
  return (
    <section id="notario" className="relative bg-charcoal/15 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Franja de datos reales */}
        <div className="grid gap-px overflow-hidden rounded-sm border border-gold-400/15 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <BlurFade key={s.label} inView delay={0.1 * i} className="bg-ink/40 px-8 py-10 text-center">
              <p className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-gold-400">
                {s.value}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-gold-600">
                {s.label}
              </p>
            </BlurFade>
          ))}
        </div>

        {/* Tarjeta del notario titular con borde animado (BorderBeam · 21st.dev) */}
        <BlurFade inView delay={0.2}>
          <div className="relative mt-8 overflow-hidden rounded-md border border-gold-400/20 bg-ink/60 p-10 md:p-14">
            <BorderBeam
              size={220}
              duration={14}
              colorFrom="#C9A84C"
              colorTo="#6B5420"
              borderWidth={1.5}
            />
            <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
              <Logo monogram className="h-28 w-auto opacity-90" />
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.4em] text-gold-600">
                  El Notario Titular
                </p>
                <h3 className="font-display text-3xl font-normal text-gold-200">
                  Salvador Martínez Martínez
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-[1.9] text-cream/55">
                  Licenciado en Derecho por la Universidad de Monterrey (2001) y
                  Maestro en Administración con especialidad en Recursos Humanos
                  (2007). Tras ejercer como Asesor Jurídico y Notario Público
                  Suplente en la Notaría Pública No. 23, obtuvo el 4 de junio de
                  2019 la patente de Notario Público Titular de la Notaría
                  Pública No. 18, con demarcación en el Primer Distrito Registral
                  de Monterrey, Nuevo León.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {COLEGIOS.map((c) => (
                    <span
                      key={c}
                      className="rounded-sm border border-gold-400/25 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-gold-400/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
