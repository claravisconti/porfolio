import Portada_DigitalVector from '../assets/images/Web/Portada_DigitalVector.webp';
import Portada_Bloom from '../assets/images/Web/Portada_Bloom.webp';
import Portada_Payslip from '../assets/images/Web/Portada_Payslip.webp';
import Portada_Fanfiction from '../assets/images/Web/Portada_Fanfiction.jpg';
import Portada_SweetBlossom from '../assets/images/Web/Portada_SweetBlossom.webp';
import Portada_Foodie from '../assets/images/Web/Portada_Foodie.webp';
import Portada_Orpheus from '../assets/images/Web/Portada_Orpheus.webp';
import Portada_Electrohaus from '../assets/images/Web/Portada_Electrohaus.webp';
import Portada_MagicTravel from '../assets/images/Web/Portada_MagicTravel.webp';
import Portada_Hermes from '../assets/images/Web/Portada_Hermes.webp';
import Portada_WineNight from '../assets/images/Web/Portada_WineNight.webp';
import Portada_Maison from '../assets/images/Editorial/Portada_Maison.webp';
import Portada_Manifiesto from '../assets/images/Editorial/Portada_Manifiesto.webp';
import Portada_Sillkylatte from '../assets/images/Packaging/Portada_Sillkylatte.webp';
import Portada_Sillkylatte_Botella from '../assets/images/Packaging/Portada_Sillkylatte_Botella.webp';
import Portada_Fruits from '../assets/images/Packaging/Portada_Fruits.webp';
import Portada_Crown from '../assets/images/Packaging/Portada_Crown.webp';
import Portada_Fidelity from '../assets/images/Campañas/Portada_Fidelity.webp';
import Portada_ConsumerPulse from '../assets/images/Campañas/Portada_ConsumerPulse.webp';
import Portada_TrueLoyalty from '../assets/images/Campañas/Portada_TrueLoyalty.webp';
import Portada_BloombergScreentime from '../assets/images/Campañas/Portada_BloombergScreentime.webp';
import Portada_Engaging from '../assets/images/Campañas/Portada_Engaging.webp';
import Portada_Consumer from '../assets/images/Campañas/Portada_Consumer.webp';
import Portada_Drupal from '../assets/images/Campañas/Portada_Drupal.webp';
import Portada_AdvertisingWeek from '../assets/images/Campañas/Portada_AdvertisingWeek.webp';
import Portada_DrupalCon from '../assets/images/Campañas/Portada_DrupalCon.webp';
import Portada_IWD from '../assets/images/Campañas/Portada_IWD.webp';
import Portada_STC from '../assets/images/Campañas/Portada_STC.webp';
import Portada_HCIC from '../assets/images/Campañas/Portada_HCIC.webp';

