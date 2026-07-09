/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@fyndo/ui",
    "@fyndo/database",
    "@fyndo/auth",
    "@fyndo/types",
    "@fyndo/ai",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
