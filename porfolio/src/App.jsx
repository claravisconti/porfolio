import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* El flex-grow hace que el contenido empuje al footer hacia abajo */}
      <main className="flex-grow max-w-7xl mx-auto px-8 w-full">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App; // <-- Verifica que esto esté ahí