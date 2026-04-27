import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the basePath is empty so it works at the root of crystalccbd.site
  basePath: '', 
  // Optional: helps with CSS/JS paths on some custom domain setups
  assetPrefix: '', 
};

export default nextConfig;