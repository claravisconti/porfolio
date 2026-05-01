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
    <div className="bg-white min-h-screen">
      {/* SECCIÓN 1: HERO & FICHA TÉCNICA */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 pt-40 pb-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#6db4b6] font-bold mb-6 italic">{project.category}</p>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10">{project.title}</h1>
          </div>
          <div className="lg:w-1/3 flex flex-col justify-end space-y-8 pb-2 border-l border-gray-100 pl-8">
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2">Año</h4>
              <p className="text-xs font-bold uppercase">{project.year}</p>
            </div>
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2">Servicios</h4>
              <p className="text-xs font-bold uppercase">{project.services}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FOTO 1: AHORA TAMAÑO CAJA (MAX-W-7XL) */}
      <section className="max-w-7xl mx-auto px-6 md:px-24 mb-24">
        <div className="w-full aspect-video overflow-hidden bg-gray-50 rounded-sm">
          <img src={project.gallery[0]} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </section>

      {isWeb ? (
        <>
          {/* SECCIÓN 2: PROBLEMA, OBJETIVO, DESAFÍO */}
          <section className="max-w-7xl mx-auto px-6 md:px-24 py-20 border-b border-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: "Problema", desc: project.problem, icon: <Monitor size={32} /> },
                { title: "Objetivo", desc: project.objective, icon: <Target size={32} /> },
                { title: "Desafío", desc: project.challenge, icon: <Zap size={32} /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-6">
                  <div className="text-black/80">{item.icon}</div>
                  <h3 className="text-lg font-bold uppercase tracking-tight">{item.title}</h3>
                  <div className="w-6 h-[1px] bg-black/20"></div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECCIÓN 3: PALETA Y FOTOS DETALLE */}
          <section className="max-w-7xl mx-auto px-6 md:px-24 py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
              <div className="md:col-span-4 space-y-16">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-6 font-bold">Colors</h4>
                  <div className="flex gap-4">
                    {project.colors?.map((c, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border border-gray-100" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">Typography</h4>
                  <h3 className="text-3xl font-bold uppercase leading-none break-words">{project.fonts}</h3>
                </div>
              </div>
              <div className="md:col-span-8 grid grid-cols-2 gap-8">
                <img src={project.gallery[1]} className="w-full aspect-[3/4] object-cover" alt="Detail 1" />
                <img src={project.gallery[2]} className="w-full aspect-[3/4] object-cover" alt="Detail 2" />
              </div>
            </div>
          </section>

          {/* SECCIÓN 5: LA SOLUCIÓN Y MÉTRICAS */}
          <section className="max-w-7xl mx-auto px-6 md:px-24 py-20 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-6">
                <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold border-b border-black pb-2 inline-block">La Solución</h3>
                <p className="text-lg text-gray-600 leading-relaxed italic">{project.solution}</p>
              </div>
              <div className="space-y-10">
                {project.metrics?.map((m, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest">{m.name}</span>
                      <span className="text-xs font-bold">{m.percentage}%</span>
                    </div>
                    <div className="h-[1px] bg-gray-100 relative">
                      <div className="absolute h-full bg-black" style={{ width: `${m.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECCIÓN 6: IMPACTO (NÚMEROS UN POCO MÁS GRANDES) */}
          <section className="max-w-7xl mx-auto px-6 md:px-24 py-32 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <h2 className="text-5xl font-black uppercase leading-none tracking-tighter">Project<br/>Impact</h2>
              <div className="flex flex-row gap-12 md:gap-16">
                {project.impact?.map((imp, i) => (
                  <div key={i} className="text-center md:text-left">
                    {/* He subido de text-7xl a text-8xl para ese "toquecito" extra */}
                    <p className="text-6xl md:text-8xl font-bold text-[#6db4b6] tracking-tighter leading-none mb-2 transition-transform hover:scale-105 duration-300">
                      {imp.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{imp.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


      {/* SECCIÓN 7: IMAGEN DE CIERRE (IGUAL AL BANNER SUPERIOR) */}
          <section className="max-w-7xl mx-auto px-6 md:px-24 pb-32">
            <div className="w-full aspect-video overflow-hidden bg-gray-50 rounded-sm">
              <img 
                src={project.gallery[4] || project.gallery[0]} 
                alt="Final Project View" 
                className="w-full h-full object-cover" 
              />
            </div>
          </section>
        </> // Aquí cierra el isWeb
       
      ) : (
        /* DISEÑO SIMPLE PARA OTROS */
        <section className="max-w-7xl mx-auto px-6 md:px-24 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
            <div className="md:col-span-4"><h3 className="font-bold uppercase tracking-widest text-xs">El Proyecto</h3></div>
            <div className="md:col-span-8"><p className="text-lg text-gray-600 leading-relaxed">{project.description}</p></div>
          </div>
          <div className="space-y-12">
             {project.gallery.slice(1).map((img, i) => (
               <img key={i} src={img} className="w-full object-cover" alt="Gallery" />
             ))}
          </div>
        </section>

        
      )}

      

      <ProjectNavigation currentId={project.id} />
    </div>
  );
}