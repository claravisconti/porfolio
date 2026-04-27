import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

// --- COMPONENTE DE NAVEGACIÓN (SECCIÓN 4) ---
const ProjectNavigation = ({ currentId }) => {
  const currentIndex = projects.findIndex(p => p.id === currentId);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <nav className="border-t border-gray-100 py-16 mt-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-24 flex justify-between items-center">
        <div className="flex-1">
          {prevProject && (
            <Link to={`/portfolio/project/${prevProject.slug}`} className="group flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-black transition-colors">← Anterior</span>
            </Link>
          )}
        </div>
        <div className="flex-none">
          <Link to="/portfolio" className="group p-4 block">
            <div className="grid grid-cols-2 gap-1 w-5 h-5">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-gray-200 group-hover:bg-[#6db4b6] transition-colors"></div>
              ))}
            </div>
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          {nextProject && (
            <Link to={`/portfolio/project/${nextProject.slug}`} className="group flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">Siguiente →</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default function ProjectDetail() {
  const { slug } = useParams();
  
  // Buscamos el proyecto por slug
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Si no hay proyecto, mostramos un aviso limpio
  if (!project) {
    return (
      <div className="pt-60 pb-40 text-center">
        <h2 className="text-sm uppercase tracking-widest mb-4">Proyecto no encontrado</h2>
        <Link to="/portfolio" className="text-[#6db4b6] underline">Volver al Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- SECCIÓN 1: HERO & FICHA TÉCNICA --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 pt-40 pb-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            {project.category && (
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#6db4b6] font-bold mb-6 italic">
                {project.category}
              </p>
            )}
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
              {project.title}
            </h1>
          </div>
          
          <div className="lg:w-1/3 flex flex-col justify-end space-y-8 pb-2 border-l border-gray-100 pl-8">
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2">Año</h4>
              <p className="text-xs font-bold uppercase">{project.year || "2026"}</p>
            </div>
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2">Servicios</h4>
              <p className="text-xs font-bold uppercase">{project.services || "Diseño Integral"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: EL DESAFÍO --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-black border-b border-black pb-2 inline-block">El Desafío</h3>
          </div>
          <div className="md:col-span-8">
            {/* Tamaño unificado a text-lg y color gray-600 */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description || "Descripción no disponible para este proyecto."}
            </p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: GALERÍA Y SOLUCIÓN --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 space-y-24">
        {/* Imagen Principal (Desktop View) */}
        {project.gallery && project.gallery[0] && (
          <div className="w-full aspect-video overflow-hidden bg-gray-50 rounded-sm shadow-sm">
            <img 
              src={project.gallery[0]} 
              alt={`${project.title} principal`} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}

        {/* Bloque La Solución (Igualado a El Desafío) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10">
          <div className="md:col-span-4">
            <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-black border-b border-black pb-2 inline-block">La Solución</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.solution || "Desarrollamos una estrategia visual centrada en el usuario para potenciar la marca."}
            </p>
          </div>
        </div>

        {/* Grid de Imágenes Secundarias (Mobile/Detail View) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {project.gallery && project.gallery[1] && (
            <div className="aspect-[3/4] overflow-hidden bg-gray-50 rounded-sm">
              <img 
                src={project.gallery[1]} 
                alt={`${project.title} detalle 1`} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}
          {project.gallery && project.gallery[2] && (
            <div className="aspect-[3/4] overflow-hidden bg-gray-50 rounded-sm md:mt-40">
              <img 
                src={project.gallery[2]} 
                alt={`${project.title} detalle 2`} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}
        </div>
      </section>

      {/* --- SECCIÓN 4: NAVEGACIÓN ENTRE PROYECTOS --- */}
      <ProjectNavigation currentId={project.id} />
    </div>
  );
}