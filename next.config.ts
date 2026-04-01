import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio", // replace "portfolio" with your repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
