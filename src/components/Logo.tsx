type LogoProps = {
  className?: string
  /** 'oro' (sobre tinta) · 'negro' (sobre pergamino) · 'blanco' (sobre imagen) */
  variant?: 'oro' | 'negro' | 'blanco'
}

const SRC: Record<NonNullable<LogoProps['variant']>, string> = {
  oro: '/logo/logo-oro.svg',
  negro: '/logo/logo-negro.svg',
  blanco: '/logo/logo-blanco.svg',
}

/** Logo oficial Notaría No. 18 (vector entregado por el cliente) */
export function Logo({ className, variant = 'oro' }: LogoProps) {
  return (
    <img
      src={SRC[variant]}
      alt="Notaría Pública No. 18"
      className={className}
      draggable={false}
    />
  )
}
