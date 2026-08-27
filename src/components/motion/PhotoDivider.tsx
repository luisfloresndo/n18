import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

/** Divisor fotográfico full-bleed (100vw) con zoom parallax al scroll. */
export function PhotoDivider({ src, alt = '', caption, height = '68vh' }: { src: string; alt?: string; caption?: string; height?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22])
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  return (
    <section ref={ref} className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-ink" style={{ height }}>
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/60" />
      {caption && (
        <div className="absolute bottom-10 left-6 right-6 sm:left-12 sm:right-12 lg:bottom-14 lg:left-20 lg:right-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold-200">{caption}</span>
          </div>
        </div>
      )}
    </section>
  )
}
