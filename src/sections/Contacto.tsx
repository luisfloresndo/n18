import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import { LampContainer } from '@/components/ui/lamp'
import { ShineBorder } from '@/components/ui/shine-border'
import { BorderBeam } from '@/components/ui/border-beam'
import { BlurFade } from '@/components/ui/blur-fade'
import { CONTACT } from '@/data/services'

export function Contacto() {
  const [nombre, setNombre] = useState('')
  const [tramite, setTramite] = useState('')
  const [mensaje, setMensaje] = useState('')

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
    <section id="contacto" className="relative bg-ink">
      {/* Lema real iluminado por el lamp (21st.dev) */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
          className="text-center"
        >
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.45em] text-gold-600">
            <span className="mr-3 font-display text-gold-400">VII</span> Contacto
          </p>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.05] text-gold-100">
            Excelencia jurídica,
            <br />
            <em className="italic text-gold-400">seguridad y confianza.</em>
          </h2>
        </motion.div>
      </LampContainer>

      {/* Franja del formulario con imagen de fondo (Opción A) */}
      <div className="relative -mt-20 overflow-hidden">
        {/* Imagen de fondo SOLO en esta franja (no toca el lamp de arriba) */}
        <div aria-hidden className="absolute inset-0">
          <img src="/images/contacto-bg.webp" alt="" className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(26,18,8,0.92) 0%, rgba(26,18,8,0.78) 50%, rgba(26,18,8,0.95) 100%)',
            }}
          />
        </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pb-32 pt-24 lg:grid-cols-2 lg:px-20">
        <BlurFade inView>
          <p className="max-w-md text-base leading-[1.95] text-cream/80">
            Estamos para servirle. Escríbanos por WhatsApp o llámenos y con gusto
            le orientamos sobre su trámite.
          </p>
          <div className="mt-10 space-y-4">
            <a
              href={`https://api.whatsapp.com/send?phone=${CONTACT.whatsapp}&text=${encodeURIComponent('Hola, deseo conocer más acerca de sus servicios.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-base text-cream/85 transition-colors hover:text-gold-400"
            >
              <MessageCircle className="h-4 w-4 text-gold-400" />
              WhatsApp · {CONTACT.whatsappDisplay}
            </a>
            <div className="flex flex-col gap-1.5 text-sm text-cream/75">
              {CONTACT.phones.map((p) => (
                <a key={p} href={`tel:+52${p.replace(/-/g, '')}`} className="transition-colors hover:text-gold-400">
                  Tel: {p}
                </a>
              ))}
            </div>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.15}>
          <ShineBorder
            borderRadius={8}
            borderWidth={1}
            duration={12}
            color={['#C9A84C', '#6B5420', '#E8CC89']}
            className="relative w-full min-w-0 max-w-none overflow-hidden bg-ink/90 p-8 text-cream backdrop-blur-md"
          >
            <BorderBeam size={300} duration={14} colorFrom="#E8CC89" colorTo="#A8873A" borderWidth={1.5} />
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
              <Field label="Nombre">
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} required className="n18-input" placeholder="Su nombre completo" />
              </Field>
              <Field label="Trámite de interés">
                <input value={tramite} onChange={(e) => setTramite(e.target.value)} className="n18-input" placeholder="Ej. Compraventa, Testamento, Poder…" />
              </Field>
              <Field label="Mensaje">
                <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows={4} className="n18-input resize-none" placeholder="¿En qué podemos ayudarle?" />
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
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-600">{label}</span>
      {children}
    </label>
  )
}
