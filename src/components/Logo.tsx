type LogoProps = {
  className?: string
  /** color del trazo; por defecto oro corporativo */
  stroke?: string
  /** muestra solo el escudo (para sellos / favicon) */
  monogram?: boolean
}

/** Escudo heráldico Notaría No. 18 — del manual de marca (Branding/) */
export function Logo({
  className,
  stroke = '#C9A84C',
  monogram = false,
}: LogoProps) {
  if (monogram) {
    return (
      <svg
        viewBox="0 0 100 120"
        className={className}
        role="img"
        aria-label="Notaría No. 18"
      >
        <g fill="none" stroke={stroke} strokeWidth={2.5}>
          <path d="M 8,8 L 92,8 L 92,68 Q 92,96 50,112 Q 8,96 8,68 Z" />
          <rect x="16" y="16" width="68" height="28" />
          <line x1="16" y1="44" x2="84" y2="44" />
          <line x1="16" y1="52" x2="84" y2="52" />
          <line x1="16" y1="65" x2="84" y2="65" />
          <line x1="16" y1="78" x2="77" y2="78" />
        </g>
        <text
          x="50"
          y="37"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
          fontSize="15"
          fontWeight="600"
          fill={stroke}
          letterSpacing="3"
        >
          XVIII
        </text>
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 480 120"
      className={className}
      role="img"
      aria-label="Notaría No. 18"
    >
      <g fill="none" stroke={stroke} strokeWidth={2.5}>
        <path d="M 12,8 L 88,8 L 88,68 Q 88,92 50,108 Q 12,92 12,68 Z" />
        <rect x="18" y="14" width="64" height="26" />
        <line x1="18" y1="40" x2="82" y2="40" />
        <line x1="18" y1="48" x2="82" y2="48" />
        <line x1="18" y1="60" x2="82" y2="60" />
        <line x1="18" y1="72" x2="76" y2="72" />
      </g>
      <text
        x="50"
        y="33"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="14"
        fontWeight="600"
        fill={stroke}
        letterSpacing="2"
      >
        XVIII
      </text>
      <line x1="108" y1="12" x2="108" y2="108" stroke={stroke} strokeWidth={1.5} opacity={0.5} />
      <text x="148" y="50" fontFamily="Montserrat, sans-serif" fontSize="22" fontWeight="700" fill={stroke} letterSpacing="4">
        NOTARÍA
      </text>
      <text x="148" y="97" fontFamily="Montserrat, sans-serif" fontSize="42" fontWeight="700" fill={stroke} letterSpacing="2">
        Nº 18
      </text>
    </svg>
  )
}
