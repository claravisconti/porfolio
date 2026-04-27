// Links Portadas

import Portada_DigitalVector from '../assets/images/Web/Portada_DigitalVector.webp';
import Portada_Bloom from '../assets/images/Web/Portada_Bloom.webp';
import Portada_Fanfiction from '../assets/images/Web/Portada_Fanfiction.jpg';
import Portada_Payslip from '../assets/images/Web/Portada_Payslip.webp';
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

// Links Foto 1
import DigitalVector1 from '../assets/images/Web/Galeria/DigitalVector1.webp';
import Bloom1 from '../assets/images/Web/Galeria/Bloom1.webp';
import Fanfiction1 from '../assets/images/Web/Galeria/Fanfiction1.webp';
import Payslip1 from '../assets/images/Web/Galeria/Payslip1.webp';
import SweetBlossom1 from '../assets/images/Web/Galeria/SweetBlossom1.webp';
import Foodie1 from '../assets/images/Web/Galeria/Foodie1.webp';
import Orpheus1 from '../assets/images/Web/Galeria/Orpheus1.webp';
import Electrohaus1 from '../assets/images/Web/Galeria/Electrohaus1.webp';
import MagicTravel1 from '../assets/images/Web/Galeria/MagicTravel1.webp';
import Hermes1 from '../assets/images/Web/Galeria/Hermes1.webp';
import WineNight1 from '../assets/images/Web/Galeria/WineNight1.webp';

