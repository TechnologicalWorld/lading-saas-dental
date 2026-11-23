import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // TypeScript is checked explicitly in the build script before compiling.
  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    agentFeedback: true,
    useTypeScriptCli: false,
  },
};

export default nextConfig;
