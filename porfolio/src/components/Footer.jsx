import React from 'react';
import { Link } from 'react-router-dom';
import { FaBehance, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5'; // Cambié a este para que haga mejor juego visual con los otros

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-24 pb-12 px-6 md:px-24 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">

        {/* Columna 1: Branding / Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h3 className="text-4xl font-black tracking-tighter uppercase">
            Clara Visconti<span className="text-[#00adb5]">.</span>
          </h3>
          <p className="text-gray-700 text-sm font-light max-w-[250px] leading-relaxed italic">
            Diseño con propósito, estética minimalista y visión estratégica.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">Explorar</h4>
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#00adb5] transition-colors">Home</Link>
            <Link to="/portfolio" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#00adb5] transition-colors">Portfolio</Link>
            <Link to="/about" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#00adb5] transition-colors">Sobre Mí</Link>
            <Link to="/contact" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#00adb5] transition-colors">Contacto</Link>
          </nav>
        </div>

        {/* Columna 3: Redes e Iconos (Incluyendo Mail) */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-8">
          <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">Seguime</h4>

          <div className="flex gap-8 text-2xl justify-center md:justify-end items-center">
            {/* Icono de Mail integrado */}
            <a
              href="mailto:mclaravisconti@gmail.com"
              className="hover:text-[#00adb5] transition-colors duration-300"
              title="Email"
            >
              <IoMailOutline />
            </a>

            <a
              href="https://www.behance.net/mclaravisconti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00adb5] transition-colors duration-300"
              title="Behance"
            >
              <FaBehance />
            </a>
            {/* <a href="#" className="hover:text-[#00adb5] transition-colors duration-300" title="Instagram">
              <FaInstagram />
            </a>
            
            <a href="#" className="hover:text-[#00adb5] transition-colors duration-300" title="Facebook">
              <FaFacebookF size={20} /> 
            </a> */}
          </div>
        </div>

      </div>

      {/* Copyright Inferior */}
      <div className="max-w-[90rem] mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col items-center">
        <p className="text-[9px] text-gray-600 uppercase tracking-[0.5em] text-center font-medium">
          © 2026 Clara Visconti. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}