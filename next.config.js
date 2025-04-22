/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['react-icons'],
  },
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
  output: 'standalone',
  webpack: (config) => {
    config.externals.push({
      'leaflet': 'L',
    });
    return config;
  }
};

module.exports = nextConfig; 