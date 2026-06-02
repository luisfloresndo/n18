import { motion } from 'motion/react'

const SERVICES = ['Escrituras', 'Poderes', 'Testamentos', 'Fideicomisos']

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const line = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Filigrana heráldica de fondo — capa parallax de baja opacidad */}
      <FiligreeBackground />

      {/* Viñeta radial dorada */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={line}
            className="mb-8 text-[11px] font-medium uppercase tracking-[0.5em] text-gold-400"
          >
            Fe Pública · Monterrey, N.L.
          </motion.p>

          <motion.h1
            variants={line}
            className="font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[1.05] text-gold-200"
          >
            Su notaría de
            <br />
            confianza, con
            <br />
            <em className="italic text-gold-400">certeza jurídica.</em>
          </motion.h1>

          <motion.p
            variants={line}
            className="mt-8 max-w-xl text-sm leading-[1.9] text-cream/55 md:text-base"
          >
            Formalizamos los actos jurídicos que requieren de fe pública con la
            seguridad, el rigor y la calidez que merece su patrimonio.
          </motion.p>

          {/* Servicios rotativos */}
          <motion.div
            variants={line}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-gold-600"
          >
            {SERVICES.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold-800">·</span>}
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div variants={line} className="mt-12 flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="rounded-sm border border-gold-400 px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] text-gold-400 transition-colors duration-300 hover:bg-gold-400 hover:text-ink"
            >
              Ver Servicios
            </a>
            <a
              href="#contacto"
              className="rounded-sm border border-gold-400 bg-gold-400 px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:bg-gold-200 hover:border-gold-200"
            >
              Agendar Cita
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/** Líneas SVG animadas que leen como filigrana de documento notarial */
function FiligreeBackground() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <g opacity={0.07} stroke="#C9A84C" fill="none">
        <circle cx="1050" cy="420" r="280" strokeWidth="0.5" />
        <circle cx="1050" cy="420" r="320" strokeWidth="0.25" strokeDasharray="4 10" />
        <circle cx="1050" cy="420" r="240" strokeWidth="0.25" />
      </g>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={i}
          d={`M ${-100 + i * 40},${900} C ${300 + i * 60},${600 - i * 40} ${900 - i * 60},${500 + i * 30} ${1500},${200 + i * 50}`}
          stroke="#C9A84C"
          strokeWidth="0.5"
          fill="none"
          opacity={0.06}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: i * 0.2, ease: 'easeInOut' }}
        />
      ))}
      <text
        x="700"
        y="860"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="14"
        fill="#C9A84C"
        opacity={0.1}
        letterSpacing="12"
      >
        XVIII · NOTARÍA · NO. 18
      </text>
    </svg>
  )
}
