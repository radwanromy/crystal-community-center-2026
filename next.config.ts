/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This is the most important line
  images: {
    unoptimized: true,   // GitHub Pages doesn't support Next.js image optimization
  },
  // You can keep your dev origin if you need it for local testing
  allowedDevOrigins: ['192.168.94.31'], 
};

export default nextConfig;