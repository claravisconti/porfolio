import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  // Eliminamos el useEffect que inicializaba la analítica
  // ahora el index.html se encargará de eso de forma diferida.

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <AppRoutes />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;