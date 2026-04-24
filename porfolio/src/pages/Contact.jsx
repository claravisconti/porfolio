import Banner from '../components/Banner';
import FormSection from "../components/FormSection";

export default function Contact() {
  return (
    <div>
      <Banner 
        title="Contacto" 
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600" 
      />
      
      {/* Aquí debajo va el resto del código de contacto que ya armamos */}
      <div className="max-w-[90rem] mx-auto grid ...">
         <FormSection/>
      </div>
    </div>
  );
}