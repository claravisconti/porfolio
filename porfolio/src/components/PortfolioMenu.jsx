import { NavLink } from 'react-router-dom';

export default function PortfolioMenu() {
  const categories = [
    { name: 'Todos', href: '/portfolio' },
    { name: 'Web', href: '/portfolio/web' },
    { name: 'Marcas', href: '/portfolio/marcas' },
    { name: 'Packaging', href: '/portfolio/packaging' },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 pt-10">
      {categories.map((cat) => (
        <NavLink
          key={cat.name}
          to={cat.href}
          end // Para que 'Todos' no esté siempre activo
          className={({ isActive }) => `
            text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300
            ${isActive 
              ? 'text-black border-b-2 border-[#00adb5] pb-2' 
              : 'text-gray-400 hover:text-black'}
          `}
        >
          {cat.name}
        </NavLink>
      ))}
    </nav>
  );
}