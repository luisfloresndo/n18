import { useEffect } from 'react'
import Lenis from 'lenis'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { QuienesSomos } from '@/sections/QuienesSomos'
import { Credibilidad } from '@/sections/Credibilidad'
import { Servicios } from '@/sections/Servicios'
import { Proceso } from '@/sections/Proceso'
import { Ubicacion } from '@/sections/Ubicacion'
import { Contacto } from '@/sections/Contacto'

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
      <Nav />
      <main>
        <Hero />
        <QuienesSomos />
        <Credibilidad />
        <Servicios />
        <Proceso />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
