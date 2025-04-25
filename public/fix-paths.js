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
  
  // Fix PDF resume path
  document.addEventListener('click', function(event) {
    // Look for resume PDF links
    if (event.target && event.target.closest('a[href*="ChandanaGutta_Resume.pdf"]')) {
      const link = event.target.closest('a[href*="ChandanaGutta_Resume.pdf"]');
      const href = link.getAttribute('href');
      
      // If it's the root path version 
      if (href === '/ChandanaGutta_Resume.pdf') {
        event.preventDefault();
        console.log('Fixing resume PDF link to use absolute path');
        window.open('https://cgutta06.github.io/ChandanaGutta_Resume.pdf', '_blank');
      }
    }
  });
  
  // Fix double path issue (e.g., /ChandanaGutta/ChandanaGutta/portfolio)
  if (window.location.pathname.includes('/ChandanaGutta/ChandanaGutta/')) {
    console.log('Fixing double path issue');
    window.location.href = window.location.pathname.replace('/ChandanaGutta/ChandanaGutta/', '/ChandanaGutta/');
  }
})();