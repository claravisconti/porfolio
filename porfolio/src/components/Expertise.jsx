import React from 'react';

const skills = [
  { name: "Web Design", percentage: 46 },
  { name: "Marketing", percentage: 27 },
  { name: "Development", percentage: 60 },
  { name: "Ui & UX", percentage: 39 },
];

export default function Expertise() {
  return (
    /* hidden: no se muestra en móviles
       md:block: aparece a partir de tablets/desktop */
    <section className="hidden md:block bg-white py-32 px-24">
      <div className="max-w-[90rem] mx-auto grid grid-cols-2 gap-32 items-start">
        
        {/* Columna Izquierda: Título y Párrafo */}
        <div className="space-y-10">
          <h2 className="text-[3.5rem] font-bold text-black leading-[1.1] tracking-tighter">
            Our agency’s <br /> fields of expertise
          </h2>
          
          <div className="flex gap-8 items-start">
            {/* Línea horizontal estética */}
            <div className="w-16 h-[1px] bg-black mt-4 flex-shrink-0"></div>
            <p className="text-gray-500 text-lg leading-relaxed font-light max-w-md">
              Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. 
              Quisque id diam vel quam elementum. Sit amet cursus sit amet dictum 
              sit amet justo donec ete.
            </p>
          </div>
        </div>

        {/* Columna Derecha: Progress Bars */}
        <div className="space-y-14 w-full pt-4">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-end mb-4">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-black">
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-black">
                  {skill.percentage}%
                </span>
              </div>
              
              {/* Carril de la barra */}
              <div className="relative w-full h-[1px] bg-gray-200">
                {/* Progreso real */}
                <div 
                  className="absolute top-0 left-0 h-full bg-black transition-all duration-[2000ms] ease-in-out"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
                
                {/* El "indicador" vertical al final de la barra */}
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