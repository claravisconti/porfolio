import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface py-12 mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-muted text-sm">
            © {currentYear} <span className="text-content font-bold">Clara Visconti</span>. All rights reserved.
          </p>

          {/* Links Legales */}
          <div className="flex gap-8">
            <Link 
              to="/privacy" 
              className="text-muted text-sm hover:text-accent transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link 
              to="/terms" 
              className="text-muted text-sm hover:text-accent transition-colors"
            >
              Términos y Condiciones
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}