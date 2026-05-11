import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Videos
import hero from '../assets/videos/Hero.mp4';
import heroMobile from '../assets/videos/HeroMobile.mp4';

export default function Hero() {
  const { t } = useTranslation();
  const [hasScrolled, setHasScrolled] = useState(false);

  // Determinar si es mobile inmediatamente para elegir el video correcto
  const isMobile = useMemo(() => {
    return window.matchMedia('(max-width: 768px)').matches;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) setHasScrolled(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  const videoSrc = isMobile ? heroMobile : hero;

  return (
    <section
      className="relative w-full h-[100svh] bg-black overflow-hidden"
      aria-label="Hero Section"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* 
            VIDEO LAYER: 
            Se renderiza directamente sin condiciones de carga.
            Añadimos 'muted' y 'playsInline' para asegurar el autoPlay en todos los navegadores.
        */}
        <video
          key={videoSrc} // Ayuda a React a cambiar el video si se redimensiona la pantalla
          aria-hidden="true"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute inset-0"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 h-full flex flex-col justify-end items-center pb-20 px-6">
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
            {t('hero.see')}
          </Link>

          <Link
            to="/about"
            className="px-12 py-5 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all text-center min-w-[200px]"
          >
            {t('hero.about')}
          </Link>
        </div>
      </div>
    </section>
  );
}