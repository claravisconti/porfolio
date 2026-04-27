import { Monitor, PenTool, Box, Megaphone } from 'lucide-react';

const services = [
  {
    title: "Diseño Web",
    desc: "Diseño interfaces intuitivas y estéticas que priorizan la experiencia del usuario sin perder el impacto visual.",
    icon: <Monitor size={48} strokeWidth={1} /> // Un monitor para lo digital
  },
  {
    title: "Institucional",
    desc: "Creo identidades visuales desde cero, buscando una narrativa coherente y atemporal para cada proyecto.",
    icon: <PenTool size={48} strokeWidth={1} /> // La pluma para la creación de logos/trazos
  },
  {
    title: "Packaging",
    desc: "Desarrollo envases que cuentan historias, enfocándome en la funcionalidad y la materialidad del diseño.",
    icon: <Box size={48} strokeWidth={1} /> // Una caja para representar el producto físico
  },
  {
    title: "Campañas",
    desc: "Planifico y diseño el universo visual de campañas integrales, optimizando la comunicación en cada pieza.",
    icon: <Megaphone size={48} strokeWidth={1} /> // Un megáfono para la comunicación y difusión
  }
];

export default function Services() {
  return (
    <section className="bg-white py-16">
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