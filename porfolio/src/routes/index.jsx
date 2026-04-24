import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import PortfolioCategory from '../pages/PortfolioCategory';
import ProjectDetail from '../pages/ProjectDetail';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<PortfolioCategory category="Todos" />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      
      <Route path="/portfolio/web" element={<PortfolioCategory category="Web" />} />
      <Route path="/portfolio/marcas" element={<PortfolioCategory category="Marcas" />} />
      <Route path="/portfolio/packaging" element={<PortfolioCategory category="Packaging" />} />
      <Route path="/portfolio/redes" element={<PortfolioCategory category="Redes" />} />
      <Route path="/portfolio/project/:slug" element={<ProjectDetail />} />
      
    </Routes>
    
  );
}