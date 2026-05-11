import { lazy, Suspense } from 'react'; // 1. Importamos lazy y Suspense
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// 2. Reemplazamos los imports estáticos por imports dinámicos (Lazy Loading)
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const PortfolioCategory = lazy(() => import('../pages/PortfolioCategory'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));

export default function AppRoutes() {
  const { t } = useTranslation();

  return (
    /* 3. Envolvemos las rutas en Suspense. 
       El fallback es lo que se ve mientras carga el "pedacito" de página.
       Puedes poner un spinner o simplemente un fondo negro para que sea fluido. */
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioCategory category={t('portfolio.all')} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        
        <Route path="/portfolio/web" element={<PortfolioCategory category="Web" />} />
        <Route path="/portfolio/editorial" element={<PortfolioCategory category="Editorial" />} />
        <Route path="/portfolio/packaging" element={<PortfolioCategory category="Packaging" />} />
        <Route path="/portfolio/campaigns" element={<PortfolioCategory category="Campaigns" />} />
        <Route path="/portfolio/redes" element={<PortfolioCategory category="Campañas" />} />
        <Route path="/portfolio/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Suspense>
  );
}