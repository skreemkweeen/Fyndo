/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@fyndo/ui",
    "@fyndo/auth",
    "@fyndo/database",
    "@fyndo/types",
    "@fyndo/ai",
  ],
  productionBrowserSourceMaps: false,
};

export default nextConfig;
