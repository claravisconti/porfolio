import { Type, Lightbulb, Image, PenTool } from 'lucide-react';

const services = [
  {
    title: "Web Design",
    desc: "Tincidunt lobortis feugiat vivamus sed at.",
    icon: <Type size={48} strokeWidth={1} />
  },
  {
    title: "Art Direction",
    desc: "Tincidunt lobortis feugiat vivamus sed at.",
    icon: <Lightbulb size={48} strokeWidth={1} />
  },
  {
    title: "Packaging Design",
    desc: "Tincidunt lobortis feugiat vivamus sed at.",
    icon: <Image size={48} strokeWidth={1} />
  },
  {
    title: "Motion Design",
    desc: "Tincidunt lobortis feugiat vivamus sed at.",
    icon: <PenTool size={48} strokeWidth={1} />
  }
];

export default function Services() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-12">
        {/* Cuadrícula: 1 columna en móvil, 4 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-start group">
              {/* Icono con efecto de color al pasar el mouse */}
              <div className="mb-8 text-black/80 group-hover:text-accent transition-colors duration-300">
                {s.icon}
              </div>
              
              {/* Título en mayúsculas */}
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">
                {s.title}
              </h3>
              
              {/* Línea decorativa que crece al pasar el mouse */}
              <div className="w-6 h-[1px] bg-black/20 mb-6 group-hover:w-12 group-hover:bg-accent transition-all duration-500"></div>
              
              {/* Descripción */}
              <p className="text-muted text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}