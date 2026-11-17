import type { NextConfig } from "next";

// Static export so it can be hosted free on GitHub Pages.
// For a project page (user.github.io/repo) the workflow sets BASE_PATH=/repo.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
