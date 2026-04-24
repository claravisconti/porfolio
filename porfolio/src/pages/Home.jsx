import { ArrowRight } from 'lucide-react';

// src/pages/Home.jsx
export default function Home() {
  return (
    // Añadimos items-center y text-center
    <div className="bg-main min-h-[80vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-content text-7xl font-black tracking-tighter leading-none">
        DESIGNING <br />
        <span className="text-accent">DIGITAL</span> EXPERIENCES
      </h1>
      
      <p className="mt-6 text-muted text-xl max-w-lg font-light italic">
        Creative studio based in Argentina, specialized in branding and visual identity.
      </p>

      <div className="mt-10 flex gap-4 justify-center"> {/* justify-center para los botones */}
        <button className="bg-accent text-main px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-content transition-all">
          View Projects
        </button>
      </div>
    </div>
  );
}