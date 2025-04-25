// This script handles the redirection of resume PDF requests
(function() {
  // Check if we're on a GitHub Pages site
  if (window.location.hostname.includes('github.io')) {
    console.log('Resume redirect handler activated');
    
    // Add an event listener for all click events
    document.addEventListener('click', function(event) {
      // Check if the clicked element or its parent is a resume PDF link
      const link = event.target.closest('a[href*="ChandanaGutta_Resume.pdf"]');
      
      if (link) {
        console.log('Resume PDF link clicked');
        // Get the current URL of the link
        const href = link.getAttribute('href');
        
        // If it's not already an absolute URL
        if (!href.startsWith('http')) {
          console.log('Converting to absolute URL');
          // Prevent the default action
          event.preventDefault();
          
          // Open the PDF using the absolute GitHub Pages URL
          window.open('https://cgutta06.github.io/ChandanaGutta_Resume.pdf', '_blank');
        }
      }
    });
  }
})();