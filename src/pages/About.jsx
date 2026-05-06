import Banner from '../components/Banner';
import Expertise from '../components/Expertise';
import Services from "../components/Services";
import Hero from '../assets/images/Hero/Hero1.webp'
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <div>
      <Banner 
        title={t('nav.about')}
        image={Hero} 
      />
      
      {/* Aquí debajo va el resto del código de contacto que ya armamos */}
      <div className="max-w-[90rem] mx-auto grid ...">
        <Expertise/>
        <Services/>
         
      </div>
    </div>
  );
}