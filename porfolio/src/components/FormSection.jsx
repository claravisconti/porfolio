import React from 'react';

export default function FormSection() {
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
            {/* Localidad 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tighter">Buenos Aires</h3>
              <div className="w-8 h-[1px] bg-gray-300 mb-4"></div>
              <div className="text-sm space-y-1 text-gray-600 tracking-wide font-light">
                <p>mclaravisconti@gmail.com</p>
                {/* <p>+54 9 11 2485 5678</p> */}
              </div>
            </div>

            {/* Localidad 2 o Información Extra */}
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
          <h2 className="text-3xl font-bold mb-12 tracking-tight"></h2>
          
          <form className="space-y-10">
            {/* Input Nombre */}
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-black transition-colors">
                Nombre
              </label>
              <input 
                type="text" 
                className="w-full border-b border-black py-2 focus:outline-none focus:border-[#00adb5] transition-colors bg-transparent text-lg font-light"
                placeholder=""
              />
            </div>

            {/* Input Email */}
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-black transition-colors">
                Correo
              </label>
              <input 
                type="email" 
                className="w-full border-b border-black py-2 focus:outline-none focus:border-[#00adb5] transition-colors bg-transparent text-lg font-light"
              />
            </div>

            {/* Input Mensaje */}
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-black transition-colors">
                Mensaje
              </label>
              <textarea 
                rows="4"
                className="w-full border-b border-black py-2 focus:outline-none focus:border-[#00adb5] transition-colors bg-transparent text-lg font-light resize-none"
              ></textarea>
            </div>

            {/* Botón Submit */}
            <div className="pt-6">
              <button 
                type="submit"
                className="relative inline-block px-12 py-4 group overflow-hidden border border-black"
              >
                <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500">
                  Enviar
                </span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}