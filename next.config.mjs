/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gradient-content-server.vercel.app',
        pathname: '/content/**', // Wildcard for everything under /content/
      },
    ],
  },
};

export default nextConfig;
