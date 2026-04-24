import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  // Scroll al inicio al entrar a la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="pt-40 text-center">Proyecto no encontrado</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION: Imagen Principal Full Width */}
      <section className="w-full h-[70vh] relative overflow-hidden bg-gray-100">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* 2. INFO SECTION: Texto y Detalles */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 py-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Título y Categoría */}
          <div className="md:w-2/3">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#00adb5] mb-4 font-bold">
              {project.category}
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Aquí puedes describir el desafío del proyecto, los objetivos alcanzados y el proceso creativo. 
              El diseño se centra en la funcionalidad y la estética minimalista para destacar el contenido.
            </p>
          </div>

          {/* Ficha Técnica Lateral */}
          <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Año</h4>
                <p className="text-sm font-medium">2026</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Servicios</h4>
                <p className="text-sm font-medium">UI/UX Design, Development</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Cliente</h4>
                <p className="text-sm font-medium">Nombre del Cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALERÍA DE PROYECTO: Imágenes grandes verticales */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 space-y-12 pb-24">
        {/* Aquí puedes usar imágenes adicionales si las tienes en tu data */}
        <div className="aspect-video bg-gray-50 overflow-hidden">
           <img src={project.image} alt="Detail 1" className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[4/5] bg-gray-50">
             <img src={project.image} alt="Detail 2" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] bg-gray-50 pt-20">
             <img src={project.image} alt="Detail 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 4. NAVEGACIÓN: Botón para volver */}
      <footer className="border-t border-gray-100 py-20 flex justify-center">
        <Link 
          to="/portfolio" 
          className="group flex items-center gap-6"
        >
          <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black transition-all">
             <span className="text-black group-hover:text-white transition-colors">←</span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.4em]">Back to Portfolio</span>
        </Link>
      </footer>
    </div>
  );
}