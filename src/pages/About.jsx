import Banner from '../components/Banner';
import Expertise from '../components/Expertise';
import Services from "../components/Services";
import Hero from '../assets/images/Hero1.webp'

export default function About() {
  return (
    <div>
      <Banner 
        title="Sobre mí" 
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