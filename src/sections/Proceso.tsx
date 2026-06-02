import { BlurFade } from '@/components/ui/blur-fade'

const STEPS = [
  {
    n: '01',
    title: 'Contáctenos',
    desc: 'Escríbanos por WhatsApp o llámenos. Le orientamos sobre el trámite que necesita.',
  },
  {
    n: '02',
    title: 'Reúna requisitos',
    desc: 'Descargue de este sitio los formatos y requisitos de su operación y prepare su documentación.',
  },
  {
    n: '03',
    title: 'Agende su cita',
    desc: 'Coordinamos una cita para revisar su caso y resolver cualquier duda antes de la firma.',
  },
  {
    n: '04',
    title: 'Firma con fe pública',
    desc: 'Formalizamos el instrumento notarial con la certeza y seguridad jurídica que merece.',
  },
]

export function Proceso() {
  return (
    <section id="proceso" className="relative bg-charcoal/15 px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <BlurFade inView>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold-600">
            Cómo trabajamos
          </p>
          <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-tight text-gold-200">
            Un proceso claro, de principio a fin.
          </h2>
        </BlurFade>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-gold-400/15 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <BlurFade
              key={s.n}
              inView
              delay={0.1 * i}
              className="group bg-ink/40 p-8 transition-colors duration-300 hover:bg-ink/70"
            >
              <p className="font-display text-5xl font-light text-gold-400/40 transition-colors duration-300 group-hover:text-gold-400">
                {s.n}
              </p>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-cream/50">{s.desc}</p>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
