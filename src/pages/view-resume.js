import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getDocumentPath } from '../utils/path-utils';

export default function ViewResume() {
  return (
    <>
      <Head>
        <title>Resume | Chandana Gutta</title>
        <meta name="description" content="View Chandana Gutta's resume" />
      </Head>

      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/">
              <motion.div
                whileHover={{ x: -5 }}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Portfolio
              </motion.div>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-blue-600 text-white">
              <h1 className="text-2xl font-bold">Chandana Gutta's Resume</h1>
            </div>
            
            <div className="w-full h-[calc(100vh-200px)]">
              <iframe 
                src={getDocumentPath("/ChandanaGutta_Resume.pdf")}
                className="w-full h-full"
                title="Chandana Gutta's Resume"
              />
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
              <p className="text-gray-600">
                You can also download the resume for offline viewing.
              </p>
              <a 
                href={getDocumentPath("/ChandanaGutta_Resume.pdf")}
                download="ChandanaGutta_Resume.pdf"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
