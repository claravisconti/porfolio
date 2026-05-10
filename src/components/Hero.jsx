import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Videos
import hero from '../assets/videos/Hero.mp4';
import heroMobile from '../assets/videos/HeroMobile.mp4';

// Updated Image Imports
import posterMobile from '../assets/images/Hero/HeroMobile.webp';

export default function Hero() {
  const { t } = useTranslation();

  const [hasScrolled, setHasScrolled] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);

  // Determine mobile immediately
  const isMobile = useMemo(() => {
    return window.matchMedia('(max-width: 768px)').matches;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) setHasScrolled(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // LÓGICA DE CARGA: 
    // En Desktop cargamos el video rápido (0ms) porque no hay imagen.
    // En Mobile esperamos (800ms) para que la imagen cargue primero.
    const delay = isMobile ? 800 : 0;
    const videoTimer = setTimeout(() => {
      setLoadVideo(true);
    }, delay);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(videoTimer);
    };
  }, [hasScrolled, isMobile]);

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
            SOLO MOBILE: 
            La imagen solo se renderiza si es Mobile.
        */}
        {isMobile && (
          <img
            src={posterMobile}
            alt="Clara Visconti Artist"
            className="w-full h-full object-cover absolute inset-0"
            fetchpriority="high" 
            loading="eager"
            decoding="async"
          />
        )}

        {/* VIDEO LAYER */}
        {loadVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              loadVideo ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
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