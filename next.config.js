/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Static HTML export
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Required for GitHub Pages
  trailingSlash: true,
  
  // Base path required for GitHub Pages with repository name
  basePath: process.env.NODE_ENV === 'production' ? '/ChandanaGutta' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ChandanaGutta' : '',
}

module.exports = nextConfig
