import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Allow importing from src/ for a smooth migration
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
