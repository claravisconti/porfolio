import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
      <div className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">FRANZ_STUDIO</div>
        <div className="flex gap-8 font-medium text-sm uppercase tracking-widest">
          <Link to="/" className="hover:text-orange-500 transition-colors">Inicio</Link>
          <Link to="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</Link>
          <Link to="/about" className="hover:text-orange-500 transition-colors">Sobre Mí</Link>
          <Link to="/contact" className="hover:text-orange-500 transition-colors">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}