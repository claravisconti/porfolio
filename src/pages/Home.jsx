import Hero from '../components/Hero';
import Services from '../components/Services';
import Typewriter from '../components/Typewriter';
import PortfolioPreview from '../components/PortfolioPreview';
import Expertise from '../components/Expertise';
import Testimonials from '../components/Testimonials';
import LargeTextSlider from '../components/LargeTextSlider';

import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

function LazySection({ children, height = 200 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: height }} />}
    </div>
  );
}

export default function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash;
    const [path, queryString] = hash.split('?');

    if (!queryString) return;

    const params = new URLSearchParams(queryString);
    const lang = params.get('lang');

    if (lang) {
      i18n.changeLanguage(lang);
      window.history.replaceState(null, '', path);
    }
  }, []);

  return (
    <>
      <h1 className="sr-only">
        Clara Visconti — UX/UI Designer especializada en diseño de interfaces, experiencias digitales y productos web
      </h1>

      {/* HERO SIEMPRE INMEDIATO */}
      <Hero />

      {/* 🔥 LAZY SECTIONS */}
      <LazySection>
        <Services />
      </LazySection>

      <LazySection>
        <Typewriter />
      </LazySection>

      <LazySection>
        <PortfolioPreview />
      </LazySection>

      <LazySection>
        <Testimonials />
      </LazySection>

      <LazySection>
        <Expertise />
      </LazySection>

      <LazySection>
        <LargeTextSlider />
      </LazySection>
    </>
  );
}