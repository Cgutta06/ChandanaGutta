// Special script for direct PDF access
(function() {
  console.log('Resume redirect script executing');
  
  // Check if this file is being accessed directly
  if (window.location.pathname.endsWith('ChandanaGutta_Resume.pdf') || 
      window.location.pathname.endsWith('resume.pdf')) {
    console.log('Direct PDF access detected, redirecting');
    window.location.href = 'https://cgutta06.github.io/ChandanaGutta/ChandanaGutta_Resume.pdf';
  }
})();