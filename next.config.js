/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ChandanaGutta' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ChandanaGutta/' : '',
}

module.exports = nextConfig