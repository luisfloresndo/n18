import { useEffect } from 'react'
import Lenis from 'lenis'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SideRail } from '@/components/SideRail'
import { GoldCursor } from '@/components/GoldCursor'
import { ScrollProgress } from '@/components/motion/ScrollProgress'
import { WhatsAppBubble } from '@/components/motion/WhatsAppBubble'
import { Marquee } from '@/components/motion/Marquee'
import { PhotoDivider } from '@/components/motion/PhotoDivider'
import { Hero } from '@/sections/Hero'
import { QuienesSomos } from '@/sections/QuienesSomos'
import { Credibilidad } from '@/sections/Credibilidad'
import { StatementScrolly } from '@/sections/StatementScrolly'
import { Servicios } from '@/sections/Servicios'
import { ProcesoPineado } from '@/sections/ProcesoPineado'
import { Ubicacion } from '@/sections/Ubicacion'
import { Contacto } from '@/sections/Contacto'

const MARQUEE = [
  'Escrituras', 'Poderes', 'Testamentos', 'Fideicomisos', 'Compraventas',
  'Donaciones', 'Fe de Hechos', 'Sociedades', 'Hipotecas', 'Cotejos',
]

function App() {
  // Smooth scroll (Lenis) — respeta prefers-reduced-motion
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="grain relative min-h-screen">
      <ScrollProgress />
      <GoldCursor />
      <SideRail />
      <WhatsAppBubble />
      <Nav />
      <main>
        <Hero />
        <QuienesSomos />
        <Marquee items={MARQUEE} />
        <Credibilidad />
        <PhotoDivider src="/images/seal-macro.webp" alt="Sello notarial dorado" caption="Fe pública · Notaría No. 18" height="62vh" />
        <StatementScrolly />
        <Servicios />
        <ProcesoPineado />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
