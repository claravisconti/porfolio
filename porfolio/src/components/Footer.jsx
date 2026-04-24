import React from 'react';
import { FaBehance, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-24 pb-12 px-6 md:px-24 relative overflow-hidden">
      
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        
        {/* Columna 1: Branding y Social */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h3 className="text-3xl font-bold tracking-tighter">Clara Visconti</h3>
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Follow Us</p>
            <div className="flex gap-8 text-xl justify-center">
              <a href="#" className="hover:text-[#00adb5] transition-colors"><FaBehance /></a>
              <a href="#" className="hover:text-[#00adb5] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#00adb5] transition-colors"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        {/* Columna 2: Get In Touch */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h4 className="text-lg font-bold tracking-tight uppercase">Get In Touch</h4>
          <a 
            href="mailto:mclaravisconti@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors font-light italic text-lg"
          >
            mclaravisconti@gmail.com
          </a>
        </div>

        {/* Columna 3: Contact Us */}
        <div className="flex flex-col items-center text-center space-y-8">
          <h4 className="text-lg font-bold tracking-tight uppercase">Contact Us</h4>
          <p className="text-gray-400 font-light text-lg">
            +44 (0) 2920 090 505
          </p>
        </div>

      </div>

      {/* Copyright Inferior */}
      <div className="max-w-[90rem] mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em]">
          © 2026 Clara Visconti AGENCY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[9px] text-gray-600 uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}