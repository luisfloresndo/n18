import { MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'
import { WHATSAPP_URL } from '@/data/services'

/** Botón flotante de WhatsApp. */
export function WhatsAppBubble() {
  return (
    <motion.a
      href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[65] flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-ink shadow-[0_8px_30px_rgba(201,168,76,0.35)] lg:bottom-8 lg:right-8"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  )
}