export const projects = [
  // --- WEB ---
  {
    id: 1,
    title: "Digital Vector",
    category: "Web",
    image: Portada_DigitalVector,
    slug: "digitalVector",
    year: "2026",
    services: "UI/UX Design / Development",
    description: "Digital Vector necesitaba una plataforma que comunicara su capacidad tecnológica sin caer en clichés de la industria. El desafío principal fue balancear la densidad de información técnica con una navegación fluida y minimalista que retuviera al usuario de perfil corporativo.",
    solution: "Se diseñó una interfaz basada en una retícula técnica rigurosa y tipografías neo-grotescas. Implementamos una arquitectura de información modular que permite escalar el contenido sin comprometer la velocidad de carga, utilizando micro-interacciones sutiles para guiar el ojo hacia los puntos de conversión.",
    gallery: [DigitalVector1]
  },
  {
    id: 2,
    title: "Bloom Indumentaria",
    category: "Web",
    image: Portada_Bloom,
    slug: "bloom",
    year: "2024",
    services: "Estrategia Visual / eCommerce",
    description: "La marca de autor Bloom enfrentaba una baja tasa de conversión debido a que su sitio anterior no reflejaba la exclusividad de sus prendas. El reto era crear una experiencia de compra premium que funcionara como una extensión física del taller de diseño.",
    solution: "La solución fue un enfoque fotocéntrico con un layout editorial. Optimizamos el flujo de compra reduciendo los pasos de checkout en un 40% e introdujimos un sistema de zoom de alta definición para apreciar las texturas, elevando la percepción de valor del producto.",
    gallery: [Bloom1]
  },
  {
    id: 3,
    title: "Fanfiction App",
    category: "Web",
    image: Portada_Fanfiction,
    slug: "fanfiction",
    year: "2025",
    services: "Product Design / UI Design",
    description: "El desafío consistía en diseñar una aplicación de lectura para una comunidad masiva donde la legibilidad era la prioridad absoluta. Los usuarios pasaban horas frente a la pantalla, por lo que la fatiga visual era el mayor obstáculo a resolver.",
    solution: "Implementamos un motor de renderizado de texto personalizable, permitiendo a los usuarios ajustar el kerning, interlineado y el contraste de fondo. Diseñamos un 'Modo Inmersivo' que oculta la interfaz de navegación al detectar el scroll de lectura continuo, mejorando la concentración.",
    gallery: [Fanfiction1]
  },
  {
    id: 4,
    title: "Payslip App",
    category: "Web",
    image: Portada_Payslip,
    slug: "payslip",
    year: "2023",
    services: "SaaS Design / HR Tech",
    description: "Payslip requería simplificar la visualización de datos contables complejos para empleados de diversos sectores. El desafío era transformar documentos legales áridos en interfaces claras, seguras y fáciles de interpretar en dispositivos móviles.",
    solution: "Desarrollamos un dashboard basado en tarjetas informativas con una jerarquía visual clara. Utilizamos visualización de datos dinámica para mostrar desgloses de ingresos y deducciones, permitiendo la descarga de documentos mediante un solo gesto de deslizamiento.",
    gallery: [Payslip1]
  },
  {
    id: 5,
    title: "Sweet Blossom",
    category: "Web",
    image: Portada_SweetBlossom,
    slug: "blossom",
    year: "2024",
    services: "Web Design / Branding",
    description: "Una pastelería boutique buscaba digitalizar sus pedidos personalizados. El desafío era transmitir la calidez y el detalle artesanal del local físico a través de una pantalla fría, sin perder la eficiencia operativa.",
    solution: "Creamos un configurador visual de pedidos donde el cliente puede armar su pastel en tiempo real. La interfaz utiliza una paleta cromática pastel equilibrada con una tipografía Serif elegante que refuerza la identidad artesanal de la marca.",
    gallery: [SweetBlossom1]
  },
  {
    id: 6,
    title: "Foodie App",
    category: "Web",
    image: Portada_Foodie,
    slug: "foodie",
    year: "2025",
    services: "Mobile Product Design",
    description: "En un mercado de delivery saturado, Foodie necesitaba diferenciarse. El reto era crear una interfaz de usuario que no solo fuera funcional, sino visualmente apetecible, priorizando el descubrimiento de nuevos sabores sobre la búsqueda transaccional.",
    solution: "Implementamos un feed infinito basado en imágenes de alta resolución y videos cortos. La navegación se centró en gestos naturales, permitiendo agregar ingredientes extra con un sistema de 'drag-and-drop' que hace el proceso de pedido más lúdico y rápido.",
    gallery: [Foodie1]
  },
  {
    id: 7,
    title: "Orpheus Opera",
    category: "Web",
    image: Portada_Orpheus,
    slug: "orpheus",
    year: "2023",
    services: "Digital Identity / UX Design",
    description: "La Ópera Orpheus buscaba atraer a una audiencia más joven. El desafío era romper con la percepción elitista del género mediante una web moderna, interactiva y accesible, manteniendo el respeto por la tradición clásica.",
    solution: "Desarrollamos un sitio oscuro con contrastes en oro y blanco. La pieza central fue un sistema de reserva de asientos en 3D que permite al usuario ver la perspectiva real desde su butaca antes de comprar, eliminando la incertidumbre del espectador.",
    gallery: [Orpheus1]
  },
  {
    id: 8,
    title: "Electrohaus Landing",
    category: "Web",
    image: Portada_Electrohaus,
    slug: "electrohaus",
    year: "2026",
    services: "Interaction Design / Event Web",
    description: "Para un festival de música electrónica industrial, el desafío era crear una landing page que generara expectativa (hype). La web debía sentirse como una extensión de la pista de baile: rítmica, oscura y cargada de energía.",
    solution: "Utilizamos animaciones basadas en WebGL que reaccionan al movimiento del cursor del usuario. El diseño utiliza una estética de 'brutalismo digital' con tipografías expandidas y efectos de glitch, capturando perfectamente el espíritu underground del evento.",
    gallery: [Electrohaus1]
  },
  {
    id: 9,
    title: "Magic Travel Game",
    category: "Web",
    image: Portada_MagicTravel,
    slug: "magictravel",
    year: "2022",
    services: "Game Web Design / UI",
    description: "El lanzamiento de este juego indie necesitaba una landing que sumergiera al jugador en su lore. El reto era presentar mecánicas de juego complejas de una forma visualmente simple y lúdica para incentivar el pre-registro.",
    solution: "Diseñamos una experiencia de scroll-paralax donde el usuario viaja a través de los diferentes mundos del juego. La interfaz integra elementos de la UI del juego, permitiendo al usuario 'probar' algunas interacciones básicas directamente en el navegador.",
    gallery: [MagicTravel1]
  },
  {
    id: 10,
    title: "Hermes Hotel",
    category: "Web",
    image: Portada_Hermes,
    slug: "hermes",
    year: "2019",
    services: "Luxury Web Design",
    description: "El Hotel Hermes requería una web que justificara su posicionamiento boutique de lujo. El desafío era lograr un diseño que fuera visualmente imponente pero extremadamente rápido, optimizado para el viajero internacional que reserva desde su móvil.",
    solution: "Implementamos un diseño minimalista donde el espacio en blanco es el protagonista. Utilizamos fotografía de alta gama y transiciones suaves entre páginas. La optimización técnica permitió que, a pesar de las imágenes pesadas, el sitio cargue en menos de 1.5 segundos.",
    gallery: [Hermes1]
  },
  {
    id: 11,
    title: "Wine Night",
    category: "Web",
    image: Portada_WineNight,
    slug: "winenight",
    year: "2021",
    services: "Event UI / Web Design",
    description: "Una serie de eventos de cata de vinos premium necesitaba un portal central. El desafío era crear un sistema que gestionara la exclusividad de los cupos y presentara la historia de cada bodega de forma elegante.",
    solution: "Se diseñó una interfaz con tonos burdeos y texturas de papel. Incluimos un sistema de reserva por membresía y una galería interactiva de botellas que permite explorar notas de cata antes de asistir al evento físico.",
    gallery: [WineNight1]
  },

  // --- EDITORIAL ---
  {
    id: 12,
    title: "Revista Maison",
    category: "Editorial",
    image: Portada_Maison,
    slug: "maison",
    year: "2022",
    services: "Editorial Design / Layout",
    description: "Maison es una revista de arquitectura que buscaba una renovación total. El desafío era crear una retícula flexible que permitiera alojar desde ensayos extensos hasta layouts fotográficos de gran formato sin perder la consistencia visual.",
    solution: "Establecimos un sistema de 12 columnas que permite variaciones asimétricas. La elección tipográfica mezcla una Serif humanista con una Sans-Serif técnica, reforzando el equilibrio entre el arte y la precisión arquitectónica de la publicación.",
    gallery: []
  },
  {
    id: 13,
    title: "Wine Manifiesto",
    category: "Editorial",
    image: Portada_Manifiesto,
    slug: "manifiesto",
    year: "2021",
    services: "Print Design / Art Direction",
    description: "Este libro objeto recopila las filosofías de los enólogos más disruptivos. El reto era diseñar un objeto físico que fuera tan sensorial como el vino mismo, utilizando el diseño editorial para contar historias de terroir.",
    solution: "La solución incluyó el uso de papeles texturizados y acabados en bajorrelieve. El diseño interior utiliza un flujo narrativo orgánico, con ilustraciones botánicas que conviven con una tipografía audaz y moderna, alejándose de los libros de vino tradicionales.",
    gallery: []
  },

  // --- PACKAGING ---
  {
    id: 14,
    title: "Silkylatte Leche",
    category: "Packaging",
    image: Portada_Sillkylatte,
    slug: "silkylatte",
    year: "2024",
    services: "Structural & Label Design",
    description: "Silkylatte necesitaba irrumpir en el mercado de leches vegetales orgánicas. El desafío era diferenciarse en una góndola llena de colores brillantes mediante una propuesta que gritara naturalidad y honestidad de marca.",
    solution: "Diseñamos un packaging con colores tierra y una textura de papel sin tratar. Las ilustraciones son grabados clásicos que comunican la tradición del origen orgánico. El resultado fue un incremento del 20% en la visibilidad del producto frente a la competencia directa.",
    gallery: []
  },
  {
    id: 15,
    title: "Silkylatte Botella",
    category: "Packaging",
    image: Portada_Sillkylatte_Botella,
    slug: "silkylatte_botella",
    year: "2025",
    services: "Luxury Packaging Design",
    description: "Para la edición limitada de Silkylatte en botella de vidrio, el reto era elevar el producto al estatus de 'luxury item'. Debía funcionar tanto en el hogar como en la mesa de un hotel de lujo.",
    solution: "Aplicamos serigrafía directa sobre el vidrio para eliminar etiquetas adhesivas. El diseño utiliza un minimalismo radical con acabados en foil de cobre para los detalles técnicos, logrando una estética atemporal que invita a reutilizar el envase.",
    gallery: []
  },
  {
    id: 16,
    title: "Fruits Jugo",
    category: "Packaging",
    image: Portada_Fruits,
    slug: "fruits",
    year: "2018",
    services: "Brand Identity / Packaging",
    description: "Fruits buscaba renovar su imagen para un público más consciente de la salud. El desafío era comunicar '100% fruta' sin utilizar las imágenes hiper-realistas y saturadas que inundan el mercado masivo.",
    solution: "Utilizamos un lenguaje visual basado en formas geométricas y colores planos que representan la fruta de manera abstracta pero reconocible. La transparencia estratégica del envase permite que el color real del jugo complete el diseño de la etiqueta.",
    gallery: []
  },
  {
    id: 17,
    title: "Crown Shampoo",
    category: "Packaging",
    image: Portada_Crown,
    slug: "crown",
    year: "2020",
    services: "Sustainable Packaging",
    description: "Crown requería un packaging sustentable para su línea premium de cuidado capilar. El reto era usar materiales reciclados (PCR) sin que el producto perdiera su percepción de alta calidad y lujo.",
    solution: "Desarrollamos una forma ergonómica única inspirada en piedras de río. El acabado mate del plástico reciclado se integró como una decisión de diseño, sumado a tipografías en bajorrelieve que reducen la necesidad de tintas contaminantes.",
    gallery: []
  },

  // --- CAMPAÑAS ---
  {
    id: 18,
    title: "Campaña Fidelity",
    category: "Campañas",
    image: Portada_Fidelity,
    slug: "fidelity",
    year: "2023",
    services: "Social Media Strategy",
    description: "Fidelity buscaba humanizar los servicios financieros para la Generación Z. El desafío era crear una campaña de redes sociales que fuera informativa pero que hablara el lenguaje visual rápido y dinámico de TikTok e Instagram.",
    solution: "Creamos un sistema de ilustración vibrante y animaciones fluidas que simplifican conceptos de inversión. La campaña logró un 40% más de engagement orgánico gracias a que el contenido se centraba en resolver dudas reales del usuario de forma visual.",
    gallery: []
  },
  {
    id: 19,
    title: "Consumer Pulse",
    category: "Campañas",
    image: Portada_ConsumerPulse,
    slug: "consumerPulse",
    year: "2025",
    services: "Data Visualization / Campaign",
    description: "Para un informe global de consumo, el reto era hacer que los datos densos fueran compartibles en LinkedIn. Debía servir como herramienta de venta B2B y como contenido de valor para la industria.",
    solution: "Transformamos 200 páginas de datos en una serie de infografías cinéticas. Diseñamos un sistema de iconos personalizados que permiten entender tendencias de mercado globales con un solo vistazo, posicionando a la marca como líder de opinión.",
    gallery: []
  },
  {
    id: 20,
    title: "Post Consumer",
    category: "Campañas",
    image: Portada_Consumer,
    slug: "consumer",
    year: "2022",
    services: "Social Design Strategy",
    description: "El desafío era estandarizar la comunicación visual de una marca de consumo masivo para sus equipos regionales. Se necesitaba un sistema flexible que mantuviera la coherencia sin importar el país de publicación.",
    solution: "Se creó un manual de diseño digital 'viviendo' en Figma, con componentes dinámicos que se ajustan automáticamente a diferentes formatos. Esto redujo los tiempos de producción gráfica de la marca en un 50% a nivel global.",
    gallery: []
  },
  {
    id: 21,
    title: "True Loyalty",
    category: "Campañas",
    image: Portada_TrueLoyalty,
    slug: "trueLoyalty",
    year: "2017",
    services: "Art Direction / Branding",
    description: "True Loyalty buscaba premiar la fidelidad de sus clientes de banca privada. El reto era diseñar una campaña que no se sintiera transaccional, sino como un reconocimiento genuino a la relación a largo plazo.",
    solution: "Utilizamos una dirección de arte basada en retratos íntimos y monocromáticos. La narrativa se centró en historias de vida reales apoyadas por la marca, logrando una conexión emocional que aumentó el índice de recomendación (NPS) del banco.",
    gallery: []
  },
  {
    id: 22,
    title: "Bloomberg Screentime",
    category: "Campañas",
    image: Portada_BloombergScreentime,
    slug: "bloombergScreentime",
    year: "2024",
    services: "Motion Graphics / Advertising",
    description: "Para el evento anual de medios de Bloomberg, el desafío era crear un sistema visual que representara la intersección entre el contenido y la tecnología de pantallas modernas.",
    solution: "Desarrollamos una identidad basada en el concepto de 'fluidez digital'. El sistema visual utiliza gradientes dinámicos y tipografía en movimiento que se adapta a cualquier tamaño de pantalla, desde smartwatches hasta vallas monumentales en Times Square.",
    gallery: []
  },
  {
    id: 23,
    title: "Post Drupal",
    category: "Campañas",
    image: Portada_Drupal,
    slug: "drupal",
    year: "2016",
    services: "Community Branding",
    description: "Drupal necesitaba revitalizar su comunicación para atraer a una nueva generación de desarrolladores. El reto era presentar a la comunidad técnica no solo como un software, sino como un ecosistema vivo de colaboración global.",
    solution: "Se diseñó una serie de ilustraciones conceptuales que transforman el código en formas orgánicas. La campaña 'Build Anything' mostró la versatilidad de la herramienta a través de casos de uso visualmente disruptivos en redes sociales.",
    gallery: []
  },
  {
    id: 24,
    title: "Advertising Week",
    category: "Campañas",
    image: Portada_AdvertisingWeek,
    slug: "advertisingWeek",
    year: "2023",
    services: "Event Branding / Real-time Design",
    description: "El reto era generar contenido visual atractivo en tiempo real durante una semana de conferencias masivas. Se necesitaba capturar la esencia de los ponentes más influyentes y distribuirla en redes sociales en cuestión de minutos.",
    solution: "Creamos un estudio de diseño 'in-situ' con plantillas dinámicas que permitían producir quotes visuales y resúmenes gráficos apenas terminaban las charlas. La campaña dominó la conversación orgánica de la industria durante todo el evento.",
    gallery: []
  },
  {
    id: 25,
    title: "Post DrupalCon",
    category: "Campañas",
    image: Portada_DrupalCon,
    slug: "drupalCon",
    year: "2021",
    services: "Event Identity / Motion",
    description: "En el primer evento post-pandemia, el desafío era generar una sensación de re-encuentro. La comunicación visual debía ser celebratoria, inclusiva y reflejar la madurez de la tecnología Drupal en el mercado enterprise.",
    solution: "Diseñamos un sistema visual basado en conexiones geométricas que representan la red global de talento. La campaña incluyó piezas animadas que celebraban el re-encuentro físico, logrando un récord de asistencia y registros anticipados.",
    gallery: []
  },
  {
    id: 26,
    title: "IWD Campaign",
    category: "Campañas",
    image: Portada_IWD,
    slug: "iwd",
    year: "2025",
    services: "Social Impact Design",
    description: "Para el Día Internacional de la Mujer, el reto era alejarse de los mensajes genéricos y corporativos. La campaña debía empoderar a las mujeres en tecnología de una forma visualmente única y no estereotipada.",
    solution: "Desarrollamos una serie de retratos ilustrados de mujeres pioneras en la tecnología con un estilo vanguardista. La narrativa se centró en 'El futuro es diverso', logrando un nivel de compartición sin precedentes en la historia digital de la marca.",
    gallery: []
  },
  {
    id: 27,
    title: "Save The Children",
    category: "Campañas",
    image: Portada_STC,
    slug: "stc",
    year: "2024",
    services: "Non-Profit Strategy",
    description: "El desafío era generar donaciones en una era de 'fatiga de información'. Necesitábamos una campaña visualmente poderosa que conectara al donante con la causa de una forma directa y sin filtros innecesarios.",
    solution: "Utilizamos una dirección de arte minimalista centrada en el blanco y negro con acentos rojos institucionales. La tipografía de gran escala gritaba los datos de impacto, mientras que la fotografía documental humanizaba la estadística, logrando un pico histórico en donaciones digitales.",
    gallery: []
  },
  {
    id: 28,
    title: "HCIC Branding",
    category: "Campañas",
    image: Portada_HCIC,
    slug: "hcic",
    year: "2026",
    services: "Healthcare Branding / Event",
    description: "Para la Healthcare Interactive Conference, el reto era diseñar una identidad que uniera la calidez humana de la medicina con la frialdad de la alta tecnología quirúrgica.",
    solution: "Se creó un logo dinámico que imita el ritmo cardíaco fusionado con circuitos digitales. La paleta de colores utiliza un azul médico moderno combinado con un naranja vibrante, simbolizando la innovación activa en el campo de la salud.",
    gallery: []
  }
];