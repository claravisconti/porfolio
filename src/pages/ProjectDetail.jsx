import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

// --- COMPONENTE DE NAVEGACIÓN (PAGINADOR) ---
const ProjectNavigation = ({ currentId }) => {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <nav className="border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-24 flex justify-between items-center">
        <div className="flex-1">
          {prevProject && (
            <Link to={`/portfolio/project/${prevProject.slug}`} className="group flex items-center gap-4">
              <div className="w-16 h-16 hidden md:block overflow-hidden bg-gray-100 border border-gray-100">
                <img src={prevProject.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">← Anterior</span>
            </Link>
          )}
        </div>
        <div className="flex-none">
          <Link to="/portfolio" className="group p-4 block">
            <div className="grid grid-cols-2 gap-1 w-5 h-5">
              {[1, 2, 3, 4].map(i => <div key={i} className="bg-gray-300 group-hover:bg-black transition-colors"></div>)}
            </div>
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          {nextProject && (
            <Link to={`/portfolio/project/${nextProject.slug}`} className="group flex items-center gap-4 text-right">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">Siguiente →</span>
              <div className="w-16 h-16 hidden md:block overflow-hidden bg-gray-100 border border-gray-100">
                <img src={nextProject.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

// --- COMPONENTE PRINCIPAL DE DETALLE ---
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <div className="pt-40 text-center">Proyecto no encontrado</div>;

  return (
    <div className="bg-white min-h-screen">

      {/* 1. INFORMACIÓN DEL PROYECTO */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 pt-36 pb-16">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#00adb5] font-bold mb-6">{project.category}</p>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10">{project.title}</h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">{project.description}</p>
          </div>
          <div className="md:w-1/3 space-y-8 pt-4 md:pt-16 border-t md:border-t-0 border-gray-100 text-[10px] font-bold uppercase tracking-widest">
            <div><h4 className="text-gray-400 mb-2">Año</h4><p className="text-black text-sm">2026</p></div>
            <div><h4 className="text-gray-400 mb-2">Servicios</h4><p className="text-black text-sm">Digital Design / Branding</p></div>
          </div>
        </div>
      </section>

      {/* 2. GALERÍA DE TRES FOTOS (Aquí está el maquetado que faltaba) */}
      {/* <section className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="flex flex-col gap-24">
         
          {project.gallery?.[0] && (
            <div className="w-full aspect-video overflow-hidden bg-gray-50">
              <img 
                src={project.gallery[0]} 
                alt={`${project.title} detail 1`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            
            {project.gallery?.[1] && (
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src={project.gallery[1]} 
                  alt={`${project.title} detail 2`} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

          
            {project.gallery?.[2] && (
              <div className="aspect-[3/4] overflow-hidden bg-gray-50 md:mt-32">
                <img 
                  src={project.gallery[2]} 
                  alt={`${project.title} detail 3`} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section> */}

      {/* 4. PAGINADOR (NAVEGACIÓN ENTRE PROYECTOS) */}
      <ProjectNavigation currentId={project.id} />

    </div>
  );
}