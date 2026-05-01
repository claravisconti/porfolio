import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/videos/Hero.webm';

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparecen los botones apenas se detecta movimiento (10px)
      if (window.scrollY > 10) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[100svh] bg-black overflow-hidden">
      {/* Video de Fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/webm" />
        </video>
      </div>

      {/* Contenedor de Botones (CTA) */}
      <div className="relative z-20 h-full flex flex-col justify-end items-center pb-16 px-6">
        <div 
          className={`flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none justify-center transition-all duration-1000 ease-out ${
            hasScrolled 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <Link
            to="/portfolio"
            className="px-12 py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all text-center min-w-[200px]"
          >
            Ver proyectos
          </Link>

          <Link
            to="/About"
            className="px-12 py-5 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all text-center min-w-[200px]"
          >
            Sobre mí
          </Link>
        </div>
      </div>
    </section>
  );
}