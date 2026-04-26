import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Iso from '../assets/images/Iso_blanco.svg'; 
import IsoTeal from '../assets/images/Iso_teal.svg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const location = useLocation();

  // Resetear estados al navegar entre páginas
  useEffect(() => {
    setIsOpen(false);
    setIsPortfolioHovered(false);
    setMobilePortfolioOpen(false);
  }, [location]);

  // Bloquear el scroll del body cuando el menú móvil está activo
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const isHomePage = location.pathname === "/";

  const portfolioSubs = [
    { name: 'Todos', href: '/portfolio' },
    { name: 'Web', href: '/portfolio/web' },
    { name: 'Marcas', href: '/portfolio/marcas' },
    { name: 'Packaging', href: '/portfolio/packaging' },
    { name: 'Campañas', href: '/portfolio/redes' },
  ];

  // Configuración de estilos según el contexto (Home vs Internas)
  const theme = {
    navBg: isHomePage ? "bg-transparent" : "bg-white border-b border-gray-100",
    text: isHomePage ? "text-white" : "text-black",
    burger: isHomePage ? "bg-white" : "bg-black",
  };

  return (
    <nav className={`absolute w-full z-[100] transition-all duration-500 ${theme.navBg}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="flex justify-between items-center h-24">

          {/* --- BLOQUE LOGO Y NOMBRE --- */}
          <Link
            to="/"
            className="flex items-center gap-3 z-[110] outline-none group"
          >
            {/* Isotipo: Cambia entre Blanco y Teal según la página */}
            <img
              src={isHomePage || isOpen ? Iso : IsoTeal}
              alt="Logo"
              className="w-12 h-auto block transition-all duration-500"
            />

            {/* Nombre: Fuente New York Chalet sin punto final */}
            <span
              className={`font-logo text-3xl tracking-tight leading-none pt-1 transition-colors duration-500 
              ${isOpen ? 'text-white' : theme.text}`}
            >
              Clara Visconti
            </span>
          </Link>

          {/* --- MENÚ DESKTOP --- */}
          <div className="hidden md:flex space-x-12 items-center">
            <Link to="/" className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:tracking-[0.35em] ${isHomePage ? "text-white/80 hover:text-white" : "text-black/60 hover:text-black"}`}>
              Home
            </Link>

            {/* Dropdown de Portfolio */}
            <div
              className="relative py-8"
              onMouseEnter={() => setIsPortfolioHovered(true)}
              onMouseLeave={() => setIsPortfolioHovered(false)}
            >
              <Link
                to="/portfolio"
                className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:tracking-[0.35em] flex items-center gap-1 ${isHomePage ? "text-white/80 hover:text-white" : "text-black/60 hover:text-black"}`}
              >
                Portfolio
              </Link>

              {/* Submenú Flotante */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl min-w-[200px] py-4 transition-all duration-300 transform ${isPortfolioHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {portfolioSubs.map((sub) => (
                  <Link 
                    key={sub.name} 
                    to={sub.href} 
                    className="block px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black hover:bg-gray-50 transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:tracking-[0.35em] ${isHomePage ? "text-white/80 hover:text-white" : "text-black/60 hover:text-black"}`}>
              Sobre mí
            </Link>
            <Link to="/contact" className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:tracking-[0.35em] ${isHomePage ? "text-white/80 hover:text-white" : "text-black/60 hover:text-black"}`}>
              Contacto
            </Link>
          </div>

          {/* --- BOTÓN BURGER (MOBILE) --- */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-[110] p-2 focus:outline-none">
            <div className="relative w-6 h-5">
              <span className={`absolute block w-full h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 top-2 bg-white' : `top-0 ${theme.burger}`}`}></span>
              <span className={`absolute block w-full h-0.5 transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : `opacity-100 ${theme.burger}`}`}></span>
              <span className={`absolute block w-full h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 top-2 bg-white' : `top-4 ${theme.burger}`}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* --- OVERLAY MENÚ MÓVIL --- */}
      <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] z-[100] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center space-y-8 w-full overflow-y-auto pt-20 pb-10">

          <Link to="/" className="text-white text-3xl font-bold uppercase tracking-[0.3em] hover:text-[#00adb5]">
            Home
          </Link>

          {/* Portfolio Mobile Accordion */}
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
              className="flex items-center gap-2 text-white text-3xl font-bold uppercase tracking-[0.3em] focus:outline-none"
            >
              Portfolio
              <ChevronDown
                size={24}
                className={`transition-transform duration-300 ${mobilePortfolioOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div className={`flex flex-col items-center space-y-4 transition-all duration-500 overflow-hidden ${mobilePortfolioOpen ? 'max-h-[400px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              {portfolioSubs.map((sub) => (
                <Link
                  key={sub.name}
                  to={sub.href}
                  className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="text-white text-3xl font-bold uppercase tracking-[0.3em] hover:text-[#00adb5]">
            Sobre mí
          </Link>

          <Link to="/contact" className="text-white text-3xl font-bold uppercase tracking-[0.3em] hover:text-[#00adb5]">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}