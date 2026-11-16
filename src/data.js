// ─────────────────────────────────────────────────────────────
//  TODA LA INFORMACIÓN DEL PORTAFOLIO ESTÁ ACÁ.
//  Para cambiar un texto, editá solo este archivo.
//  Si un campo queda vacío ('') no se muestra en la página.
// ─────────────────────────────────────────────────────────────

export const perfil = {
  nombre: 'Rodrigo Torres',
  nombreCorto: 'Rodrigo',
  marca: 'rodritorres.lab',
  titulo: 'Docente · Dev Fullstack · Coordinador TIC',
  frase: 'Construyo tecnología educativa que funciona en el aula real.',
  ubicacion: 'Vicente López, Buenos Aires',
  estado: 'Abierto a oportunidades remotas',
  foto: '/rodrigo.jpg', // la foto está en la carpeta public/
}

export const sobreMi = [
  'Soy docente de robótica y programación, coordinador TIC y desarrollador fullstack. Trabajo en el cruce entre la educación y el software: enseño en el aula, acompaño a otros docentes a usar la tecnología y construyo los sistemas que las instituciones necesitan para funcionar.',
  'Desarrollo con Next.js, React y Supabase, y llevo las ideas del prototipo a producción. Hoy mis sistemas los usan docentes, estudiantes y empresas todos los días.',
]

// Números destacados (aparecen debajo de "Sobre mí")
export const cifras = [
  { valor: '86', texto: 'aulas de Classroom administradas' },
  { valor: '5', texto: 'instituciones y espacios educativos' },
  { valor: '3', texto: 'sistemas propios en producción' },
]

export const redes = [
  { nombre: 'LinkedIn', url: 'https://ar.linkedin.com/in/rodritorreslab' },
  { nombre: 'Instagram', url: 'https://www.instagram.com/rodritorres.lab' },
]

// Logos que pasan en el carrusel "Dónde trabajé" (las imágenes están en public/logos/)
// oscuro: true → para logos con fondo negro
export const logos = [
  { nombre: 'Instituto Cristiano Vicente López', imagen: '/logos/icvl.webp' },
  { nombre: 'Colegio Jesús en el Huerto de los Olivos', imagen: '/logos/huerto.webp' },
  { nombre: 'Potrero Digital · Picadito', imagen: '/logos/picadito.webp' },
  { nombre: 'Patronato de la Infancia', imagen: '/logos/patronato.webp' },
  { nombre: 'Espacio Cultural Despacio', imagen: '/logos/despacio.webp' },
  { nombre: 'Robótica Martelli', imagen: '/logos/martelli.webp', oscuro: true },
  { nombre: 'Potrero Digital', imagen: '/logos/potrero.webp', oscuro: true },
  { nombre: 'Steigen Laboratorio Farmacéutico', imagen: '/logos/steigen.webp' },
]

// periodo: escribí las fechas, por ejemplo '2023 — Actualidad'
export const experiencia = [
  {
    lugar: 'Instituto Cultural y Educativo del Sur',
    sigla: 'ICES',
    cargo: 'Director TIC y Desarrollador',
    periodo: '',
    descripcion:
      'Dirijo el área de tecnología del instituto. Diseñé y desarrollé su sistema propio de gestión de notas, que hoy está en producción.',
    etiquetas: ['Next.js', 'Supabase', 'Gestión TIC'],
  },
  {
    lugar: 'Instituto Cristiano Vicente López',
    sigla: 'ICVL',
    logo: '/logos/icvl.webp',
    cargo: 'Líder TIC y Docente',
    periodo: '',
    descripcion: 'Lidero el área TIC de la institución y doy clases.',
    etiquetas: ['Google Workspace', 'Docencia'],
  },
  {
    lugar: 'Colegio Jesús en el Huerto de los Olivos',
    sigla: 'CJH',
    logo: '/logos/huerto.webp',
    cargo: 'Docente de Informática',
    periodo: '',
    descripcion: '',
    etiquetas: ['Informática', 'Programación'],
  },
  {
    lugar: 'Potrero Digital · Picadito',
    sigla: 'PD',
    logo: '/logos/picadito.webp',
    cargo: 'Tutor',
    periodo: '',
    descripcion: 'Capacitación docente en TIC.',
    etiquetas: ['Capacitación docente'],
  },
  {
    lugar: 'Patronato de la Infancia',
    sigla: 'PI',
    logo: '/logos/patronato.webp',
    cargo: '', // ← completar: ¿qué rol tuviste acá?
    periodo: '',
    descripcion: '',
    etiquetas: [],
  },
  {
    lugar: 'Espacio Cultural Despacio',
    sigla: 'ECD',
    logo: '/logos/despacio.webp',
    cargo: 'Taller de Robótica',
    periodo: '',
    descripcion: '',
    etiquetas: ['Robótica', 'Arduino'],
  },
]

