import { motion } from 'motion/react'
import { TextRotate } from '@/components/ui/text-rotate'
import { Logo } from '@/components/Logo'

const SERVICES = ['escrituras.', 'poderes.', 'testamentos.', 'fideicomisos.']

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      {/* Imagen full-bleed con viñeta (negativo a la izquierda para el texto) */}
      <div className="img-vignette absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
      </div>

      {/* Haz de luz dorada superior (eco del lamp) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh]"
        style={{
          background:
            'radial-gradient(ellipse 50% 70% at 50% -10%, rgba(201,168,76,0.22) 0%, transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[40rem] max-w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Logo variant="oro" className="mb-10 h-14 w-auto md:h-16" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-7 text-[11px] font-medium uppercase tracking-[0.5em] text-gold-400"
          >
            Fe Pública · Monterrey, N.L.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.98] text-gold-100"
          >
            Certeza jurídica
            <br />
            para sus{' '}
            <span className="inline-flex align-baseline">
              <TextRotate
                texts={SERVICES}
                mainClassName="text-gold-400 italic"
                rotationInterval={2200}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-2"
                transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-lg text-sm leading-[1.9] text-cream/70 md:text-base"
          >
            Formalizamos los actos jurídicos que requieren de fe pública con la
            seguridad, el rigor y la calidez que merece su patrimonio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-11 flex flex-wrap items-center gap-5"
          >
            <a
              href="#servicios"
              className="rounded-sm border border-gold-400 bg-gold-400 px-9 py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-gold-200 hover:bg-gold-200"
            >
              Ver Servicios
            </a>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-200"
            >
              <span className="h-px w-8 bg-gold-400 transition-all duration-300 group-hover:w-12" />
              Agendar Cita
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] text-gold-400/50"
      >
        Desliza
      </motion.div>
    </section>
  )
}
