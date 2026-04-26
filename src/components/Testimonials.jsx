import { useState, useEffect } from 'react';
import T1 from '../assets/images/Testimonials/T1.png';
import T2 from '../assets/images/Testimonials/T2.png';
import T3 from '../assets/images/Testimonials/T3.png';

const testimonials = [
  {
    id: "01",
    name: "Martina Zuber",
    role: "Fundadora de Bloom",
    text: "Trabajar con Clara fue un antes y un después para mi marca. Logró captar la esencia minimalista que buscaba desde el primer día. Su ojo para el detalle en el packaging es realmente único.",
    img: T1
  },
  {
    id: "02",
    name: "Facundo Rossi",
    role: "Director de Marketing en TechBA",
    text: "Buscábamos una identidad web que fuera moderna pero funcional, y el resultado superó nuestras expectativas. La comunicación fue fluida y entendió perfectamente los tiempos de nuestra empresa.",
    img: T2
  },
  {
    id: "03",
    name: "Lucía Méndez",
    role: "Emprendedora Gastronómica",
    text: "Clara tiene una capacidad increíble para traducir conceptos abstractos en piezas visuales potentes. Las campañas que diseñó para el lanzamiento de mi local fueron clave para el éxito que tuvimos.",
    img: T3
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-slide cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-accent text-white flex flex-col items-center overflow-hidden">
      
      {/* SECCIÓN SUPERIOR: Contenido y Círculo */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-20 md:pt-32 md:pb-24 px-6 md:px-24 relative z-10">
        
        {/* LADO IZQUIERDO: Círculo Perfecto */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-square rounded-full overflow-hidden shadow-2xl">
            <img
              key={current}
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105"
            />
          </div>
        </div>

        {/* LADO DERECHO: Contenido */}
        <div className="md:col-span-7 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-center md:text-left relative">
          <div className="space-y-6 max-w-xl flex-grow">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">Testimonio</h2>
            
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start mb-8">
               <div className="hidden md:block w-10 h-[1px] bg-white/60 mt-4 flex-shrink-0"></div>
               <p className="text-base md:text-xl font-light leading-relaxed opacity-95 italic">
                "{testimonials[current].text}"
              </p>
            </div>

            <div>
              <p className="font-bold text-lg md:text-xl tracking-tight">{testimonials[current].name}</p>
              <p className="text-[10px] md:text-xs opacity-70 uppercase tracking-[0.3em] mt-1">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* NÚMEROS LATERALES: Estética Hero */}
          <div className="flex md:flex-col justify-center items-center space-x-8 md:space-x-0 md:space-y-10 md:pt-12">
            {testimonials.map((t, index) => (
              <button
                key={t.id}
                onClick={() => setCurrent(index)}
                className="group flex flex-col items-center"
              >
                <span className={`text-[10px] md:text-[11px] font-bold tracking-[0.4em] transition-all duration-500 ${
                  current === index ? 'opacity-100 scale-110' : 'opacity-30 group-hover:opacity-60'
                }`}>
                  {t.id}
                </span>
                <div className={`w-[1px] bg-white transition-all duration-500 mt-2 ${
                  current === index ? 'h-6 opacity-100' : 'h-0 opacity-0 group-hover:h-3 group-hover:opacity-60'
                }`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: Fila de 4 Fotos CUADRADAS */}
      {/*  
      <div className="w-full grid-cols-4 gap-0 hidden md:grid relative z-0 mt-[-2px]">
        {[
          "https://images.unsplash.com/photo-1552058544-f2b08422138a",
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
          "https://images.unsplash.com/photo-1517841905240-472988babdf9",
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
        ].map((url, index) => (

          <div key={index} className="w-full aspect-square overflow-hidden bg-gray-100">
            <img
              src={`${url}?q=80&w=800`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> */}
    </section>
  );
}