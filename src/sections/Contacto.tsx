import { useState, type FormEvent } from 'react'
import { MessageCircle } from 'lucide-react'
import { ShineBorder } from '@/components/ui/shine-border'
import { BlurFade } from '@/components/ui/blur-fade'
import { CONTACT } from '@/data/services'

export function Contacto() {
  const [nombre, setNombre] = useState('')
  const [tramite, setTramite] = useState('')
  const [mensaje, setMensaje] = useState('')

  // Envía la consulta por WhatsApp (número real de la notaría)
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const texto = [
      `Hola, soy ${nombre || '—'}.`,
      tramite && `Trámite de interés: ${tramite}.`,
      mensaje && `Mensaje: ${mensaje}`,
    ]
      .filter(Boolean)
      .join(' ')
    window.open(
      `https://api.whatsapp.com/send?phone=${CONTACT.whatsapp}&text=${encodeURIComponent(texto)}`,
      '_blank',
    )
  }

  return (
    <section id="contacto" className="relative bg-charcoal/15 px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <BlurFade inView>
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold-600">
            Contacto
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight text-gold-200">
            Excelencia jurídica,
            <br />
            <em className="italic text-gold-400">seguridad y confianza.</em>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-[1.9] text-cream/55">
            Estamos para servirle. Escríbanos por WhatsApp o llámenos y con gusto
            le orientamos sobre su trámite.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href={`https://api.whatsapp.com/send?phone=${CONTACT.whatsapp}&text=${encodeURIComponent('Hola, deseo conocer más acerca de sus servicios.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-gold-400"
            >
              <MessageCircle className="h-4 w-4 text-gold-400" />
              WhatsApp · {CONTACT.whatsappDisplay}
            </a>
            <div className="flex flex-col gap-1 text-sm text-cream/60">
              {CONTACT.phones.map((p) => (
                <a key={p} href={`tel:+52${p.replace(/-/g, '')}`} className="transition-colors hover:text-gold-400">
                  Tel: {p}
                </a>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Formulario con borde brillante (ShineBorder · 21st.dev) */}
        <BlurFade inView delay={0.15}>
          <ShineBorder
            borderRadius={8}
            borderWidth={1}
            duration={12}
            color={['#C9A84C', '#6B5420', '#E8CC89']}
            className="w-full min-w-0 max-w-none bg-ink p-8 text-cream"
          >
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
              <Field label="Nombre">
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="n18-input"
                  placeholder="Su nombre completo"
                />
              </Field>
              <Field label="Trámite de interés">
                <input
                  value={tramite}
                  onChange={(e) => setTramite(e.target.value)}
                  className="n18-input"
                  placeholder="Ej. Compraventa, Testamento, Poder…"
                />
              </Field>
              <Field label="Mensaje">
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={4}
                  className="n18-input resize-none"
                  placeholder="¿En qué podemos ayudarle?"
                />
              </Field>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm border border-gold-400 bg-gold-400 px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-gold-200 hover:bg-gold-200"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar por WhatsApp
              </button>
            </form>
          </ShineBorder>
        </BlurFade>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-600">
        {label}
      </span>
      {children}
    </label>
  )
}
