import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PortfolioMenu from '../components/PortfolioMenu';
import { projects } from '../data/projects';

export default function PortfolioCategory({ category }) {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6); // Reset al cambiar de categoría
  }, [category]);

  const allFilteredProjects = projects.filter(p => 
    category.toLowerCase() === "todos" || p.category.toLowerCase() === category.toLowerCase()
  );

  const displayProjects = allFilteredProjects.slice(0, visibleCount);

  return (
    <div className="bg-white min-h-screen pt-32 px-6 md:px-24">
      <h1 className="text-4xl font-black text-center mb-4 uppercase tracking-tighter">{category}</h1>
      <PortfolioMenu />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
        {displayProjects.map((project) => (
          <Link to={`/portfolio/project/${project.slug}`} key={project.id} className="group">
            <div className="overflow-hidden bg-gray-100 aspect-square relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] mb-2 text-gray-300">{project.category}</p>
                <h3 className="text-xl font-bold uppercase tracking-tight">{project.title}</h3>
                <div className="w-8 h-[1px] bg-[#00adb5] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* BOTÓN LOAD MORE */}
      {allFilteredProjects.length > visibleCount && (
        <div className="flex justify-center items-center py-20">
          <button onClick={() => setVisibleCount(prev => prev + 6)} className="group flex items-center gap-6 cursor-pointer">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] group-hover:text-[#00adb5] transition-colors">Cargar más</span>
            <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:border-[#00adb5] transition-colors">
              <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:bg-[#00adb5]"></div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}