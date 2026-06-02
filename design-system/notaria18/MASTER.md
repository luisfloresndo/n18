# Design System Master File — Notaría No. 18

> **LOGIC:** Al construir una página, primero revisa `design-system/notaria18/pages/[page-name].md`.
> Si existe, sus reglas **anulan** este Master. Si no, sigue estrictamente lo de abajo.

> **NOTA DE PROCEDENCIA:** ui-ux-pro-max generó un punto de partida genérico
> (navy + Inter + Liquid Glass). Se **anuló paleta y tipografía** para alinear con el
> manual de marca real del cliente (`Branding/notaria18_branding.html`). Se conservó del
> motor: estructura de tokens, sombras, spacing, patrón de conversión y checklist a11y.

---

**Project:** Notaria18 — Notaría Pública No. 18, Monterrey N.L.
**Category:** Legal / Fe pública — Luxury Institutional
**Audacia visual:** 10 (ambición técnica con solemnidad — Awwwards, no circo)
**Idioma:** Español (es-MX)

---

## Global Rules

### Color Palette — Marca Notaría 18 (oro sobre tinta)

| Role | Hex | CSS Variable | Uso |
|------|-----|--------------|-----|
| Oro Corporativo (primario) | `#C9A84C` | `--gold-400` | Logotipo, títulos, acentos, CTA |
| Tinta Notarial (fondo) | `#1A1208` | `--ink` | Fondo principal digital, máximo contraste |
| Oro Claro | `#E8CC89` | `--gold-200` | Texto sobre fondo oscuro, subtítulos |
| Oro Oscuro | `#A8873A` | `--gold-600` | Acentos secundarios, bordes, decorativos |
| Oro Profundo | `#6B5420` | `--gold-800` | Texto sobre pergamino, máxima legibilidad |
| Pergamino | `#FAF6EC` | `--cream` | Fondos de secciones claras, papelería |
| Pergamino Oscuro | `#F0E8D0` | `--cream-dark` | Fondos alternos claros |
| Blanco Cálido | `#FEFCF7` | `--warm-white` | Tarjetas claras, superficies |
| Carbón | `#2C2416` | `--charcoal` | Texto cuerpo sobre claro |
| Negro real (overlays) | `#0A0A0A` | `--true-black` | Sombras profundas, viñeteado |

**Proporción recomendada (digital):** oro 30% · tinta 30% · pergamino 20% · variantes oro 20%.
**Color Notes:** Identidad heráldica. El oro es acento de autoridad, NO se inunda — vive contra la tinta.

### Typography — Manual de marca

- **Display / Titulares:** `Cormorant Garamond` (300/400/500/600 + itálicas) — serif editorial, peso histórico.
- **Corporativa / UI / Cuerpo:** `Montserrat` (300/400/500/600/700) — sans geométrica, claridad legal.
- **Mood:** solemne, atemporal, autoridad, precisión.
- **Fluid type:** `clamp()` en todos los tamaños clave.

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');
```

**Jerarquía:**
| Rol | Fuente | Peso | Notas |
|-----|--------|------|-------|
| Hero / Display | Cormorant Garamond | 300 | `clamp(42px, 7vw, 96px)`, itálica para énfasis en oro claro |
| Section title | Cormorant Garamond | 400 | `clamp(32px, 4vw, 56px)` |
| Eyebrow / Label | Montserrat | 500 | 9-10px, `letter-spacing: 4-6px`, UPPERCASE |
| Body | Montserrat | 300 | 13-16px, `line-height: 1.8-2` |
| UI / Nav | Montserrat | 500-700 | `letter-spacing: 2-4px` UPPERCASE en nav |

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `0.25rem` | Tight gaps |
| `--space-sm` | `0.5rem` | Icon gaps, inline |
| `--space-md` | `1rem` | Standard padding |
| `--space-lg` | `1.5rem` | Section padding |
| `--space-xl` | `2rem` | Large gaps |
| `--space-2xl` | `3rem` | Section margins |
| `--space-3xl` | `4rem` | Hero padding |
| `--space-section` | `clamp(5rem, 12vh, 10rem)` | Padding vertical de sección |

### Shadow Depths (tono cálido, no negro puro genérico)

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(26,18,8,0.18)` | Subtle lift |
| `--shadow-md` | `0 8px 24px rgba(26,18,8,0.28)` | Cards |
| `--shadow-lg` | `0 16px 48px rgba(0,0,0,0.35)` | Tarjetas premium, hero |
| `--shadow-xl` | `0 24px 80px rgba(0,0,0,0.5)` | Mockups, modales |
| `--glow-gold` | `0 0 0 1px rgba(201,168,76,0.4), 0 8px 32px rgba(201,168,76,0.12)` | Focus / hover dorado |

### Bordes y radios
- Radio default sobrio: `2-6px` (institucional, no redondeado playful).
- Bordes hairline: `0.5px solid rgba(201,168,76,0.2)` sobre tinta.
- Filete divisor: `linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)`.

---

## Component Specs

