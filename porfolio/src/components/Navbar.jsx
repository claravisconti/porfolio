import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Services', href: 'about' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    /* Cambiamos 'fixed' por 'absolute' para que no siga al scroll */
    <nav className="absolute w-full z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO */}
          <div className="text-white font-black text-2xl tracking-tighter cursor-pointer">
            Clara Visconti<span className="text-white">.</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:tracking-[0.35em]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 z-50 relative"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`md:hidden fixed inset-0 bg-black transition-all duration-500 ease-in-out z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-bold uppercase tracking-[0.4em] hover:text-[#00adb5] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}