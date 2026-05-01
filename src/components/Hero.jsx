import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importación de archivos
import heroVideo from '../assets/videos/Hero.webm';
import heroVideoMp4 from '../assets/videos/Hero.mp4';
import heroVideoMobile from '../assets/videos/HeroMobile.webm';
import heroVideoMobileMp4 from '../assets/videos/HeroMobile.mp4';

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // 1. Lógica para el scroll
    const handleScroll = () => {
      if (window.scrollY > 10) setHasScrolled(true);
    };

    // 2. Lógica para detectar cambio de pantalla (Resize)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative w-full h-[100svh] bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* 
          IMPORTANTE: La "key" basada en isMobile obliga a React a 
          destruir y recrear el elemento video cuando pasas de PC a Mobile,
          asegurando que cargue el archivo correcto.
        */}
        <video
          key={isMobile ? 'video-mobile' : 'video-desktop'}
          autoPlay
          loop
          muted
          playsInline
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