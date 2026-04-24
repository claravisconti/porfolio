import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function FormSection() {
  const form = useRef();
  const [status, setStatus] = useState(''); // '', 'enviando', 'exito', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('enviando');

    emailjs.sendForm(
      'service_075qthe', 
      'template_fstgil7', 
      form.current, 
      'vtg61ipfhKbdmTdoX'
    )
    .then(() => {
        setStatus('exito');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
    })
    .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
    });
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-24">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* COLUMNA IZQUIERDA: Información */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black">
              Escribime
            </h1>
            <div className="flex gap-4">
               <div className="w-12 h-[1px] bg-black mt-4"></div>
               <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light italic">
                 Estoy presente para dar vida a tus ideas. 
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tighter">Buenos Aires</h3>
              <div className="w-8 h-[1px] bg-gray-300 mb-4"></div>
              <div className="text-sm space-y-1 text-gray-600 tracking-wide font-light">
                <p>mclaravisconti@gmail.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tighter">Remoto</h3>
              <div className="w-8 h-[1px] bg-gray-300 mb-4"></div>
              <div className="text-sm space-y-1 text-gray-600 tracking-wide font-light">
                <p>Lunes a Viernes / 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Formulario */}
        <div className="bg-white">
          <form ref={form} onSubmit={sendEmail} className="space-y-10">
            
            {/* Input Asunto (Title) */}
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-black transition-colors">
                Asunto
              </label>
              <input 
                type="text" 
                name="title" 
                required
                className="w-full border-b border-black py-2 focus:outline-none focus:border-[#00adb5] transition-colors bg-transparent text-lg font-light"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            {/* Input Nombre */}
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-black transition-colors">
                Nombre
              </label>
              <input 
                type="text" 
                name="name" 
                required
                className="w-full border-b border-black py-2 focus:outline-none focus:border-[#00adb5] transition-colors bg-transparent text-lg font-light"
              />
            </div>

            {/* Input Email */}
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-black transition-colors">
                Correo
              </label>
              <input 
                type="email" 
                name="email" 
                required
                className="w-full border-b border-black py-2 focus:outline-none focus:border-[#00adb5] transition-colors bg-transparent text-lg font-light"
              />
            </div>

            {/* Input Mensaje */}
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-black transition-colors">
                Mensaje
              </label>
              <textarea 
                name="message" 
                rows="4"
                required
                className="w-full border-b border-black py-2 focus:outline-none focus:border-[#00adb5] transition-colors bg-transparent text-lg font-light resize-none"
              ></textarea>
            </div>

            {/* Botón Submit y Feedback */}
            <div className="pt-6 flex flex-col gap-4">
              <button 
                type="submit"
                disabled={status === 'enviando'}
                className="relative inline-block px-12 py-4 group overflow-hidden border border-black disabled:border-gray-300"
              >
                <span className={`relative z-10 text-[11px] font-bold uppercase tracking-[0.4em] transition-colors duration-500 ${status === 'enviando' ? 'text-gray-400' : 'group-hover:text-white'}`}>
                  {status === 'enviando' ? 'Enviando...' : 'Enviar'}
                </span>
                {status !== 'enviando' && (
                  <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                )}
              </button>

              {status === 'exito' && (
                <p className="text-[#00adb5] text-sm font-medium tracking-wide">¡Mensaje enviado con éxito!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium tracking-wide">Hubo un error. Intentá de nuevo.</p>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}