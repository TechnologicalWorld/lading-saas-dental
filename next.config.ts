import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lading-saas-dental",

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
