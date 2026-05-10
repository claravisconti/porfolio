import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import ScrollToTopButton from './components/ScrollToTopButton';
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { clarity } from 'react-microsoft-clarity';

function App() {
  useEffect(() => {
    // 1. Inicialización de Clarity
    clarity.init("wotthqne6g");

    // 2. Google Analytics Pageview
    // Lo enviamos después de un pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, 1000);

    return () => clearTimeout(timer); // Limpieza del timer
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      {/* main con w-full asegura que los títulos gigantes lleguen a los bordes si es necesario */}
      <main className="flex-grow w-full overflow-x-hidden">
        <AppRoutes />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;