// imagen: captura del proyecto (en public/proyectos/). Si no hay, se usa el dibujo de "visual".
// destacado: true → la tarjeta ocupa todo el ancho.
export const proyectos = [
  {
    nombre: 'Sistema Los Jazmines Eventos',
    imagen: '/proyectos/jazmines.webp',
    destacado: true,
    texto:
      'Software de gestión a medida para un salón de eventos: eventos, calendario, vendedores, cotizaciones, cobro de cuotas, cajas, almacén, producción, recetas y finanzas. Genera contratos y avisa quién tiene que pagar.',
    tecnologias: ['React', 'Supabase', 'Vercel'],
    estado: 'En producción',
    enlace: 'https://www.instagram.com/losjazmines.eventos/',
    enlaceTexto: 'Conocé al cliente',
  },
  {
    nombre: 'Petra · Cotizador para eventos',
    imagen: '/proyectos/petra.webp',
    destacado: true,
    texto:
      'Producto propio. Un link donde el cliente arma su evento y ve el precio al instante, las 24 horas. Al salón le llega el pedido por WhatsApp. Gratis para empezar y con la marca de cada salón.',
    tecnologias: ['Producto SaaS', 'Vercel'],
    estado: 'En producción',
    enlace: 'https://www.petraeventos.com/',
    enlaceTexto: 'Visitar petraeventos.com',
  },
  {
    nombre: 'Gestión de Notas ICES',
    visual: 'notas', // dibujo de la tarjeta: notas | agenda | aulas | colectivo
    texto:
      'Sistema completo de calificaciones: login por PIN, boletines y guardado automático. 5 cursos, 2 cuatrimestres.',
    tecnologias: ['Next.js', 'Supabase'],
    estado: 'En producción',
  },
  {
    nombre: 'Classroom ×86',
    visual: 'aulas',
    texto:
      'Arquitectura y administración completa de Google Classroom institucional, armado desde cero.',
    tecnologias: ['Google Workspace'],
    estado: 'Activo',
  },
  {
    nombre: 'El Colectivo',
    visual: 'colectivo',
    texto: 'App web gamificada (PWA) con temática de colectivo porteño.',
    tecnologias: ['React', 'Vite', 'Canvas', 'Tailwind'],
    estado: 'Prototipo',
  },
]

export const formacion = [
  {
    titulo: 'Profesorado de Informática',
    lugar: 'CONSUDEC V-5',
    sigla: 'CO',
    periodo: 'En curso · 2.º año',
  },
]

export const habilidades = [
  {
    grupo: 'Desarrollo',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Drizzle ORM', 'Vercel', 'GitHub', 'v0'],
  },
  {
    grupo: 'Educación y robótica',
    items: ['Google Workspace', 'Arduino', 'ZUM Core 2.0', 'Scratch', 'Rasti', 'Potrero Digital'],
  },
  {
    grupo: 'IA y productividad',
    items: ['Claude', 'Cursor', 'Vercel AI SDK'],
  },
]

export const disponible = ['Coordinación TIC', 'Desarrollo a medida', 'Capacitación docente']

export const personal = {
  texto:
    'Casado con Cami. Ministerio y comunidad de fe. La música es mi idioma extra: piano, guitarra y canto. También fútbol los viernes, ajedrez y el mate amargo mientras programo de noche.',
  versiculo: 'Filipenses 4:13',
}
