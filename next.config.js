/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Static HTML export - replaces the need for 'next export' command
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Required for GitHub Pages
  trailingSlash: true,
  
  // Base path required for GitHub Pages with repository name
  basePath: process.env.NODE_ENV === 'production' ? '/ChandanaGutta' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ChandanaGutta/' : '',  // Note the trailing slash
  
  // Disable static optimization to prevent JSON data fetching attempts
  staticPageGenerationTimeout: 1000,
}

module.exports = nextConfig
