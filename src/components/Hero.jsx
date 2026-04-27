import { useState, useEffect } from 'react';
import Hero1 from '../assets/images/Hero/Hero1.webp';
import Hero2 from '../assets/images/Hero/Hero2.webp';
// import hero3 from '../assets/Hero/hero-art.jpg';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: '01',
    title: "DE LA IDEA\nAL IMPACTO.",
    subtitle: "Diseño y dirección de arte desde Argentina. Transformo ideas en identidades visuales con propósito.",
    image: Hero1
  },
  {
    id: '02',
    title: "SIMPLICIDAD\nCONSCIENTE.",
    subtitle: "Busco la esencia de cada marca para crear mensajes visuales claros, potentes y atemporales.",
    image: Hero2
  }
  // {
  //   id: '03',
  //   title: "ESTRATEGIA\nVISUAL.",
  //   subtitle: "Construyo identidades digitales que no solo se ven bien, sino que perduran y evolucionan.",
  //   image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2069"
  // }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100svh] bg-black overflow-hidden">
      {/* Imágenes de fondo */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      ))}

      {/* Contenido Principal */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-24">
        <div className="max-w-5xl w-full">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-[140px] font-black leading-[1] md:leading-[0.8] tracking-tighter whitespace-pre-line mb-6 md:mb-8 drop-shadow-2xl">
            {slides[current].title}
          </h1>

          <p className="text-white/80 text-base md:text-xl max-w-xs md:max-w-md font-light mb-8 md:mb-12">
            {slides[current].subtitle}
          </p>

          {/* Botones: Ajuste de color en el hover */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Botón Primario */}
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-10 py-4 md:px-12 md:py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all text-center"
            >
              Ver proyectos
            </Link>

            {/* Botón Secundario */}
            <Link
              to="/About"
              className="w-full sm:w-auto px-10 py-4 md:px-12 md:py-5 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all text-center"
            >
              Sobre mí
            </Link>
          </div>

        </div>
      </div>

      {/* Navegación (Números): También cambiamos la línea activa a blanco/gris claro */}
      <div className="absolute bottom-8 left-6 md:left-24 z-30 hidden sm:flex items-center gap-6 md:gap-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className="group flex items-center gap-2 md:gap-4"
          >
            <span className={`text-[10px] md:text-[11px] font-bold tracking-widest transition-all ${index === current ? 'text-white scale-110' : 'text-white/40' // 👈 LÍNEA ACTIVA A BLANCO
              }`}>
              {slide.id}
            </span>
            <div className={`h-[1px] transition-all duration-500 ${index === current ? 'w-10 md:w-16 bg-white' : 'w-0 bg-white/20 group-hover:w-8' // 👈 LÍNEA ACTIVA A BLANCO
              }`}></div>
          </button>
        ))}
      </div>
    </section>
  );
}