### Buttons
```css
/* Primario — outline dorado que se rellena */
.btn-primary {
  background: transparent;
  color: var(--gold-400);
  border: 1px solid var(--gold-400);
  padding: 14px 32px;
  border-radius: 2px;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 250ms cubic-bezier(.4,0,.2,1), color 250ms;
}
.btn-primary:hover { background: var(--gold-400); color: var(--ink); }

/* Sólido — para CTA de máxima jerarquía (oro pleno) */
.btn-solid {
  background: var(--gold-400);
  color: var(--ink);
  border: 1px solid var(--gold-400);
}
.btn-solid:hover { background: var(--gold-200); border-color: var(--gold-200); }
```

### Cards (servicio / trámite)
```css
.card {
  background: var(--ink);
  border: 0.5px solid rgba(201,168,76,0.15);
  border-radius: 4px;
  padding: var(--space-xl);
  transition: border-color 300ms, box-shadow 300ms, transform 300ms;
  cursor: pointer;
}
.card:hover {
  border-color: rgba(201,168,76,0.5);
  box-shadow: var(--glow-gold);
  transform: translateY(-2px); /* solo transform/opacity */
}
```

### Inputs (formulario de contacto)
```css
.input {
  background: rgba(254,252,247,0.02);
  border: 0.5px solid rgba(201,168,76,0.25);
  border-radius: 2px;
  padding: 14px 16px;
  font-family: 'Montserrat', sans-serif;
  color: var(--cream);
  transition: border-color 200ms, box-shadow 200ms;
}
.input:focus {
  border-color: var(--gold-400);
  outline: none;
  box-shadow: 0 0 0 3px rgba(201,168,76,0.18);
}
```

---

## Style Guidelines

**Estilo:** Heráldico editorial de lujo (override de "Liquid Glass").
Tinta profunda + oro, filigrana SVG sutil, numeración romana como ornamento,
tipografía serif display de gran escala como protagonista.

**Key Effects (audacia 10, solemne):**
- Hero con reveal cinemático: stagger de líneas serif (`AnimatePresence`).
- Scroll: `whileInView` con `once:true`; GSAP ScrollTrigger SOLO para escenas
  encadenadas complejas (línea de tiempo "+30 años", pin de sello notarial).
- Lenis smooth scroll.
- Cursor custom dorado (audacia ≥ 7) — debe sobrevivir cambio de pestaña.
- Filigrana / escudo XVIII como capa parallax de profundidad baja (opacity 0.04-0.08).
- Grain SVG sutil sobre la tinta para textura de papel/pergamino.
- Hover: spring physics, nunca `ease` lineal; nunca solo opacity.

**Reglas duras de performance:** solo se animan `transform` y `opacity`.
NO glassmorphism iridiscente, NO chromatic aberration, NO blur pesado de fondo
(rechazado del motor — performance pobre + impropio para fe pública).

### Page Pattern — Trust & Authority + Conversion

- **Estrategia de conversión:** prueba de autoridad (+30 años, fe pública, marco legal NL),
  trámites transparentes con requisitos y formatos descargables, formulario de baja fricción.
- **CTA doble (decisión del cliente):**
  1. *Consultar servicios/requisitos* — acordeón de servicios con descarga de formatos.
  2. *Contactar / Agendar* — CTA persistente en nav + sección final (form + WhatsApp/tel).
- **Orden de secciones (borrador, se confirma en Fase 3):**
  1. Hero (lema + autoridad) → 2. Quiénes somos (misión/visión) →
  3. Prueba/credibilidad (+30 años, fe pública) → 4. Servicios (Traslativas / Corporativos / Otros, con requisitos + formatos) →
  5. Proceso/cómo trabajamos → 6. La notaria / equipo → 7. Ubicación + mapa →
  8. Contacto (form + WhatsApp) → footer.

---

## Anti-Patterns (Do NOT Use)

**Del motor + ATLAS, reconciliados:**
- ❌ Inter / Roboto / Arial / system-ui (usar Cormorant Garamond + Montserrat)
- ❌ Paleta navy genérica del motor — la marca es oro/tinta
- ❌ Glassmorphism iridiscente / Liquid Glass / chromatic aberration
- ❌ Lorem ipsum en cualquier estado (¡el branding actual aún lo tiene — no portarlo!)
- ❌ Emojis como iconos → SVG (escudo propio, Lucide para utilitarios)
- ❌ Animar `width`/`height`/`margin`/`padding`
- ❌ Hover que solo cambia opacity
- ❌ Métricas inventadas ("+30 años" debe confirmarlo el cliente antes de publicar)
- ❌ Cursor custom que desaparece al cambiar de pestaña
- ❌ Dos librerías de animación en el mismo componente

---

## Pre-Delivery Checklist (a11y + marca)

- [ ] Sin emojis como iconos
- [ ] `cursor: none` global si hay cursor custom; si no, `cursor: pointer` en clickables
- [ ] Hover con transición suave (150-300ms), spring en interacciones clave
- [ ] Contraste WCAG AA: oro `#C9A84C` sobre tinta `#1A1208` ✓; verificar oro sobre oro
- [ ] Focus visible para navegación por teclado
- [ ] `prefers-reduced-motion` respetado (desactiva GSAP/Lenis)
- [ ] Responsive: 375px · 768px · 1024px · 1440px
- [ ] Sin contenido oculto tras nav fijo
- [ ] Sin scroll horizontal en móvil
- [ ] Sin Lorem ipsum
- [ ] Tipografía coherente en todos los breakpoints
