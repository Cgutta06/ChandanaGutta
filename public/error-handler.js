// Simple error handler for GitHub Pages deployment issues
window.addEventListener('error', function(event) {
  console.log('Caught error:', event.error);
  // Prevent the error from breaking the application
  event.preventDefault();
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
  console.log('Unhandled promise rejection:', event.reason);
  // Prevent the error from breaking the application
  event.preventDefault();
});

// Fix for common Next.js router issues on GitHub Pages
if (typeof window !== 'undefined') {
  // Check if we're on GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    // Make sure all navigation links are properly prefixed
    document.addEventListener('click', function(event) {
      // Check if clicked on a link
      if (event.target.tagName === 'A' && event.target.href) {
        const href = event.target.getAttribute('href');
        
        // If it's an internal link without the base path
        if (href && href.startsWith('/') && !href.startsWith('/ChandanaGutta')) {
          // Prevent default navigation
          event.preventDefault();
          
          // Navigate to the corrected path
          window.location.href = '/ChandanaGutta' + href;
        }
      }
    });
  }
}