import { Monitor, PenTool, Box, Megaphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';


export default function Services() {
  const { t } = useTranslation();
  const services = [
    {
      title: t('services.t_1'),
      desc: t('services.d_1'),
      icon: <Monitor size={48} strokeWidth={1} /> // Un monitor para lo digital
    },
    {
      title: t('services.t_2'),
      desc: t('services.d_2'),
      icon: <PenTool size={48} strokeWidth={1} /> // La pluma para la creación de logos/trazos
    },
    {
      title: t('services.t_3'),
      desc: t('services.d_3'),
      icon: <Box size={48} strokeWidth={1} /> // Una caja para representar el producto físico
    },
    {
      title: t('services.t_4'),
      desc: t('services.d_4'),
      icon: <Megaphone size={48} strokeWidth={1} /> // Un megáfono para la comunicación y difusión
    }
  ];
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