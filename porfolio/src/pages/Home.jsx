import { ArrowRight } from 'lucide-react';

// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="bg-main flex flex-col items-center py-20">
      {/* Título con el negro potente que elegiste */}
      <h1 className="text-content text-7xl font-black tracking-tighter">
        DISEÑO CON <span className="text-accent">ALMA</span>
      </h1>

      {/* Subtítulo usando el verde del logo para separar */}
      <p className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mt-4">
        Clara Visconti • Visual Studio
      </p>

      {/* Párrafo en el gris muted para que sea fácil de leer */}
      <p className="mt-8 text-muted text-lg max-w-xl text-center leading-relaxed">
        Especializada en branding y sistemas visuales. Ayudo a marcas a encontrar su identidad a través de un diseño estratégico y consciente.
      </p>

      {/* Botón con el turquesa (accent) */}
      <button className="mt-12 px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-content transition-all duration-300">
        Ver Proyectos
      </button>
    </div>
  );
}