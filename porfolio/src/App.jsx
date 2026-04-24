import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Eliminamos max-w-7xl, mx-auto y px-8 para que el contenido sea libre */}
      <main className="flex-grow w-full">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;