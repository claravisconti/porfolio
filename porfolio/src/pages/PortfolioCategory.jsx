import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PortfolioMenu from '../components/PortfolioMenu';
import { projects } from '../data/projects';

export default function PortfolioCategory({ category }) {
  // Estado para el sistema de "Load More" (Cargar más)
  const [visibleCount, setVisibleCount] = useState(6);

  // Cada vez que el usuario cambia de categoría, reiniciamos el contador a 6
  useEffect(() => {
    setVisibleCount(6);
  }, [category]);

  // Lógica de filtrado: comparamos en minúsculas para evitar errores
  const allFilteredProjects = category.toLowerCase() === "todos" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === category.toLowerCase());

  // Cortamos el array para mostrar solo la cantidad permitida por el estado
  const displayProjects = allFilteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="bg-white min-h-screen pt-32 px-6 md:px-24">
      {/* Título de la Sección */}
      <h1 className="text-4xl font-bold text-center mb-4 uppercase tracking-tighter text-black">
        {category}
      </h1>
      
      {/* Menú de Subcategorías (Web, Marcas, Packaging, etc.) */}
      <PortfolioMenu />

      {/* Grilla de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        {displayProjects.map((project) => (
          <Link 
            to={`/portfolio/project/${project.slug}`} 
            key={project.id}
            className="group block"
          >
            <div className="overflow-hidden bg-gray-100 aspect-square relative cursor-pointer">
              {/* Imagen con efecto Zoom al hacer Hover */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay Negro con Información (Diseño Original) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] mb-2 text-gray-300">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  {project.title}
                </h3>
                {/* Línea decorativa que se expande */}
                <div className="w-8 h-[1px] bg-[#00adb5] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* BOTÓN LOAD MORE (Estética según referencia visual) */}
      {visibleCount < allFilteredProjects.length && (
        <div className="flex justify-center items-center py-20">
          <button 
            onClick={handleLoadMore}
            className="group flex items-center gap-6 focus:outline-none"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-black group-hover:text-[#00adb5] transition-colors">
              Load More
            </span>
            
            {/* Círculo con punto central */}
            <div className="relative w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:border-[#00adb5] transition-colors">
              <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:bg-[#00adb5] transition-all"></div>
            </div>
          </button>
        </div>
      )}

      {/* Mensaje de cortesía si no hay más proyectos */}
      {displayProjects.length === 0 && (
        <p className="text-center text-gray-400 uppercase tracking-widest py-20">
          Próximamente nuevos proyectos...
        </p>
      )}
    </div>
  );
}