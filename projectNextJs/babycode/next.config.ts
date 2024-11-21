// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { dev }) {
    if (!dev) {
      // Tắt source maps cho môi trường production
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
