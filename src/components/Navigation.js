import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <span className="text-2xl font-bold text-white cursor-pointer">CG</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/experience', label: 'Experience' },
              { href: '/contact', label: 'Contact' }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-white hover:text-blue-400 transition-colors ${
                  router.pathname === href ? 'text-blue-400' : ''
                }`}
              >
                {label}
                {router.pathname === href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-blue-400 bottom-[-4px]"
                  />
                )}
              </Link>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Resume
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;