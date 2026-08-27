import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react'
import { MessageCircle, FileText, CalendarCheck, PenLine } from 'lucide-react'

const STEPS = [
  { icon: MessageCircle, titulo: 'Contáctenos', desc: 'Escríbanos por WhatsApp o llámenos. Le orientamos sobre el trámite que necesita.' },
  { icon: FileText, titulo: 'Reúna requisitos', desc: 'Descargue de este sitio los formatos y requisitos de su operación y prepare su documentación.' },
  { icon: CalendarCheck, titulo: 'Agende su cita', desc: 'Coordinamos una cita para revisar su caso y resolver cualquier duda antes de la firma.' },
  { icon: PenLine, titulo: 'Firma con fe pública', desc: 'Formalizamos el instrumento notarial con la certeza y seguridad que merece.' },
]

/** Proceso pineado: sticky viewport, escena por escena, contador gigante + línea que se dibuja. */
export function ProcesoPineado() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const total = STEPS.length
  const [idx, setIdx] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setIdx(Math.max(0, Math.min(total - 1, Math.floor(v * total))))
  })
  const lineHeight = useTransform(scrollYProgress, [0.03, 0.97], ['0%', '100%'])

  return (
    <section id="proceso" ref={ref} className="relative left-1/2 w-screen -translate-x-1/2 bg-ink" style={{ height: `${total * 100}vh` }}>
      <div className="sticky top-0 flex h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 45% 55% at 18% 35%, rgba(201,168,76,0.16), transparent 65%)' }} />
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 45% 55% at 85% 68%, rgba(201,168,76,0.10), transparent 65%)' }} />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-6 lg:flex-row lg:items-center lg:gap-24 lg:px-16">
          <div className="absolute left-6 top-8 flex items-center gap-3 lg:left-16 lg:top-14">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-gold-600">Proceso · {total} pasos</span>
          </div>

          <div className="relative flex shrink-0 items-center gap-8 pt-24 lg:pt-0">
            <div className="flex flex-col items-center gap-3">
              <span className="font-display text-xs text-gold-600">01</span>
              <div className="relative h-[260px] w-px bg-gold-400/15 sm:h-[360px] lg:h-[420px]">
                <motion.div style={{ height: lineHeight }} className="absolute inset-x-0 top-0 origin-top bg-gold-400" />
              </div>
              <span className="font-display text-xs text-gold-600">0{total}</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[clamp(6rem,14vw,12rem)] font-light text-gold-400">0{idx + 1}</span>
              <span className="mt-2 text-xs uppercase tracking-[0.2em] text-gold-600">de 0{total}</span>
            </div>
          </div>

          <div className="relative mt-12 min-h-[400px] flex-1 lg:mt-0">
            <AnimatePresence mode="wait">
              <Scene key={idx} idx={idx} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function Scene({ idx }: { idx: number }) {
  const step = STEPS[idx]
  const Icon = step.icon
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="max-w-xl">
      <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/20 bg-charcoal/40 text-gold-400">
        <Icon className="h-7 w-7" strokeWidth={1.4} />
      </div>
      <h3 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-none text-gold-100">{step.titulo}</h3>
      <p className="mt-6 text-lg leading-relaxed text-cream/70">{step.desc}</p>
      <p className="mt-8 text-xs uppercase tracking-[0.25em] text-gold-600">Paso 0{idx + 1} / 0{STEPS.length}</p>
    </motion.div>
  )
}
