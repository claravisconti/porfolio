import React from 'react';
import { Link } from 'react-router-dom';
import { FaBehance, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-24 pb-12 px-6 md:px-24 relative overflow-hidden">
      
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        
        {/* Columna 1: Redes Sociales */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
          <h3 className="text-3xl font-bold tracking-tighter">Clara Visconti</h3>
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Mis redes</p>
            <div className="flex gap-8 text-xl justify-center md:justify-start">
              <a href="#" className="hover:text-[#00adb5] transition-colors"><FaBehance /></a>
              <a href="#" className="hover:text-[#00adb5] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#00adb5] transition-colors"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        {/* Columna 2: Navegación (Repite el Nav) */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">Explorar</h4>
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-sm uppercase tracking-widest hover:text-[#00adb5] transition-colors">Home</Link>
            <Link to="/portfolio" className="text-sm uppercase tracking-widest hover:text-[#00adb5] transition-colors">Portfolio</Link>
            <Link to="/about" className="text-sm uppercase tracking-widest hover:text-[#00adb5] transition-colors">Sobre Mí</Link>
            <Link to="/contacto" className="text-sm uppercase tracking-widest hover:text-[#00adb5] transition-colors">Contacto</Link>
          </nav>
        </div>

        {/* Columna 3: Contactame */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-8">
          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">Contactame</h4>
          <div className="space-y-1">
            <a 
              href="mailto:mclaravisconti@gmail.com" 
              className="text-white hover:text-[#00adb5] transition-colors font-light text-lg block"
            >
              mclaravisconti@gmail.com
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Inferior */}
      <div className="max-w-[90rem] mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] text-center">
          © 2026 Clara Visconti.  TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}