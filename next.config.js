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
  
  // Get basePath from environment variable
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig
