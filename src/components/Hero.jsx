import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importas ambos formatos para asegurar compatibilidad total
import heroVideo from '../assets/videos/Hero.webm';
import heroVideoMp4 from '../assets/videos/Hero.mp4';
import heroVideoMobile from '../assets/videos/HeroMobile.webm';
import heroVideoMobileMp4 from '../assets/videos/HeroMobile.mp4';

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setHasScrolled(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectamos si es mobile para renderizar el grupo de fuentes correcto
  const isMobile = window.innerWidth < 768;

  return (
    <section className="relative w-full h-[100svh] bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        <video
          autoPlay
          loop
          muted
          playsInline
          key={isMobile ? 'mobile' : 'desktop'}
          className="w-full h-full object-cover"
        >
          {isMobile ? (
            <>
              <source src={heroVideoMobile} type="video/webm" />
              <source src={heroVideoMobileMp4} type="video/mp4" />
            </>
          ) : (
            <>
              <source src={heroVideo} type="video/webm" />
              <source src={heroVideoMp4} type="video/mp4" />
            </>
          )}
          {/* Si nada de lo anterior funciona, mostrará este texto o una imagen de fondo */}
          Tu navegador no soporta videos.
        </video>
      </div>

      <div className="relative z-20 h-full flex flex-col justify-end items-center pb-20 px-6">
        <div 
          className={`flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none justify-center transition-all duration-1000 ease-out ${
            hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <Link to="/portfolio" className="px-12 py-5 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all text-center min-w-[200px]">
            Ver proyectos
          </Link>
          <Link to="/About" className="px-12 py-5 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all text-center min-w-[200px]">
            Sobre mí
          </Link>
        </div>
      </div>
    </section>
  );
}