import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Cerrar el menú automáticamente cuando cambias de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Bloquear el scroll del cuerpo cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Estilos dinámicos
  const theme = {
    navBg: isHomePage ? "bg-transparent" : "bg-white border-b border-gray-100",
    text: isHomePage ? "text-white" : "text-black",
    burger: isHomePage ? "bg-white" : "bg-black",
  };

  return (
    <nav className={`absolute w-full z-[100] transition-all duration-500 ${theme.navBg}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO - Siempre visible por encima del overlay */}
          <Link 
            to="/" 
            className={`font-black text-2xl tracking-tighter z-[110] transition-colors duration-500 ${isOpen ? 'text-white' : theme.text}`}
          >
            Clara Visconti<span className={isHomePage || isOpen ? "text-white" : "text-[#00adb5]"}>.</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:tracking-[0.35em] ${
                  isHomePage ? "text-white/80 hover:text-white" : "text-black/60 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE (Botón Hamburguesa) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[110] focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              {/* Línea Superior */}
              <span className={`absolute block w-full h-0.5 transition-all duration-300 ease-in-out ${
                isOpen ? 'rotate-45 top-2 bg-white' : `top-0 ${theme.burger}`
              }`}></span>
              {/* Línea Media */}
              <span className={`absolute block w-full h-0.5 transition-all duration-300 ease-in-out top-2 ${
                isOpen ? 'opacity-0' : `opacity-100 ${theme.burger}`
              }`}></span>
              {/* Línea Inferior */}
              <span className={`absolute block w-full h-0.5 transition-all duration-300 ease-in-out ${
                isOpen ? '-rotate-45 top-2 bg-white' : `top-4 ${theme.burger}`
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY (El Toggle) */}
      <div 
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] z-[100] ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-white text-3xl font-bold uppercase tracking-[0.3em] hover:text-[#00adb5] transition-all duration-300 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}