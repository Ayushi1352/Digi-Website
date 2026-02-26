import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div className="flex-shrink-0 flex items-center">
            <img src="/logo/logo.png" alt="Kushel Digi Solutions" className="h-[45px] w-auto" />
          </div>


          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-dark hover:text-primary text-sm font-semibold transition-colors">ABOUT US</a>
            <a href="#" className="text-dark hover:text-primary text-sm font-semibold transition-colors">SERVICES</a>
            <a href="#" className="text-dark hover:text-primary text-sm font-semibold transition-colors">OUR PORTFOLIO</a>
            <a href="#" className="text-dark hover:text-primary text-sm font-semibold transition-colors">TESTIMONIALS</a>
            <a href="#" className="text-dark hover:text-primary text-sm font-semibold transition-colors">CONTACT US</a>
          </div>


          <div className="hidden md:flex items-center">
            <a href="tel:9045301702" className="bg-primary text-white border border-primary px-6 py-2.5 font-medium hover:bg-secondary hover:border-secondary transition-all shadow-sm text-sm cursor-pointer">
              CALL NOW : 9045301702
            </a>
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-dark hover:text-primary focus:outline-none focus:text-primary p-2"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-gray-bg border-t border-gray-200 shadow-md">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-white transition-colors">ABOUT US</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-white transition-colors">SERVICES</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-white transition-colors">OUR PORTFOLIO</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-white transition-colors">TESTIMONIALS</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-white transition-colors">CONTACT US</a>
            <a href="tel:9045301702" className="block w-full text-center mt-4 bg-primary text-white px-6 py-3 font-medium hover:bg-secondary transition-colors shadow-sm">
              CALL NOW : 9045301702
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
