import Hero from '../components/Hero';
import Services from '../components/Services';
import Typewriter from '../components/Typewriter';
import PortfolioPreview from '../components/PortfolioPreview';
import Expertise from '../components/Expertise';
import Testimonials from '../components/Testimonials';


export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Typewriter />
      <PortfolioPreview/>
      <Expertise/>
      <Testimonials/>
    </>
  );
}