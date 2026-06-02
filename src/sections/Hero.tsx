import { motion } from 'motion/react'
import { LampContainer } from '@/components/ui/lamp'
import { TextRotate } from '@/components/ui/text-rotate'

const SERVICES = ['escrituras.', 'poderes.', 'testamentos.', 'fideicomisos.']

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <LampContainer className="bg-ink">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: 'easeInOut' }}
          className="flex flex-col items-center text-center"
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.5em] text-gold-400">
            Fe Pública · Monterrey, N.L.
          </p>

          <h1 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-light leading-[1.05] text-gold-200">
            Certeza jurídica
            <br />
            para sus{' '}
            <span className="inline-flex">
              <TextRotate
                texts={SERVICES}
                mainClassName="text-gold-400 italic justify-center"
                rotationInterval={2200}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-[1.9] text-cream/55 md:text-base">
            Formalizamos los actos jurídicos que requieren de fe pública con la
            seguridad, el rigor y la calidez que merece su patrimonio.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#servicios"
              className="rounded-sm border border-gold-400 px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-400 transition-colors duration-300 hover:bg-gold-400 hover:text-ink"
            >
              Ver Servicios
            </a>
            <a
              href="#contacto"
              className="rounded-sm border border-gold-400 bg-gold-400 px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-gold-200 hover:bg-gold-200"
            >
              Agendar Cita
            </a>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  )
}
