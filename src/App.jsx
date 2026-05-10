import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton';
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    setTimeout(() => {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, 1000);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Eliminamos max-w-7xl, mx-auto y px-8 para que el contenido sea libre */}
      <main className="flex-grow w-full">
        <AppRoutes />
      </main>
      <Footer />
      <ScrollToTopButton />
      {/* <WhatsAppButton /> */}
    </div>
  );
}

export default App;