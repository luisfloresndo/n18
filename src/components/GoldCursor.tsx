import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'motion/react'

/**
 * Cursor dorado custom (audacia 10).
 * Robusto: sobrevive cambio de pestaña y pointerleave (regla ATLAS).
 * Solo en punteros finos (no touch) y si no hay prefers-reduced-motion.
 */
export function GoldCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  // Posición 1:1 con el puntero (sin spring) → velocidad normal, sin lag
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-none')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const el = e.target as HTMLElement
      setHovering(!!el.closest('a, button, [data-cursor="link"], input, textarea, [role="button"]'))
    }
    const leave = () => setVisible(false)
    const onVis = () => document.hidden && setVisible(false)

    window.addEventListener('pointermove', move)
    document.addEventListener('pointerleave', leave)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
      document.removeEventListener('visibilitychange', onVis)
      document.documentElement.classList.remove('cursor-none')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x, y }}
    >
      <motion.div
        className="rounded-full border border-gold-400"
        animate={{
          width: hovering ? 48 : 18,
          height: hovering ? 48 : 18,
          opacity: visible ? 1 : 0,
          x: hovering ? -24 : -9,
          y: hovering ? -24 : -9,
          backgroundColor: hovering ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0)',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 350 }}
      />
    </motion.div>
  )
}
