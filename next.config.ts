import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://test-aqi9.onrender.com/:path*', // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
