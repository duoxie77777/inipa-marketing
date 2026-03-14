import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/inipa-marketing',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/inipa-marketing',
};

export default nextConfig;