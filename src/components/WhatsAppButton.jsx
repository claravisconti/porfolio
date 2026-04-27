import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = "549115491124851989"; // Acordate de poner tu número real
  const message = "Hola Clara!...";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[999] 
                 w-14 h-14 
                 bg-[#25D366] text-white 
                 rounded-full shadow-2xl 
                 flex items-center justify-center 
                 transition-all duration-300 ease-in-out 
                 hover:scale-110 hover:bg-[#20ba5a]"
      title="Contactame por WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      
      {/* Borramos el span que estaba acá para quitar el círculo blanco */}
    </a>
  );
}