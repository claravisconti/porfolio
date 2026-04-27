import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import Socials from "../components/Socials.jsx";
import Iso from '../assets/images/Iso_blanco.svg';

export default function Footer() {
  const navigate = useNavigate();

  // Función para scrollear y navegar
  const handleNavigation = (path) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // 'instant' para que no se vea el desplazamiento
    });
    navigate(path);
  };

  return (
    <footer className="bg-accent text-white pt-24 pb-12 px-6 md:px-24 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">

        {/* Columna 1: Branding / Logo */}
        <div className="flex flex-col items-center text-center space-y-6">
          <button 
            onClick={() => handleNavigation('/')} 
            className="flex flex-col items-center gap-4 group outline-none"
          >
            <img
              src={Iso}
              alt="Clara Visconti Logo"
              className="w-20 h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:rotate-12"
            />
            <h3 className="font-logo text-3xl tracking-tight leading-none text-white">
              Clara Visconti
            </h3>
          </button>
        </div>

        {/* Columna 2: Navegación */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/50">Explorar</h4>
          <nav className="flex flex-col gap-4">
            {/* Reemplazamos Link por botones que disparan handleNavigation */}
            <button onClick={() => handleNavigation('/')} className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors">Home</button>
            <button onClick={() => handleNavigation('/portfolio')} className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors">Portfolio</button>
            <button onClick={() => handleNavigation('/about')} className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors">Sobre Mí</button>
            <button onClick={() => handleNavigation('/contact')} className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors">Contacto</button>
          </nav>
        </div>

        {/* Columna 3: Redes */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-8">
          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/50">Seguime</h4>
          <Socials />
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[90rem] mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col items-center">
        <p className="text-[9px] text-white/40 uppercase tracking-[0.5em] text-center font-medium">
          © 2026 Clara Visconti. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}