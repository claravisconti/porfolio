import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectNavigation from '../components/ProjectNavigation';
import { Monitor, Target, Zap } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return null;

  const isWeb = project.category === "Web";

  return (
    <div className="bg-white min-h-screen text-black">
      {/* SECCIÓN 1: HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center md:items-start text-center md:text-left">
          <div className="lg:w-2/3">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-[#6db4b6] font-bold mb-4 md:mb-6 italic">
              {project.category}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.85] mb-6 md:mb-10">
              {project.title}
            </h1>
          </div>
          <div className="lg:w-1/3 flex flex-row lg:flex-col justify-center lg:justify-end gap-10 md:gap-8 pb-2 lg:border-l border-gray-100 lg:pl-8">
            <div className="text-center lg:text-left">
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-1 font-bold">Año</h4>
              <p className="text-[10px] md:text-xs font-bold uppercase">{project.year}</p>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-1 font-bold">Servicios</h4>
              <p className="text-[10px] md:text-xs font-bold uppercase">{project.services}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FOTO 1: MÁS GRANDE (VERTICAL) EN MOBILE, VIDEO EN DESKTOP */}
      <section className="max-w-7xl mx-auto md:px-24 mb-16 md:mb-24">
        {/* En mobile aspect-[4/5] (más alto), en desktop aspect-video (16:9) */}
        <div className="w-full aspect-[4/5] md:aspect-video overflow-hidden bg-gray-50 md:rounded-sm">
          <img src={project.gallery[0]} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </section>

      {isWeb ? (
        <>
          {/* SECCIÓN 2: ESTRATEGIA */}
          <section className="max-w-7xl mx-auto px-6 md:px-24 py-12 md:py-20 border-b border-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {[
                { title: "Problema", desc: project.problem, icon: <Monitor size={28} /> },
                { title: "Objetivo", desc: project.objective, icon: <Target size={28} /> },
                { title: "Desafío", desc: project.challenge, icon: <Zap size={28} /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
                  <div className="text-black/80">{item.icon}</div>
                  <h3 className="text-base md:text-lg font-bold uppercase tracking-tight">{item.title}</h3>
                  <div className="w-6 h-[1px] bg-black/20"></div>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECCIÓN 3: PALETA Y FOTOS DETALLE */}
          <section className="max-w-7xl mx-auto px-6 md:px-24 py-16 md:py-24 text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
              <div className="md:col-span-4 space-y-12">
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-6 font-bold italic">Colors</h4>
                  <div className="flex gap-4">
                    {project.colors?.map((c, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border border-gray-100" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold italic">Typography</h4>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">{project.fonts}</h3>
                </div>
              </div>
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <img src={project.gallery[1]} className="w-full aspect-[3/4] object-cover" alt="Detail 1" />
                <img src={project.gallery[2]} className="w-full aspect-[3/4] object-cover" alt="Detail 2" />
              </div>
            </div>
          </section>

          {/* SECCIÓN 5: LA SOLUCIÓN Y MÉTRICAS */}
          <section className="max-w-7xl mx-auto px-6 md:px-24 py-16 md:py-20 text-center md:text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col items-center md:items-start space-y-6">
                <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 inline-block">La Solución</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed italic font-light">{project.solution}</p>
              </div>
              <div className="space-y-8 md:space-y-10">
                {project.metrics?.map((m, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-2 font-bold uppercase">
                      <span className="text-[10px] tracking-widest">{m.name}</span>
                      <span className="text-xs">{m.percentage}%</span>
                    </div>
                    <div className="h-[1px] bg-gray-100 relative">
                      <div className="absolute h-full bg-black" style={{ width: `${m.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECCIÓN 6: IMPACTO */}
          <section className="max-w-7xl mx-auto px-6 md:px-24 py-20 md:py-32 border-t border-gray-100">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter">
                Project<br/>Impact
              </h2>
              <div className="flex flex-col md:flex-row gap-12 md:gap-16 w-full lg:w-auto items-center">
                {project.impact?.map((imp, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <p className="text-6xl md:text-8xl font-bold text-[#6db4b6] tracking-tighter leading-none mb-1">
                      {imp.value}
                    </p>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      {imp.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECCIÓN 7: FOTO CIERRE - OCULTA EN MOBILE (hidden) */}
          <section className="hidden md:block max-w-7xl mx-auto md:px-24 pb-24 md:pb-32">
            <div className="w-full aspect-video overflow-hidden bg-gray-50 md:rounded-sm">
              <img 
                src={project.gallery[4] || project.gallery[0]} 
                alt="Final" 
                className="w-full h-full object-cover" 
              />
            </div>
          </section>
        </>
      ) : (
        /* VISTA SIMPLE PARA OTROS */
        <section className="max-w-7xl mx-auto px-6 md:px-24 pb-24 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4">
              <h3 className="font-bold uppercase tracking-widest text-xs italic">El Proyecto</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-base text-gray-600 leading-relaxed font-light">{project.description}</p>
            </div>
          </div>
          <div className="space-y-8">
             {project.gallery.slice(1).map((img, i) => (
               <img key={i} src={img} className="w-full object-cover rounded-sm" alt="Gallery" />
             ))}
          </div>
        </section>
      )}

      <ProjectNavigation currentId={project.id} />
    </div>
  );
}