export const projects = [
  {
    id: 1,
    title: "Digital Vector",
    category: "Web",
    image: Portada_DigitalVector,
    slug: "digitalVector",
    year: "2026",
    services: "UI/UX Design / Fullstack Dev",
    description: "Digital Vector, una agencia de desarrollo de software boutique, necesitaba una presencia digital que reflejara su capacidad para manejar proyectos complejos sin perder la sofisticación visual. El desafío principal era alejarse de la estética 'tech' genérica y saturada, creando una experiencia que comunicara precisión, confianza y minimalismo de alto nivel.",
    solution: "Se desarrolló una interfaz basada en una retícula técnica rigurosa que organiza la información de forma jerárquica y clara. Implementamos una paleta monocromática con acentos en Teal para resaltar las llamadas a la acción, junto con micro-interacciones sutiles en React que elevan la percepción de calidad del sitio. El flujo de navegación se optimizó para guiar al usuario desde la propuesta de valor directamente hacia un formulario de contacto estratégico.",
    gallery: [Portada_DigitalVector, "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200", "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200"]
  },
  {
    id: 2,
    title: "Bloom Indumentaria",
    category: "Web",
    image: Portada_Bloom,
    slug: "bloom",
    year: "2024",
    services: "Estrategia Visual / eCommerce",
    description: "Bloom es una marca de indumentaria de autor que se encontraba con un problema de conversión: su sitio web no lograba transmitir la calidad táctil y el detalle de sus prendas. El desafío era transformar una tienda online convencional en una experiencia de 'vitrina digital' donde el diseño editorial y la funcionalidad de compra convivieran armoniosamente.",
    solution: "La solución radicó en un enfoque fotocéntrico. Diseñamos un layout que permite imágenes de gran formato con carga perezosa para no sacrificar rendimiento. Introdujimos una tipografía Serif elegante para los títulos que evoca las revistas de moda clásicas, combinada con un sistema de filtros de búsqueda intuitivo. Esto resultó en una navegación más fluida que invita al usuario a explorar las colecciones como si estuviera pasando las páginas de un catálogo físico.",
    gallery: [Portada_Bloom, "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200", "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200"]
  },
  {
    id: 4,
    title: "Payslip App",
    category: "Web",
    image: Portada_Payslip,
    slug: "payslip",
    year: "2023",
    services: "SaaS Design / Product Strategy",
    description: "Las plataformas de RRHH suelen ser áridas y difíciles de navegar. El desafío con Payslip era centralizar la gestión de recibos de sueldo, contratos y documentación legal en una web-app que fuera amigable tanto para el personal administrativo como para los empleados con pocos conocimientos técnicos, garantizando la seguridad de los datos sensibles.",
    solution: "Diseñamos un dashboard modular basado en 'cards' que jerarquizan las acciones más frecuentes. Implementamos un sistema de carga de documentos por 'drag and drop' con validación en tiempo real y estados de carga claros. Para la arquitectura de información, dividimos el flujo en pasos lógicos, reduciendo la carga cognitiva y el margen de error del usuario. El resultado es una herramienta funcional que humaniza los procesos contables corporativos.",
    gallery: [Portada_Payslip, "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200", "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200"]
  },
  {
    id: 12,
    title: "Revista Maison",
    category: "Editorial",
    image: Portada_Maison,
    slug: "maison",
    year: "2022",
    services: "Diseño Editorial / Art Direction",
    description: "Maison es una publicación trimestral de arquitectura que buscaba reinventar su identidad visual para competir en el mercado europeo de revistas premium. El desafío era crear una retícula flexible que pudiera albergar tanto artículos de texto denso como ensayos fotográficos minimalistas, manteniendo una coherencia visual sofisticada en cada página.",
    solution: "Propusimos un diseño basado en el sistema de retícula suiza, utilizando generosos márgenes blancos que actúan como 'aire' visual, permitiendo que la arquitectura fotografiada respire. La selección tipográfica combina una grotesca moderna para información técnica y una Serif de contraste alto para narrativas largas. Esta dualidad permite que la revista se sienta contemporánea pero atemporal, elevando su estatus a objeto de colección.",
    gallery: [Portada_Maison, "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200", "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200"]
  },
  {
    id: 14,
    title: "Silkylatte Leche",
    category: "Packaging",
    image: Portada_Sillkylatte,
    slug: "silkylatte",
    year: "2024",
    services: "Packaging / Branding Identity",
    description: "En un mercado saturado de leches vegetales con estéticas industriales, Silkylatte necesitaba destacar en la góndola comunicando su origen 100% artesanal y orgánico. El desafío era crear un packaging que se sintiera honesto, premium y que justificara un precio superior al promedio del mercado mediante su presentación visual.",
    solution: "La solución fue un diseño de etiqueta limpio con ilustraciones botánicas grabadas a mano. Utilizamos una paleta de colores tierra y crema para evocar naturalidad. La tipografía principal fue elegida por su carácter orgánico pero legible. El toque final fue la elección de acabados: un barniz sectorizado mate sobre el cartón reciclado que proporciona una experiencia táctil al consumidor, reforzando la idea de un producto cuidado y de alta calidad.",
    gallery: [Portada_Sillkylatte, "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200", "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200"]
  },
  {
    id: 18,
    title: "Campaña Fidelity",
    category: "Campañas",
    image: Portada_Fidelity,
    slug: "fidelity",
    year: "2023",
    services: "Social Ads / Motion Graphics",
    description: "Fidelity buscaba aumentar su base de usuarios jóvenes en LinkedIn e Instagram. El desafío era romper con el ruido visual de las redes sociales mediante una campaña de performance que no se sintiera como publicidad tradicional, sino como contenido de valor visualmente impactante y altamente compartible.",
    solution: "Creamos un concepto visual basado en 'La anatomía de la confianza'. Desarrollamos una serie de micro-videos y posts estáticos utilizando motion graphics disruptivos y una dirección de arte minimalista. Los mensajes se estructuraron bajo una lógica de 'problema-solución' rápida. Gracias a esta estética diferenciada y a una segmentación precisa de los activos visuales, logramos superar el benchmark de CTR de la industria en un 15% durante el primer mes.",
    gallery: [Portada_Fidelity, "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200", "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1200"]
  }
];