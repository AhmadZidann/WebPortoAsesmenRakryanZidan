import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsOpen(false);  
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-300 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-black text-xl font-bold">
          <a href="#">Zidan</a>
        </div>

        <div className="lg:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="lg:flex lg:space-x-5 text-black lg:items-center">
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 lg:ml-4">
            Download CV
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={mobileMenuRef} 
          className="absolute top-16 right-0 w-full bg-white z-50 p-4 shadow-md"
        >
          <ul className="flex flex-col space-y-4 text-black">
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="block text-black px-2 py-1 hover:text-orange-500">
                Contact
              </a>
            </li>
            <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded hover:bg-orange-600">
              Download CV
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
