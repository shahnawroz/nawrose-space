/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // Static HTML export for GitHub Pages
  transpilePackages: ["antd"],
  images: {
    unoptimized: true,        // Required for static export (no Next.js server)
  },
  basePath: "/nawrose-space",
  assetPrefix: "/nawrose-space/",
};

export default nextConfig;
