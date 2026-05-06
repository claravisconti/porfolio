import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Videos ES
import heroES from '../assets/videos/ES/HeroES.webm';
import heroMobileES from '../assets/videos/ES/HeroMobileES.webm';

// Videos EN
import heroEN from '../assets/videos/EN/Hero.webm';
import heroMobileEN from '../assets/videos/EN/HeroMobile.webm';

export default function Hero() {
  const { t, i18n } = useTranslation();

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Scroll + resize
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setHasScrolled(true);
    };

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

  // Elegir idioma
  const isEnglish = i18n.language === 'en';

  // Elegir video según idioma + device
  const videoSrc = isMobile
    ? (isEnglish ? heroMobileEN : heroMobileES)
    : (isEnglish ? heroEN : heroES);

  return (
    <section className="relative w-full h-[100svh] bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <video
          key={`${isMobile}-${i18n.language}`} // 🔥 fuerza recarga al cambiar idioma o tamaño
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/webm" />
          {t('hero.error')}
        </video>
      </div>

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
            to="/About"
            className="px-12 py-5 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all text-center min-w-[200px]"
          >
            {t('hero.about')}
          </Link>
        </div>
      </div>
    </section>
  );
}