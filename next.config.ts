import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  
  typescript: {
    ignoreBuildErrors: true,
  },

 
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "img.clerk.com" },
    ],
  },
};

export default nextConfig;
