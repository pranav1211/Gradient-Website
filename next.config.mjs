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
        pathname: '/content/*', // Path pattern if you have specific folder structure
      },
    ],
  },
};

export default nextConfig;
