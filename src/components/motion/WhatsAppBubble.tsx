import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { WHATSAPP_URL } from '@/data/services'

/**
 * Burbuja de WhatsApp (funcionamiento estilo Tornex):
 * píldora con el glifo real de WhatsApp que se expande al hover mostrando la
 * etiqueta, y late por tandas (6s ondas / 14s descanso). Se detiene al pasar
 * el cursor o con la pestaña oculta. En oro, no en verde (respeta la paleta).
 */
export function WhatsAppBubble({ label = 'Escríbenos' }: { label?: string }) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [pulsing, setPulsing] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 900)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timer = 0
    const on = () => {
      if (document.hidden) { timer = window.setTimeout(on, 14000); return }
      setPulsing(true)
      timer = window.setTimeout(() => {
        setPulsing(false)
        timer = window.setTimeout(on, 14000)
      }, 6000)
    }
    on()
    const onHide = () => { if (document.hidden) setPulsing(false) }
    document.addEventListener('visibilitychange', onHide)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('visibilitychange', onHide)
    }
  }, [mounted])

  const animar = pulsing && !reduce

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 12 }}
      animate={mounted ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 12 }}
      transition={reduce ? { duration: 0 } : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-[65] sm:bottom-8 sm:right-8"
    >
      {animar && (
        <>
          <span aria-hidden className="n18-ping absolute inset-0 -z-10 rounded-full bg-gold-400 group-hover:[animation-play-state:paused]" />
          <span aria-hidden className="n18-ping n18-ping-2 absolute inset-0 -z-10 rounded-full bg-gold-400 group-hover:[animation-play-state:paused]" />
        </>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="relative flex min-h-14 items-center gap-0 overflow-hidden rounded-full bg-gold-400 px-4 text-ink shadow-[0_6px_28px_rgba(201,168,76,0.35)] transition-[gap,padding,background-color,transform] duration-300 hover:scale-[1.06] hover:gap-2.5 hover:bg-gold-200 hover:pr-6"
      >
        <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 shrink-0 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="max-w-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] opacity-0 transition-[max-width,opacity] duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
          {label}
        </span>
      </a>
    </motion.div>
  )
}
