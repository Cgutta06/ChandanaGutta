import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { DocumentIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  // Get the base path from environment variable
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  const navLinks = [
    { href: `${basePath}/`, label: 'Home' },
    { href: `${basePath}/portfolio`, label: 'Portfolio' },
    { href: `${basePath}/experience`, label: 'Experience' },
    { href: `${basePath}/contact`, label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-white cursor-pointer group"
            >
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Chandana Gutta</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-white hover:text-blue-400 transition-colors ${
                  router.pathname === href ? 'text-blue-400' : ''
                }`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="inline-block"
                >
                  {label}
                  {router.pathname === href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-blue-400 bottom-[-4px]"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            href={`${basePath}/ChandanaGutta_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <DocumentIcon className="h-5 w-5 mr-2" />
            Resume
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md"
        >
          <div className="px-4 py-5 space-y-5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block text-white hover:text-blue-400 transition-colors ${
                  router.pathname === href ? 'text-blue-400' : ''
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={`${basePath}/ChandanaGutta_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white hover:text-blue-400 transition-colors"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
