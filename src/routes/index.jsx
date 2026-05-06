import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import PortfolioCategory from '../pages/PortfolioCategory';
import ProjectDetail from '../pages/ProjectDetail';
import { useTranslation } from 'react-i18next';

export default function AppRoutes() {
  const { t } = useTranslation();
  return (
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
    
  );
}