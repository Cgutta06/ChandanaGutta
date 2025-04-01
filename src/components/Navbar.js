import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative px-4 py-2 ${
          isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
        }`}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
            layoutId="underline"
          />
        )}
      </Link>
    );
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Chandana Gutta
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <NavLink to="/">Profile</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;