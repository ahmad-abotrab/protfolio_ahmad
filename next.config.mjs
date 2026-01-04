/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
