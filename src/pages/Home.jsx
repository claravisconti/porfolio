import Hero from '../components/Hero';
import Services from '../components/Services';
import Typewriter from '../components/Typewriter';
import PortfolioPreview from '../components/PortfolioPreview';
import Expertise from '../components/Expertise';
import Testimonials from '../components/Testimonials';
import LargeTextSlider from '../components/LargeTextSlider'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Home() {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    const hash = window.location.hash; // "#/?lang=en"
    const [path, queryString] = hash.split('?');

    if (!queryString) return;

    const params = new URLSearchParams(queryString);
    const lang = params.get('lang');

    if (lang) {
      i18n.changeLanguage(lang);

      // 🔥 borrar el query param
      window.history.replaceState(null, '', path); // "#/"
    }
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <Typewriter />
      <PortfolioPreview/>
      <Testimonials/>
      <Expertise/>
      <LargeTextSlider/>
    </>
  );
}