// ─────────────────────────────────────────────────────────────
//  TODA LA INFORMACIÓN DEL PORTAFOLIO ESTÁ ACÁ.
//  Para cambiar un texto, editá solo este archivo.
//  Si un campo queda vacío ('') no se muestra en la página.
// ─────────────────────────────────────────────────────────────

export const perfil = {
  nombre: 'Rodrigo Torres',
  nombreCorto: 'Rodrigo',
  marca: 'rodritorres.lab',
  // Titular: lo primero que lee quien te puede contratar
  titular: 'Desarrollo software a medida para escuelas y pymes.',
  bajada:
    'Soy docente y coordinador de tecnología. Conozco por dentro cómo funcionan una escuela y una organización, y construyo herramientas que la gente usa todos los días.',
  titulo: 'Desarrollador de software · Docente de tecnología',
  ubicacion: 'Vicente López, Buenos Aires',
  estado: 'Disponible para proyectos · Zona norte o remoto',
  email: 'rodrigomartintorres@outlook.com',
  foto: '/rodrigo.jpg', // la foto está en la carpeta public/
}

// Números destacados (aparecen debajo de la presentación)
export const cifras = [
  { valor: '3', texto: 'sistemas propios en producción' },
  { valor: '50', texto: 'docentes usan mi sistema de notas' },
  { valor: '86', texto: 'aulas de Classroom coordinadas' },
  { valor: '8', texto: 'instituciones y espacios donde trabajé' },
]

export const redes = [
  { nombre: 'LinkedIn', url: 'https://ar.linkedin.com/in/rodritorreslab' },
  { nombre: 'Instagram', url: 'https://www.instagram.com/rodritorres.lab' },
]

// Logos que pasan en el carrusel (las imágenes están en public/logos/)
// oscuro: true → para logos con fondo negro
export const logos = [
  { nombre: 'Instituto Cristiano Vicente López', imagen: '/logos/icvl.webp' },
  { nombre: 'Colegio Jesús en el Huerto de los Olivos', imagen: '/logos/huerto.webp' },
  { nombre: 'Picadito Digital', imagen: '/logos/picadito.webp' },
  { nombre: 'Patronato de la Infancia', imagen: '/logos/patronato.webp' },
  { nombre: 'Espacio Cultural Despacio', imagen: '/logos/despacio.webp' },
  { nombre: 'Robótica Martelli', imagen: '/logos/martelli.webp', oscuro: true },
  { nombre: 'Potrero Digital', imagen: '/logos/potrero.webp', oscuro: true },
  { nombre: 'Steigen Laboratorio Farmacéutico', imagen: '/logos/steigen.webp' },
]

// Qué le podés resolver a quien te contrata
export const servicios = [
  {
    icono: 'codigo',
    titulo: 'Software a medida para pymes',
    texto:
      'Sistemas de gestión, cotizadores online y paneles para ordenar el día a día de un negocio. Del primer boceto a la versión que se usa todos los días.',
    ejemplo: 'Ej.: Sistema Los Jazmines Eventos, Petra',
  },
  {
    icono: 'escuela',
    titulo: 'Tecnología para escuelas',
    texto:
      'Sistemas de notas y boletines, organización de Google Classroom y Workspace, y acompañamiento a docentes para usarlos.',
    ejemplo: 'Ej.: Gestión de Notas ICES, 86 aulas en ICVL',
  },
  {
    icono: 'clases',
    titulo: 'Clases y talleres',
    texto:
      'Programación, robótica, computación y ciudadanía digital. Presencial o remoto, para chicos desde los 5 años, adolescentes y adultos mayores.',
    ejemplo: 'Ej.: Huerto de los Olivos, Picadito Digital, Despacio',
  },
]

// imagen: captura del proyecto (en public/proyectos/). Si no hay, se usa el dibujo de "visual".
// destacado: true → la tarjeta ocupa todo el ancho y muestra el caso completo.
// caso: problema / qué hice / resultado. testimonio: frase de un cliente.
export const proyectos = [
  {
    nombre: 'Sistema Los Jazmines Eventos',
    imagen: '/proyectos/jazmines.webp',
    destacado: true,
    tipo: 'Cliente · 2026',
    texto: 'Software de gestión a medida para un salón de eventos.',
    caso: {
      problema:
        'Un salón de eventos necesitaba tener en un solo lugar sus eventos, cotizaciones, cobros, cajas, compras y producción.',
      solucion:
        'Diseñé y desarrollé un sistema completo: calendario, vendedores, cotizaciones, cobro de cuotas, cajas, almacén, recetas y finanzas, con generación de contratos y aviso de quién tiene que pagar.',
      resultado: 'Se usa todos los días para gestionar los eventos del salón.',
    },
    testimonio: {
      texto: 'Es el sistema que me solucionó la vida para la gestión de eventos.',
      autor: 'Diego · Los Jazmines Eventos',
    },
    tecnologias: ['React', 'Supabase', 'Vercel'],
    estado: 'En producción',
    enlace: 'https://www.instagram.com/losjazmines.eventos/',
    enlaceTexto: 'Conocé al cliente',
  },
  {
    nombre: 'Gestión de Notas ICES',
    visual: 'notas', // dibujo de la tarjeta: notas | aulas | colectivo
    destacado: true,
    tipo: 'Institución educativa · 2025',
    texto: 'Sistema propio de calificaciones para la secundaria.',
    caso: {
      problema: 'La secundaria necesitaba una forma simple y segura de cargar notas y armar boletines.',
      solucion:
        'Desarrollé un sistema con ingreso por PIN para cada docente, boletines automáticos y guardado automático para no perder nada.',
      resultado: 'Lo usan 50 docentes para las notas de unos 200 alumnos de secundaria.',
    },
    tecnologias: ['Next.js', 'Supabase'],
    estado: 'En producción',
  },
  {
    nombre: 'Petra · Cotizador para eventos',
    imagen: '/proyectos/petra.webp',
    destacado: true,
    tipo: 'Producto propio',
    texto:
      'Un link donde el cliente de un salón arma su evento y ve el precio al instante, las 24 horas. Al salón le llega el pedido por WhatsApp.',
    tecnologias: ['Producto SaaS', 'Vercel'],
    estado: 'En producción',
    enlace: 'https://www.petraeventos.com/',
    enlaceTexto: 'Visitar petraeventos.com',
  },
  {
    nombre: 'Classroom ICVL',
    visual: 'aulas',
    tipo: 'Coordinación TIC',
    texto: 'Organización y administración de 86 aulas de Google Classroom para unos 500 alumnos.',
    tecnologias: ['Google Workspace'],
    estado: 'Activo',
  },
  {
    nombre: 'El Colectivo',
    visual: 'colectivo',
    tipo: 'Proyecto propio',
    texto: 'App web gamificada (PWA) con temática de colectivo porteño.',
    tecnologias: ['React', 'Vite', 'Canvas', 'Tailwind'],
    estado: 'Prototipo',
  },
]

