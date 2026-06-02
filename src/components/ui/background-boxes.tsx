import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Grid decorativo (basado en aceternity/background-boxes).
 * Optimizado: el original dibuja 150×100 = 15.000 motion.div con hover de Framer
 * por celda. Aquí: grid liviano de <div> normales con hover por CSS y sin SVGs.
 * ~95% menos nodos y sin suscripciones de animación.
 */
export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(34).fill(1)
  const cols = new Array(24).fill(1)

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        'absolute left-1/4 -top-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4',
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div key={`row${i}`} className="relative h-8 w-16 border-l border-gold-400/10">
          {cols.map((_, j) => (
            <div
              key={`col${j}`}
              className="relative h-8 w-16 border-r border-t border-gold-400/10 transition-colors duration-150 hover:bg-gold-400/20"
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export const Boxes = React.memo(BoxesCore)
