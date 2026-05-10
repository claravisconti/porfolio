import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import hero from '../assets/videos/Hero.mp4';
import heroMobile from '../assets/videos/HeroMobile.webm';
import poster from '../assets/images/Hero/Hero1.webp';

export default function Hero() {
  const { t } = useTranslation();

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isFirstRender = useRef(true);

  // detectar mobile sin reflows repetidos
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    setIsMobile(mobile);
  }, []);

  // scroll passive + sin overhead
  useEffect(() => {
    const handleScroll = () => setHasScrolled(true);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[100svh] bg-black overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />

        {isMobile ? (
          // 🧠 MOBILE: NO autoplay video → solo poster (gran mejora LCP)
          <img
            src={poster}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={poster}
            className="w-full h-full object-cover"
          >
            <source src={hero} type="video/mp4" />
          </video>
        )}
      </div>

      {/* CONTENT */}
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