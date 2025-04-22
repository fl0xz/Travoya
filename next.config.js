/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org',
      'www.ryanair.com',
      'www.easyjet.com',
      'images.unsplash.com'
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  output: 'standalone'
};

module.exports = nextConfig; 