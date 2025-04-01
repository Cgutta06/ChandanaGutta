import { useEffect } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  // Scroll to top on page change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // No redirect needed here - handled by Next.js basePath config and static files

  return (
    <>
      <Head>
        <title>Chandana Gutta | Facilities Project Manager | Architect</title>
        <meta name="description" content="Portfolio of Chandana Gutta - Facilities Project Manager, Building Envelope Commissioner, and Architect." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Chandana Gutta | Facilities Project Manager | Architect" />
        <meta property="og:description" content="Portfolio of Chandana Gutta - Facilities Project Manager, Building Envelope Commissioner, and Architect." />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/og-image.jpg`} />
        <meta property="og:url" content="https://cgutta06.github.io/ChandanaGutta/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chandana Gutta | Facilities Project Manager | Architect" />
        <meta name="twitter:description" content="Portfolio of Chandana Gutta - Facilities Project Manager, Building Envelope Commissioner, and Architect." />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/og-image.jpg`} />
        
        {/* Theme Color for Browser */}
        <meta name="theme-color" content="#1E3A8A" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
