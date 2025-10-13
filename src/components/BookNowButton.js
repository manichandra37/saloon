import React, { useState, useEffect } from 'react';

const BookNowButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToContact}
          className="fixed bottom-8 right-8 bg-salon-gold hover:bg-opacity-90 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 group"
          aria-label="Book Now"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-salon-dark text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Book Now
          </span>
        </button>
      )}
    </>
  );
};

export default BookNowButton;

