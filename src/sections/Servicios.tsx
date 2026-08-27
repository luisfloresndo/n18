import { Download } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BlurFade } from '@/components/ui/blur-fade'
import { SERVICE_CATEGORIES } from '@/data/services'

export function Servicios() {
  return (
    <section id="servicios" className="relative bg-ink px-6 py-28 lg:px-12 xl:px-16 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-96" style={{background:"radial-gradient(ellipse 60% 100% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)"}} />
      <div className="mx-auto max-w-[1440px]">
        {/* Encabezado editorial a dos columnas */}
        <div className="grid gap-10 border-b border-gold-400/15 pb-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <BlurFade inView>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-gold-600">
              <span className="mr-3 font-display text-gold-400">IV</span> Servicios
            </p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4rem)] font-light leading-[1.02] text-gold-100">
              Escrituras, contratos y actos con{' '}
              <em className="italic text-gold-400">plena validez.</em>
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.15} className="flex items-end">
            <p className="max-w-md text-sm leading-[1.95] text-cream/70">
              Seleccione una categoría para ver los servicios y descargar los
              requisitos y formatos correspondientes. Cada documento es
              cotejado para dar fe certera de su autenticidad.
            </p>
          </BlurFade>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={SERVICE_CATEGORIES[0].id}
          className="mt-4"
        >
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <AccordionItem key={cat.id} value={cat.id} className="border-gold-400/15">
              <AccordionTrigger className="group gap-6 py-8 text-left font-normal no-underline hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gold-400">
                <span className="flex items-baseline gap-6">
                  <span className="font-display text-lg text-gold-400/40 transition-colors duration-300 group-hover:text-gold-400">
                    0{idx + 1}
                  </span>
                  <span className="font-display text-2xl text-gold-100 md:text-3xl">
                    {cat.title}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-8 max-w-2xl pl-0 text-sm leading-[1.85] text-cream/60 md:pl-[3.75rem]">
                  {cat.blurb}
                </p>
                <ul className="grid gap-x-12 gap-y-6 md:grid-cols-2 md:pl-[3.75rem]">
                  {cat.services.map((s) => (
                    <li key={s.name} className="border-l border-gold-400/20 pl-4">
                      <p className="text-sm font-medium text-cream/85">{s.name}</p>
                      {s.docs && (
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          {s.docs.map((d) => (
                            <a
                              key={d.label}
                              href={d.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-sm border border-gold-400/25 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-gold-400/80 transition-colors duration-200 hover:border-gold-400 hover:text-gold-400"
                            >
                              <Download className="h-3 w-3" />
                              {d.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
