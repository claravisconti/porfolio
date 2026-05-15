import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PortfolioMenu from '../components/PortfolioMenu';
import Banner from '../components/Banner';
import { getProjects } from '../data/projects';
import Hero1 from '../assets/images/Hero/Hero1.webp';
import { useTranslation } from 'react-i18next';

export default function PortfolioCategory({ category }) {
  const { i18n } = useTranslation();
  const projects = useMemo(() => { return getProjects() }, [i18n.language])
  const [visibleCount, setVisibleCount] = useState(6);
  const [allFilteredProjects, setAllFilteredProjects] = useState([]);
  const [displayProjects, setDisplayProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loaderRef = useRef(null);

  useEffect(() => {
    setVisibleCount(6);
    setAllFilteredProjects(projects.filter(p =>
      ["todos", "all"].includes(category.toLowerCase()) || p.category.toLowerCase() === category.toLowerCase()
    ))
  }, [category]);

  useEffect(() => {
    setDisplayProjects(allFilteredProjects.slice(0, visibleCount))
  }, [visibleCount, allFilteredProjects]);

  // --- TRACKING PARA CLIC EN PROYECTOS DEL LISTADO ---
  const handleProjectClick = (projectTitle) => {
    if (window.gtag) {
      window.gtag('event', 'select_content', {
        'content_type': 'Project_Category_List',
        'item_id': projectTitle,
        'project_category': category
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading && allFilteredProjects.length > visibleCount) {
          setIsLoading(true);

          setTimeout(() => {
            const nextCount = visibleCount + 6;
            
            // --- TRACKING EN EL INFINITE SCROLL ---
            if (window.gtag) {
              window.gtag('event', 'infinite_scroll_load', {
                'category_page': category,
                'items_loaded_count': nextCount
              });
            }

            setVisibleCount(nextCount);
            setIsLoading(false);
          }, 500);
        }
      },
      { rootMargin: "0px 0px 50px 0px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.disconnect();
    };
  }, [allFilteredProjects.length, visibleCount, isLoading, category]);

  return (
    <div className="bg-white min-h-screen">
      <Banner title={category} image={Hero1} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="pt-12 pb-6">
          <PortfolioMenu />
        </div>

        {/* GRILLA DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <Link
              to={`/portfolio/project/${project.slug}`}
              key={`${project.id}-${index}`}
              onClick={() => handleProjectClick(project.title)} // <--- Tracking al hacer click
              className="group animate-fadeIn"
            >
              <div className="overflow-hidden bg-gray-100 aspect-square relative">
                <img
                  src={project.image}
                  alt={`Proyecto ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
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

        {/* CENTINELA CON EFECTO VISUAL DE CARGA */}
        <div
          ref={loaderRef}
          className="h-40 flex items-center justify-center"
          aria-live="polite"
        >
          {isLoading && (
            <div className="flex gap-2" role="status">
              <span className="sr-only">Cargando más proyectos...</span>
              <div className="w-2 h-2 bg-[#00adb5] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-[#00adb5] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-[#00adb5] rounded-full animate-bounce"></div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}