import { useEffect } from 'react'
import Lenis from 'lenis'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'

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
      </main>
      <Footer />
    </div>
  )
}

export default App
