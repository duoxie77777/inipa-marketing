import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/inipa-marketing',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;