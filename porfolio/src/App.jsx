import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
