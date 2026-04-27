import React from 'react';
import { Link } from 'react-router-dom';
import { projects as realProjects } from '../data/projects'; // Ajusta la ruta

// Definimos las posiciones visuales de la grilla (las clases de Tailwind que ya tenías)
const gridLayout = [
  "md:col-start-1 md:row-start-1 md:row-end-5", // Col 1 arriba
  "md:col-start-1 md:row-start-5 md:row-end-9", // Col 1 abajo
  "md:col-start-2 md:row-start-1 md:row-end-6", // Col 2 arriba
  "md:col-start-2 md:row-start-6 md:row-end-9", // Col 2 abajo
  "md:col-start-3 md:row-start-1 md:row-end-5", // Col 3 arriba
  "md:col-start-3 md:row-start-5 md:row-end-9", // Col 3 abajo
  "md:col-start-4 md:row-start-1 md:row-end-4", // Col 4 arriba
  "md:col-start-4 md:row-start-4 md:row-end-9", // Col 4 abajo
];

export default function PortfolioPreview() {
  // Tomamos los primeros 8 proyectos de tu archivo JS
  const previewProjects = realProjects.slice().sort(() => Math.random() - 0.5).slice(0, 8);

  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="w-full">
        
        {/* Grilla principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-8 gap-0 h-auto md:h-[130vh]">
          {previewProjects.map((project, index) => (
            <Link 
              to={`/portfolio/project/${project.slug}`}
              key={project.id || index} 
              className={`relative overflow-hidden group cursor-pointer border-[0.5px] border-white/10 bg-gray-100 ${gridLayout[index]}`}
            >
              {/* Imagen Real del Proyecto */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              {/* Overlay con Información Real */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex flex-col items-center justify-center p-4">
                <span className="text-[10px] text-accent opacity-0 group-hover:opacity-100 uppercase tracking-[0.3em] mb-2 transition-all duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="text-white opacity-0 group-hover:opacity-100 font-bold tracking-[0.2em] uppercase text-center text-sm md:text-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {project.title}
                </h3>
                <div className="w-0 group-hover:w-12 h-[1px] bg-accent mt-4 transition-all duration-700 delay-200"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Botón View All Projects */}
        <div className="py-12 md:py-20 flex justify-center bg-white w-full">
          <Link to="/portfolio" className="flex items-center gap-4 md:gap-6 group px-6">
            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#111] group-hover:text-accent transition-colors whitespace-nowrap">
              Ver todos los proyectos
            </span>
            
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 transition-all duration-500 group-hover:border-accent">
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10 text-base md:text-lg group-hover:text-white transition-colors">
                →
              </span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}