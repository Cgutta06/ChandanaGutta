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
  
  // GitHub Pages path prefix - critical for assets to load correctly
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/ChandanaGutta',
    assetPrefix: '/ChandanaGutta',
  } : {}),
}

module.exports = nextConfig
