import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
  turbopack: {}, // YENİ EKLENEN SATIR: Turbopack hatasını susturur
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    config.module.rules.push({
      test: /draco_decoder\.js$/,
      use: 'null-loader',
    });
    return config;
  },
};

export default nextConfig;