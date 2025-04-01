// Client-side script to fix path issues on GitHub Pages
(function() {
  // Only run on GitHub Pages
  if (!window.location.hostname.includes('github.io')) return;
  
  // Intercept fetch requests to prevent 404 errors for JSON data files
  const originalFetch = window.fetch;
  window.fetch = function(resource, init) {
    // If trying to fetch Next.js data files, return empty data instead
    if (resource && typeof resource === 'string' && 
        resource.includes('/_next/data/') && 
        resource.endsWith('.json')) {
      console.log('Intercepted fetch for', resource);
      return Promise.resolve(new Response(JSON.stringify({ pageProps: {} }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }));
    }
    
    // Otherwise, use original fetch
    return originalFetch.apply(this, arguments);
  };
  
  // Fix PDF links - check if user is trying to access a PDF
  const path = window.location.pathname;
  if (path.includes('ChandanaGutta_Resume.pdf')) {
    // Redirect to the correct PDF path
    console.log('Fixing PDF path');
    window.location.href = '/ChandanaGutta/ChandanaGutta_Resume.pdf';
  }
  
  // Fix double path issue (e.g., /ChandanaGutta/ChandanaGutta/portfolio)
  if (path.includes('/ChandanaGutta/ChandanaGutta/')) {
    console.log('Fixing double path issue');
    window.location.href = path.replace('/ChandanaGutta/ChandanaGutta/', '/ChandanaGutta/');
  }
})();