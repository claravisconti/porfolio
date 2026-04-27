import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed bottom-10 right-10 z-[99] 
                     w-14 h-14 
                     bg-[#6db4b6] text-white
                     rounded-full shadow-2xl 
                     /* HIDDEN en móvil, FLEX en desktop */
                     hidden md:flex 
                     items-center justify-center 
                     transition-all duration-300 ease-in-out 
                     hover:bg-[#5aa1a3] hover:-translate-y-1 hover:scale-105 
                     animate-in fade-in slide-in-from-bottom-5"
          title="Volver arriba"
        >
          <FaChevronUp className="text-2xl" />
        </button>
      )}
    </>
  );
}