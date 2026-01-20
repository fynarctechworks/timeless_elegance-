import { useState, useEffect } from 'react';

function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 z-50 size-10 sm:size-12 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
          style={{ backgroundColor: '#c5a059' }}
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl">arrow_upward</span>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
