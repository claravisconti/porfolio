import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PortfolioMenu from '../components/PortfolioMenu';
import Banner from '../components/Banner';
import { projects } from '../data/projects';
import Hero1 from '../assets/images/Hero1.webp';

export default function PortfolioCategory({ category }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [allFilteredProjects, setAllFilteredProjects] = useState([]);
  const [displayProjects, setDisplayProjects] = useState([]);

  // Imagen por defecto (la que tenías en el Hero o Banner)
  const defaultImg = Hero1; 

  // Objeto preparado para el futuro. Por ahora todas usan defaultImg
  const categoryImages = {
    todos: defaultImg,
    web: defaultImg,
    redes: defaultImg,
    packaging: defaultImg,
    editorial: defaultImg
  };

  useEffect(() => {
    setVisibleCount(6); 
    setAllFilteredProjects(projects.filter(p => 
      category.toLowerCase() === "todos" || p.category.toLowerCase() === category.toLowerCase()
    ))
  }, [category]);

  useEffect(() => {
    setDisplayProjects(allFilteredProjects.slice(0, visibleCount))
  }, [visibleCount, allFilteredProjects]);

  // Seleccionamos la imagen (si no existe la categoría en el objeto, usa la de "todos")
  const bannerImage = categoryImages[category.toLowerCase()] || categoryImages.todos;

  return (
    <div className="bg-white min-h-screen">
      {/* BANNER CON TITULO GRANDE */}
      <Banner title={category} image={bannerImage} />

      {/* TABS DE CATEGORÍAS */}
      <div className="pt-12 pb-6">
        <PortfolioMenu />
      </div>

      <div className="px-6 md:px-24">
        {/* GRILLA DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {displayProjects.map((project) => (
            <Link to={`/portfolio/project/${project.slug}`} key={project.id} className="group">
              <div className="overflow-hidden bg-gray-100 aspect-square relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white p-6 text-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-2 text-gray-300">{project.category}</p>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{project.title}</h3>
                  <div className="w-8 h-[1px] bg-[#00adb5] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTÓN CARGAR MÁS */}
        {allFilteredProjects.length > visibleCount && (
          <div className="flex justify-center items-center py-20">
            <button onClick={() => setVisibleCount(prev => prev + 6)} className="group flex items-center gap-6 cursor-pointer">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] group-hover:text-[#00adb5] transition-colors text-black">
                Cargar más
              </span>
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:border-[#00adb5] transition-colors">
                <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:bg-[#00adb5]"></div>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}