// periodo: por ejemplo '2024 — Actualidad'
export const experiencia = [
  {
    lugar: 'Instituto Cristiano Vicente López',
    sigla: 'ICVL',
    logo: '/logos/icvl.webp',
    cargo: 'Coordinador de Tecnologías',
    periodo: '2024 — 2026',
    descripcion:
      'Empecé en diversas tareas y terminé como coordinador de tecnología de la institución: 86 aulas de Google Classroom y unos 500 alumnos.',
    etiquetas: ['Google Workspace', 'Coordinación TIC'],
  },
  {
    lugar: 'Instituto Cultural y Educativo del Sur',
    sigla: 'ICES',
    cargo: 'Docente de secundaria y Desarrollador',
    periodo: '2025 — Actualidad',
    descripcion:
      'Doy clases en la secundaria y desarrollé el sistema de gestión de notas de la institución.',
    etiquetas: ['Next.js', 'Supabase', 'Docencia'],
  },
  {
    lugar: 'Colegio Jesús en el Huerto de los Olivos',
    sigla: 'CJH',
    logo: '/logos/huerto.webp',
    cargo: 'Docente de Informática',
    periodo: '2025 — Actualidad',
    descripcion: 'Primaria (5.º y 6.º grado) y, desde 2026, 1.er año de secundaria.',
    etiquetas: ['Informática', 'Programación'],
  },
  {
    lugar: 'Potrero Digital',
    sigla: 'PD',
    logo: '/logos/potrero.webp',
    logoOscuro: true,
    cargo: 'Docente de Ciudadanía Digital',
    periodo: 'Actualidad',
    descripcion: 'Clases remotas, en vivo y asincrónicas, sobre ciudadanía digital.',
    etiquetas: ['Educación remota', 'Ciudadanía digital'],
  },
  {
    lugar: 'Patronato de la Infancia · Picadito Digital',
    sigla: 'PI',
    logo: '/logos/patronato.webp',
    cargo: 'Docente de Programación',
    periodo: '',
    descripcion: 'Clases de programación para chicos de 4.º a 7.º grado.',
    etiquetas: ['Programación', 'Primaria'],
  },
  {
    lugar: 'Espacio Cultural Despacio',
    sigla: 'ECD',
    logo: '/logos/despacio.webp',
    cargo: 'Cofundador y Tallerista de Robótica',
    periodo: '',
    descripcion:
      'Cooperativa que formé junto con otros talleristas. Di talleres de robótica para chicos y adolescentes de 5 a 17 años.',
    etiquetas: ['Robótica', 'Arduino', 'Cooperativa'],
  },
  {
    lugar: 'Robótica Martelli',
    sigla: 'RM',
    logo: '/logos/martelli.webp',
    logoOscuro: true,
    cargo: 'Docente de Computación y Técnico en Electrónica',
    periodo: '2021',
    descripcion: 'Clases de computación para adultos mayores y reparación de equipos electrónicos.',
    etiquetas: ['Adultos mayores', 'Electrónica'],
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
    items: ['Google Workspace', 'Google Classroom', 'Arduino', 'ZUM Core 2.0', 'Scratch', 'Rasti'],
  },
  {
    grupo: 'IA y productividad',
    items: ['Claude', 'Cursor', 'Vercel AI SDK'],
  },
  {
    grupo: 'Idiomas',
    items: ['Español (nativo)', 'Inglés (básico)'],
  },
]

export const sobreMi = [
  'Empecé dando clases de robótica y computación: chicos desde los 5 años, adolescentes y adultos mayores. Hoy soy docente de informática en primaria y secundaria y coordinador de tecnología en un colegio.',
  'Trabajando en escuelas empecé a desarrollar software para resolver problemas reales de las instituciones, y después para clientes como Los Jazmines Eventos. Hoy busco proyectos de desarrollo de software, seguir aprendiendo y enseñar lo que aprendo.',
]
