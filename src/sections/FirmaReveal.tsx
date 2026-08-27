import { ContainerScroll } from '@/components/ui/container-scroll-animation'

/** Reveal cinemático de la firma en "tablet" (ContainerScroll · 21st.dev). */
export function FirmaReveal() {
  return (
    <section
      className="relative overflow-hidden bg-ink"
      style={{ backgroundImage: 'url(/images/proceso-texture.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div aria-hidden className="absolute inset-0 bg-ink/85" />
      <div className="relative">
        <ContainerScroll
          titleComponent={
            <div className="mb-2">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.45em] text-gold-600">La firma que da fe</p>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.02] text-gold-100">
                Cada acto, formalizado <em className="italic text-gold-400">con su firma.</em>
              </h2>
            </div>
          }
        >
          <img src="/images/firma-macro.webp" alt="Pluma fuente firmando un documento con tinta dorada" className="h-full w-full rounded-2xl object-cover" draggable={false} />
        </ContainerScroll>
      </div>
    </section>
  )
}
