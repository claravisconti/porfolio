import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher({theme}) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  // Cerrar al hacer click fuera  
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${theme.navBg} ${theme.text}`}
      >
        {current.label}
        <svg
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-16 rounded-md border border-gray-200 bg-white shadow-md z-50">
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => handleSelect(code)}
              className={`cursor-pointer w-full px-3 py-1.5 text-left text-sm transition-colors duration-100
                ${current.code === code
                  ? 'bg-teal-50 text-teal-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}