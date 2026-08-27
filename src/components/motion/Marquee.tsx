import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'

/** Cinta horizontal auto-scroll + boost al scroll. Full-bleed. */
export function Marquee({ items, className = '' }: { items: string[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scrollX = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const smooth = useSpring(scrollX, { stiffness: 90, damping: 30, mass: 0.6 })
  const loop = [...items, ...items, ...items]
  return (
    <div ref={ref} className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-gold-400/15 bg-charcoal/20 py-6 ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <motion.div className="flex whitespace-nowrap" style={{ x: smooth }}>
        <motion.div className="flex shrink-0 items-center gap-12" animate={{ x: ['0%', '-33.333%'] }} transition={{ duration: 40, ease: 'linear', repeat: Infinity }}>
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-12 font-display text-2xl uppercase tracking-[0.05em] text-gold-100/85 sm:text-3xl">
              {item}<span className="text-gold-400">◆</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
