import React from 'react';
import { Link } from 'react-router-dom';
import { FaBehance, FaLinkedin, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5'; // Cambié a este para que haga mejor juego visual con los otros
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

          <div className="flex gap-8 text-2xl justify-center md:justify-end items-center">
            {/* Icono de Mail redirigiendo a Gmail Web */}

            <a
              href="https://wa.me/5491100000000?text=Hola%20Clara!%20Me%20gustaría%20consultarte%20por%20un%20proyecto."
              className="hover:text-[#000000] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat de WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mclaravisconti@gmail.com&su=Consulta desde Portfolio&body=Hola Clara,"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000] transition-colors duration-300"
              title="Enviar Email"
            >
              <IoMailOutline />
            </a>

            <a
              href="https://www.behance.net/mariaclaravisconti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000] transition-colors duration-300"
              title="Behance"
            >
              <FaBehance />
            </a>
            <a href="https://www.linkedin.com/in/mariaclaravisconti" className="hover:text-[#000000] transition-colors duration-300" target="_blank"
              rel="noopener noreferrer" title="LinkedinW">

              <FaLinkedin />
            </a>
            
            {/* <a href="#" className="hover:text-[#00adb5] transition-colors duration-300" title="Facebook">
              <FaFacebookF size={20} /> 
            </a>  */}
          </div>
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