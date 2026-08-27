import { motion, useScroll, useSpring } from 'motion/react'

/** Barra de progreso dorada fija en la parte superior. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-gold-600 via-gold-400 to-gold-200" />
  )
}
