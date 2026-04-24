import React from 'react';

const projects = [
  // Columna 1
  { id: 1, label: "Work", size: "md:col-start-1 md:row-start-1 md:row-end-5" },
  { id: 2, label: "KO", size: "md:col-start-1 md:row-start-5 md:row-end-9" },
  // Columna 2
  { id: 3, label: "BEAUTY.", size: "md:col-start-2 md:row-start-1 md:row-end-6" },
  { id: 4, label: "Logo", size: "md:col-start-2 md:row-start-6 md:row-end-9" },
  // Columna 3
  { id: 5, label: "MJ", size: "md:col-start-3 md:row-start-1 md:row-end-5" },
  { id: 6, label: "Fashion", size: "md:col-start-3 md:row-start-5 md:row-end-9" },
  // Columna 4
  { id: 7, label: "Mockup", size: "md:col-start-4 md:row-start-1 md:row-end-4" },
  { id: 8, label: "Portrait", size: "md:col-start-4 md:row-start-4 md:row-end-9" },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-white w-full overflow-hidden">
      {/* Eliminamos el max-w y px para que sea full-width total */}
      <div className="w-full">
        
        {/* Grilla: gap-1 para una separación mínima elegante (o gap-0 si quieres que se toquen) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-8 gap-0 h-auto md:h-[130vh]">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`relative overflow-hidden group cursor-pointer ${project.size} border-[0.5px] border-white/5 bg-gray-100`}
            >
              <img 
                src={`https://picsum.photos/1200/1600?random=${project.id}`} 
                alt={project.label}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Overlay con el nombre del proyecto en hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 flex flex-col items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-black tracking-[0.5em] uppercase text-sm md:text-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {project.label}
                </span>
                <div className="w-0 group-hover:w-12 h-[1px] bg-white mt-4 transition-all duration-700 delay-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón "View All Projects" - Responsive */}
<div className="py-12 md:py-20 flex justify-center bg-white w-full">
  <button className="flex items-center gap-4 md:gap-6 group px-6">
    {/* Texto: Más pequeño en móvil (text-[9px]) y tracking ajustado */}
    <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#111] group-hover:text-[#00adb5] transition-colors whitespace-nowrap">
      Ver todos 
    </span>
    
    {/* Círculo: Tamaño adaptativo (w-10 en móvil, w-12 en desktop) */}
    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 transition-all duration-500 group-hover:border-[#00adb5]">
      {/* Efecto de llenado Teal */}
      <div className="absolute inset-0 bg-[#00adb5] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      
      {/* Flecha */}
      <span className="relative z-10 text-base md:text-lg group-hover:text-white transition-colors">
        →
      </span>
    </div>
  </button>
</div>
      </div>
    </section>
  );
}