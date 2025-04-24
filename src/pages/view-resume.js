import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ViewResume() {
  // Use a reliable external PDF hosting service
  // Replace this URL with your actual PDF URL from Google Drive, Dropbox, or another service
  const pdfUrl = "https://drive.google.com/file/d/1Yx9Yx9Yx9Yx9Yx9Yx9Yx9Yx9Yx9Yx9/preview";

  // For Google Drive, use this format:
  // https://drive.google.com/file/d/YOUR_FILE_ID/preview

  // For Dropbox, use this format:
  // https://www.dropbox.com/s/YOUR_FILE_PATH/YOUR_FILENAME.pdf?raw=1

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
            <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
              <h1 className="text-2xl font-bold">Chandana Gutta's Resume</h1>
              <a
                href="https://drive.google.com/uc?export=download&id=1Yx9Yx9Yx9Yx9Yx9Yx9Yx9Yx9Yx9Yx9"
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </div>

            <div className="w-full h-[calc(100vh-200px)]">
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="Chandana Gutta's Resume"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
