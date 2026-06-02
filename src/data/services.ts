/**
 * Servicios y requisitos — contenido REAL extraído de notaria18.mx
 * Los PDF viven en /public/pdf (descargados del sitio original).
 */

export type Doc = { label: string; file: string }

export type Service = {
  name: string
  docs?: Doc[]
}

export type ServiceCategory = {
  id: string
  title: string
  blurb: string
  services: Service[]
}

// Documentos de identificación comunes a la mayoría de los trámites
const ID_FISICAS: Doc = {
  label: 'ID Personas Físicas',
  file: '/pdf/id-personas-fisicas.pdf',
}
const ID_MORALES: Doc = {
  label: 'ID Personas Morales',
  file: '/pdf/id-personas-morales.pdf',
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'traslativas',
    title: 'Operaciones Traslativas de Dominio',
    blurb:
      'Formalización de la transmisión de la propiedad de bienes inmuebles, con la certeza de que cada documento es fiel a su original.',
    services: [
      {
        name: 'Compraventas',
        docs: [
          { label: 'Requisitos Compraventa', file: '/pdf/requisitos-compraventa.pdf' },
          ID_FISICAS,
          ID_MORALES,
        ],
      },
      {
        name: 'Donaciones',
        docs: [
          { label: 'Requisitos de Donación', file: '/pdf/requisitos-donacion.pdf' },
          ID_FISICAS,
        ],
      },
      { name: 'Permutas', docs: [ID_FISICAS, ID_MORALES] },
      {
        name: 'Transmisiones de Propiedad',
        docs: [
          {
            label: 'Solicitud de Operación Traslativa',
            file: '/pdf/solicitud-traslativa-dominio.pdf',
          },
          ID_FISICAS,
          ID_MORALES,
        ],
      },
      { name: 'Adjudicaciones por Herencia', docs: [ID_FISICAS] },
      { name: 'Adjudicaciones por Remate', docs: [ID_FISICAS, ID_MORALES] },
      { name: 'Fideicomisos', docs: [ID_FISICAS, ID_MORALES] },
      { name: 'Constitución de Garantías Hipotecarias', docs: [ID_FISICAS, ID_MORALES] },
      { name: 'Constitución de Reserva de Usufructo', docs: [ID_FISICAS] },
      { name: 'Constitución de Reserva de Dominio', docs: [ID_FISICAS] },
    ],
  },
  {
    id: 'corporativos',
    title: 'Corporativos',
    blurb:
      'Actos jurídicos para la vida de su empresa: constitución, poderes y reestructuras societarias con plena validez.',
    services: [
      {
        name: 'Constitución de Sociedades y Asociaciones Civiles',
        docs: [ID_FISICAS, ID_MORALES],
      },
      {
        name: 'Constitución de Sociedades Mercantiles',
        docs: [ID_FISICAS, ID_MORALES],
      },
      { name: 'Protocolización de Asambleas' },
      { name: 'Poderes', docs: [ID_FISICAS] },
      { name: 'Revocación de Poderes' },
      { name: 'Fusiones', docs: [ID_MORALES] },
    ],
  },
  {
    id: 'otros',
    title: 'Otros Servicios',
    blurb:
      'Testamentos, trámites sucesorios y los demás actos que requieren de fe pública para su tranquilidad.',
    services: [
      {
        name: 'Constitución de Régimen de Propiedad en Condominio',
        docs: [ID_FISICAS, ID_MORALES],
      },
      {
        name: 'Testamentos',
        docs: [
          { label: 'Requisitos Testamento', file: '/pdf/requisitos-testamento.pdf' },
          ID_FISICAS,
        ],
      },
      { name: 'Trámites Sucesorios', docs: [ID_FISICAS] },
      { name: 'Hipotecas', docs: [ID_FISICAS, ID_MORALES] },
      { name: 'Cancelación de Hipotecas' },
      { name: 'Notificaciones' },
      { name: 'Ratificaciones de Firma' },
      { name: 'Fe de Hechos' },
      { name: 'Cotejo de Documentos' },
      { name: 'Asesorías y Servicio Legal' },
    ],
  },
]

// Contacto real (notaria18.mx)
export const CONTACT = {
  whatsapp: '528119992341',
  whatsappDisplay: '+52 81 1999 2341',
  phones: ['81-1159-2760', '81-8342-0114'],
  city: 'Monterrey, Nuevo León',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1730.099481223643!2d-100.33607601144064!3d25.669848942796648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc926e49362d57985!2sNotar%C3%ADa%20P%C3%BAblica%20No.%2018!5e0!3m2!1ses-419!2smx!4v1628529760435!5m2!1ses-419!2smx',
  mapsLink: 'https://maps.google.com/?cid=14494436507936989061',
}

export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${CONTACT.whatsapp}&text=${encodeURIComponent(
  'Hola, deseo conocer más acerca de sus servicios.',
)}`
