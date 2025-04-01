import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Custom404() {
  const router = useRouter();

  // Handle client-side routing for SPA
  useEffect(() => {
    // If we're on GitHub Pages and this is a direct hit to a non-root URL,
    // we need to redirect to the correct base path
    if (typeof window !== 'undefined') {
      const isGitHubPages = window.location.hostname.includes('github.io');
      const isDirectAccess = document.referrer === '';
      const path = window.location.pathname;
      const repoName = 'ChandanaGutta';
      
      if (isGitHubPages && isDirectAccess && !path.includes(`/${repoName}`)) {
        // Redirect to the correct base path
        window.location.href = `/${repoName}${path}`;
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found | Chandana Gutta</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          
          <div className="p-8 md:p-12 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M9.343 5.657a11 11 0 0115.657 15.657a11 11 0 01-15.657 0a11 11 0 010-15.657zM17 10a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
              </svg>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              404 - Page Not Found
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600 mb-8"
            >
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
                >
                  Back to Homepage
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
                >
                  Contact Support
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 text-center text-gray-500"
        >
          <p>
            <Link href="/">
              <span className="text-blue-600 hover:underline">Chandana Gutta</span>
            </Link>
            {' '}&copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </>
  );
}