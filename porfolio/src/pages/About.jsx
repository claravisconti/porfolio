import Banner from '../components/Banner';
import Expertise from '../components/Expertise';
import Services from "../components/Services";

export default function About() {
  return (
    <div>
      <Banner 
        title="Sobre mí" 
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600" 
      />
      
      {/* Aquí debajo va el resto del código de contacto que ya armamos */}
      <div className="max-w-[90rem] mx-auto grid ...">
        <Expertise/>
        <Services/>
         
      </div>
    </div>
  );
}