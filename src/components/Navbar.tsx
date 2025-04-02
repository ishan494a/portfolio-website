'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const handleLinkClick = (section: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };
  

  return (
    <nav className="bg-black fixed w-full z-50 top-0 left-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" onClick={() => handleLinkClick("home")} className="flex items-center space-x-3">
          <span className="self-center text-3xl text-white">
            Ishan Jain
          </span>
        </a>
        <div className="hidden md:flex md:items-center md:space-x-8 md:ml-auto">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleLinkClick(item.toLowerCase())}
              className="text-xl text-white hover:bg-gray-600 rounded-md px-3 py-2 transition-all duration-300 ease-in-out"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 md:ml-8">
          <button
            type="button"
            className="text-xl bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={() => window.open('https://drive.google.com/file/d/10xn7I_P9ZYunY-Gir148wi9QqMR0AHnK/view?usp=sharing', '_blank')}
          >
            Resume
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black border-t border-gray-700 overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item.toLowerCase())}
                    className="text-white text-lg hover:bg-gray-800 rounded-md px-3 py-2 transition-all duration-300 ease-in-out"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
