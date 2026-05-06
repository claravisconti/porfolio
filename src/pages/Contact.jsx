import Banner from '../components/Banner';
import FormSection from "../components/FormSection";
import Hero from '../assets/images/Hero/Hero1.webp'
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <Banner
        title={t('nav.contact')}
        image={Hero}
      />
      {/* Aquí debajo va el resto del código de contacto que ya armamos */}
      <div className="max-w-[90rem] mx-auto grid ...">
        <FormSection />
      </div>
    </div>
  );
}