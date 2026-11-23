import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  // TypeScript is checked explicitly in the build script before compiling.
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    agentFeedback: true,
    useTypeScriptCli: false,
  },
};

export default nextConfig;
