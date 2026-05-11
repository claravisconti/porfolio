import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const [hasScrolled, setHasScrolled] = useState(false);

  // Determinar si es mobile inmediatamente
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

  /**
   * IMPORTANT:
   * Al estar en /public, ya no usamos 'import'.
   * Usamos el string directo de la ruta.
   */
  const videoSrc = isMobile ? "/videos/HeroMobile.mp4" : "/videos/Hero.mp4";

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
            Usamos 'key' para que React refresque el video si cambia el videoSrc.
            'preload="auto"' ayuda a que el buffer empiece lo antes posible.
        */}
        <video
          key={videoSrc}
          preload="auto"
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