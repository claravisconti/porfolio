import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function PortfolioMenu() {
  const { t } = useTranslation();
  const categories = [
    { name: t('portfolio.all'), href: '/portfolio' },
    { name: t('portfolio.web'), href: '/portfolio/web' },
    { name: t('portfolio.campaigns'), href: t('portfolio.campaigns_route') },
    { name: t('portfolio.packaging'), href: '/portfolio/packaging' },
    { name: t('portfolio.editorial'), href: '/portfolio/editorial' }
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