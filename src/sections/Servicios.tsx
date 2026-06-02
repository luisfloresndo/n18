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
    <section id="servicios" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <BlurFade inView>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold-600">
            Servicios
          </p>
          <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-tight text-gold-200">
            Escrituras, contratos y actos con plena validez jurídica.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-[1.9] text-cream/50">
            Seleccione una categoría para ver los servicios y descargar los
            requisitos y formatos correspondientes.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.15}>
          <Accordion
            type="single"
            collapsible
            defaultValue={SERVICE_CATEGORIES[0].id}
            className="mt-12 border-t border-gold-400/15"
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <AccordionItem
                key={cat.id}
                value={cat.id}
                className="border-gold-400/15"
              >
                <AccordionTrigger className="py-7 font-display text-xl font-normal text-gold-200 no-underline hover:no-underline md:text-2xl [&>svg]:text-gold-400">
                  {cat.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-7 max-w-2xl text-sm leading-[1.8] text-cream/45">
                    {cat.blurb}
                  </p>
                  <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                    {cat.services.map((s) => (
                      <li
                        key={s.name}
                        className="border-l border-gold-400/20 pl-4"
                      >
                        <p className="text-sm font-medium text-cream/80">
                          {s.name}
                        </p>
                        {s.docs && (
                          <div className="mt-2 flex flex-wrap gap-2">
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
        </BlurFade>
      </div>
    </section>
  )
}
