import React from 'react';

const skills = [
  { name: "Diseño Web", percentage: 90 },
  { name: "Mobile", percentage: 85 },
  { name: "Packaging", percentage: 80 },
  { name: "Campañas", percentage: 75 },
];

export default function Expertise() {
  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
        
        {/* Columna Izquierda */}
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#00adb5] font-bold">
              Especialidades
            </p>
            <h2 className="text-5xl md:text-[3.5rem] font-bold text-black leading-[1.1] tracking-tighter">
              Mis áreas de <br className="hidden md:block" /> experiencia
            </h2>
          </div>
          
          <div className="flex gap-6 md:gap-8 items-start">
            <div className="w-12 md:w-16 h-[1px] bg-black mt-4 flex-shrink-0"></div>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light max-w-md italic">
              Acompaño cada proyecto con una visión estratégica y creativa, 
              buscando siempre el equilibrio entre la estética minimalista 
              y la funcionalidad necesaria para cada marca.
            </p>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-10 md:space-y-14 w-full pt-4">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] text-black">
                  {skill.name}
                </span>
                <span className="text-xs md:text-sm font-bold text-black">
                  {skill.percentage}%
                </span>
              </div>
              
              <div className="relative w-full h-[1px] bg-gray-200">
                {/* Barra de progreso */}
                <div 
                  className="absolute top-0 left-0 h-full bg-black transition-all duration-[2000ms] ease-in-out"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
                
                {/* Indicador visual (puntero) */}
                <div 
                  className="absolute top-[-3px] h-[7px] w-[2px] bg-black transition-all duration-[2000ms] ease-in-out"
                  style={{ left: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}