import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const statement = 'Fe pública en cada acto. Certeza que se entrega a tiempo. Un aliado, no un trámite.'
const acentos = new Set(['a', 'tiempo.', 'aliado,'])

/** Statement full-screen scrollytelling: pineado ~260vh, palabra por palabra. */
export function StatementScrolly() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const words = statement.split(' ')
  return (
    <section ref={ref} id="manifiesto" className="relative left-1/2 h-[260vh] w-screen -translate-x-1/2 bg-ink">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <img src="/images/proceso-texture.webp" alt="" className="h-full w-full object-cover opacity-[0.08] mix-blend-luminosity" />
        </div>
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(201,168,76,0.16), transparent 72%)' }} />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-gold-600">Manifiesto</span>
          </div>
          <p className="font-display text-[clamp(2.5rem,7vw,7rem)] font-light leading-[1.0] text-gold-100/20">
            {words.map((word, i) => {
              const start = 0.05 + i * (0.75 / words.length)
              const end = start + 0.12
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
              const acento = acentos.has(word)
              return (
                <motion.span key={`${word}-${i}`} style={{ opacity }} className={`mr-[0.28em] inline-block ${acento ? 'italic text-gold-400' : 'text-gold-100'}`}>
                  {word}
                </motion.span>
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
