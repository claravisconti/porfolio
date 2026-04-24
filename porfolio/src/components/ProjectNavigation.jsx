import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectNavigation({ currentId }) {
  // Buscamos el índice del proyecto actual
  const currentIndex = projects.findIndex(p => p.id === currentId);
  
  // Calculamos el anterior y el siguiente (con lógica circular opcional)
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <nav className="border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-24 flex justify-between items-center">
        
        {/* PREV PROJECT */}
        <div className="flex-1">
          {prevProject ? (
            <Link to={`/portfolio/project/${prevProject.slug}`} className="group flex items-center gap-4">
              <div className="w-16 h-16 hidden md:block overflow-hidden bg-gray-100">
                <img src={prevProject.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors flex items-center gap-2">
                <span className="text-lg">←</span> Prev
              </span>
            </Link>
          ) : <div />}
        </div>

        {/* ALL PROJECTS (Icono Cuadrícula) */}
        <div className="flex-none">
          <Link to="/portfolio" className="group">
            <div className="grid grid-cols-2 gap-1 w-5 h-5">
              <div className="bg-gray-300 group-hover:bg-black transition-colors"></div>
              <div className="bg-gray-300 group-hover:bg-black transition-colors"></div>
              <div className="bg-gray-300 group-hover:bg-black transition-colors"></div>
              <div className="bg-gray-300 group-hover:bg-black transition-colors"></div>
            </div>
          </Link>
        </div>

        {/* NEXT PROJECT */}
        <div className="flex-1 flex justify-end">
          {nextProject ? (
            <Link to={`/portfolio/project/${nextProject.slug}`} className="group flex items-center gap-4 text-right">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors flex items-center gap-2">
                Next <span className="text-lg">→</span>
              </span>
              <div className="w-16 h-16 hidden md:block overflow-hidden bg-gray-100">
                <img src={nextProject.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
              </div>
            </Link>
          ) : <div />}
        </div>

      </div>
    </nav>
  );
}