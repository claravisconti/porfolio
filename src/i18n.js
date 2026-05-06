import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      // Navegación
      nav: {
        home: 'Inicio',
        portfolio: 'Portfolio',
        about: 'Sobre Mí',
        contact: 'Contacto',
        all: 'Todos',
        web: 'Web',
        campaigns: 'Campañas',
        packaging: 'Packaging',
        editorial: 'Editorial',
        previous: 'Anterior',
        next: 'Siguiente'
      },
      hero: {
        error: 'Tu navegador no soporta videos.',
        see: 'Ver proyectos',
        about: 'Sobre mí'
      },
      typewriter: {
        t_1: 'Mi proceso creativo siempre está',
        t_2: 'listo para ',
        t_3: 'nuevos desafíos.|',
      },
      testimonials: {
        title: 'Testimonio',
        r_1: 'Fundadora de Bloom',
        t_1: 'Trabajar con Clara fue un antes y un después para mi marca. Logró captar la esencia minimalista que buscaba desde el primer día. Su ojo para el detalle en el packaging es realmente único.',
        r_2: 'Director de Marketing en TechBA',
        t_2: 'Buscábamos una identidad web que fuera moderna pero funcional, y el resultado superó nuestras expectativas. La comunicación fue fluida y entendió perfectamente los tiempos de nuestra empresa.',
        r_3: 'Emprendedora Gastronómica',
        t_3: 'Clara tiene una capacidad increíble para traducir conceptos abstractos en piezas visuales potentes. Las campañas que diseñó para el lanzamiento de mi local fueron clave para el éxito que tuvimos.',
      },
      contact: {
        title_1: 'Estoy presente para dar vida a tus ideas.',
        title_2: 'Escribime',
        send: 'Enviar',
        sending: 'Enviando...',
        success: '¡Mensaje enviado con éxito!',
        error: 'Hubo un error. Intentá de nuevo.',
        message: 'Mensaje',
        about: 'Asunto',
        email: 'Correo',
        name: 'Nombre',
        schedule: 'Horarios',
        schedule_info: 'Lunes a Sábados',
        socials: 'Redes Sociales'
      },
      services: {
        t_1: 'Diseño Web',
        d_1: 'Diseño interfaces intuitivas y estéticas que priorizan la experiencia del usuario sin perder el impacto visual.',
        t_2: 'Institucional',
        d_2: 'Creo identidades visuales desde cero, buscando una narrativa coherente y atemporal para cada proyecto.',
        t_3: 'Packaging',
        d_3: 'Desarrollo envases que cuentan historias, enfocándome en la funcionalidad y la materialidad del diseño.',
        t_4: 'Campañas',
        d_4: 'Planifico y diseño el universo visual de campañas integrales, optimizando la comunicación en cada pieza.'
      },
      skills: {
        design: 'Diseño Web',
        mobile: 'Mobile',
        packaging: 'Packaging',
        campaigns: 'Campañas',
        specialities: 'Especialidades',
        title_1: 'Mis áreas de',
        title_2: 'experiencia',
        body: 'Acompaño cada proyecto con una visión estratégica y creativa, \nbuscando siempre el equilibrio entre la estética minimalista \ny la funcionalidad necesaria para cada marca.'
      },
      project: {
        year: 'Año',
        services: 'Servicios',
        author: 'Autor',
        problem: 'Problema',
        objective: 'Objetivo',
        challenge: 'Desafío',
        colors: 'Colores',
        typo: 'Tipografía',
        solution: 'La Solución',
        metrics_1: 'Métricas',
        metrics_2: 'Finales',
        project: 'El proyecto'
      },
      portfolio: {
        all: 'Todos',
        web: 'Web',
        campaigns: 'Campañas',
        campaigns_route: '/portfolio/redes',
        packaging: 'Packaging',
        editorial: 'Editorial',
        see_all: 'Ver todos los proyectos'
      },
      // Footer
      footer: {
        follow: 'Seguime',
        rights: 'TODOS LOS DERECHOS RESERVADOS.',
        explore: 'Explorar'
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        portfolio: 'Portfolio',
        about: 'About me',
        contact: 'Contact',
        all: 'All',
        web: 'Web',
        campaigns: 'Campaigns',
        packaging: 'Packaging',
        editorial: 'Editorial',
        previous: 'Previous',
        next: 'Next'
      },
      hero: {
        error: 'Your browser does not support videos.',
        see: 'View projects',
        about: 'About me'
      },
      typewriter: {
        t_1: 'My creative process is always',
        t_2: 'ready for ',
        t_3: 'new challenges.|',
      },
      testimonials: {
        title: 'Review',
        r_1: 'Founder of Bloom',
        t_1: 'Working with Clara was a turning point for my brand. She captured the minimalist essence I was looking for from day one. Her eye for detail in packaging is truly unique.',
        r_2: 'Marketing Director at TechBA',
        t_2: 'We were looking for a web identity that was both modern and functional, and the result exceeded our expectations. Communication was smooth and she fully understood our company’s timelines.',
        r_3: 'Food Entrepreneur',
        t_3: 'Clara has an incredible ability to translate abstract concepts into powerful visual pieces. The campaigns she designed for my launch were key to the success we achieved.',
      },
      contact: {
        title_1: 'I’m here to bring your ideas to life.',
        title_2: 'Write to me',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'There was an error. Please try again.',
        message: 'Message',
        about: 'Subject',
        email: 'Email',
        name: 'Name',
        schedule: 'Schedule',
        schedule_info: 'Monday to Saturday',
        socials: 'Social Media'
      },
      services: {
        t_1: 'Web Design',
        d_1: 'I design intuitive and visually appealing interfaces that prioritize user experience without losing visual impact.',
        t_2: 'Corporate',
        d_2: 'I create visual identities from scratch, aiming for a coherent and timeless narrative for each project.',
        t_3: 'Packaging',
        d_3: 'I develop packaging that tells stories, focusing on functionality and materiality in design.',
        t_4: 'Campaigns',
        d_4: 'I plan and design the visual universe of integrated campaigns, optimizing communication across every piece.'
      },
      skills: {
        design: 'Web Design',
        mobile: 'Mobile',
        packaging: 'Packaging',
        campaigns: 'Campaigns',
        specialities: 'Specialities',
        title_1: 'My areas of',
        title_2: 'experience',
        body: 'I approach each project with a strategic and creative vision, \nalways seeking the right balance between minimalist aesthetics \nand the functionality each brand needs.'
      },
      project: {
        year: 'Year',
        services: 'Services',
        author: 'Author',
        problem: 'Problem',
        objective: 'Objective',
        challenge: 'Challenge',
        colors: 'Colors',
        typo: 'Typography',
        solution: 'The Solution',
        metrics_1: 'Final',
        metrics_2: 'Metrics',
        project: 'The project'
      },
      portfolio: {
        all: 'All',
        web: 'Web',
        campaigns: 'Campaigns',
        campaigns_route: '/portfolio/campaigns',
        packaging: 'Packaging',
        editorial: 'Editorial',
        see_all: 'See all the projects'
      },
      footer: {
        follow: 'Follow me',
        rights: 'ALL RIGHTS RESERVED.',
        explore: 'Explore'
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'es', // idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

// Persistir el idioma elegido en localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;