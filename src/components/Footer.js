import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getDocumentPath } from '../utils/path-utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Short Bio */}
          <div className="md:col-span-2">
            <Link href="/">
              <motion.h2
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-4 cursor-pointer inline-block"
              >
                Chandana <span className="text-blue-400">Gutta</span>
              </motion.h2>
            </Link>
            <p className="text-gray-400 mb-6 pr-4">
              Facilities Project Manager and Architect specializing in building envelope systems,
              combining design vision with practical project execution.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/chandana-gutta/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#2563EB' }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
              <motion.a
                href="mailto:gutta18.chandana@gmail.com"
                whileHover={{ y: -3, color: '#2563EB' }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
              <motion.a
                href="tel:+14193786671"
                whileHover={{ y: -3, color: '#2563EB' }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/experience', label: 'Experience' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 3, color: '#60A5FA' }}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center"
                    >
                      <svg className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2">
              {[
                'Building Envelope Systems',
                'Project Management',
                'Structural Rehabilitation',
                'Quality Control',
                'Sustainable Construction'
              ].map((item, index) => (
                <li key={index}>
                  <motion.span
                    whileHover={{ x: 3, color: '#60A5FA' }}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </motion.span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Chandana Gutta. All rights reserved.</p>
          <p className="mt-2">
            <span className="relative inline-block">
              <span className="absolute w-full h-0.5 bg-blue-600 bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              <a
                href="/ChandanaGutta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Download Resume
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;