import React from 'react';
import { Link } from 'react-router-dom';
import Socials from "../components/Socials.jsx";
import Iso from '../assets/images/Iso_blanco.svg';

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-24 pb-12 px-6 md:px-24 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">

        {/* Columna 1: Branding / Logo */}
        {/* Columna 1: Branding / Logo Centrado */}
        <div className="flex flex-col items-center text-center space-y-6">

          <Link to="/" className="flex flex-col items-center gap-4 group outline-none">
            {/* Isotipo SVG - Ajustado el tamaño a w-20/h-20 porque w-30 es muy grande (120px) */}
            <img
              src={Iso}
              alt="Clara Visconti Logo"
              className="w-20 h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:rotate-12"
            />

            {/* Nombre en Chalet - Descomentado y centrado */}
            <h3 className="font-logo text-3xl tracking-tight leading-none text-white">
              Clara Visconti<span className="text-accent">.</span>
            </h3>
          </Link>
        </div>

        {/* Columna 2: Navegación */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">Explorar</h4>
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#000000] transition-colors">Home</Link>
            <Link to="/portfolio" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#000000] transition-colors">Portfolio</Link>
            <Link to="/about" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#000000] transition-colors">Sobre Mí</Link>
            <Link to="/contact" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#000000] transition-colors">Contacto</Link>
          </nav>
        </div>

        {/* Columna 3: Redes e Iconos (Incluyendo Mail) */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-8">
          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">Seguime</h4>
          <Socials />
        </div>
      </div>

      {/* Copyright Inferior */}
      <div className="max-w-[90rem] mx-auto mt-20 pt-10 border-white/5 flex flex-col items-center">
        <p className="text-[9px] text-gray-600 uppercase tracking-[0.5em] text-center font-medium">
          © 2026 Clara Visconti. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}