// next.config.ts
import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Tắt source maps trong môi trường phát triển
    if (!isServer) {
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
