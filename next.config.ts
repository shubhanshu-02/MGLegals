import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Keep React Strict Mode enabled
  trailingSlash: true, // Replaces exportTrailingSlash with the correct option
};

export default nextConfig;
