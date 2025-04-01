/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  
  // The trailing slash is important for GitHub Pages
  trailingSlash: true,
  
  // Only use these in production, and make sure they match your repo name exactly
  ...(process.env.NODE_ENV === 'production' ? {
    assetPrefix: '/ChandanaGutta/',
    basePath: '/ChandanaGutta',
  } : {}),
}

module.exports = nextConfig