import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // More reliable static asset serving on Render
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "numforlife.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
