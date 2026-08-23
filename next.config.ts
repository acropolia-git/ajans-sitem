import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Spline 3D paketlerinin Next.js içinde sorunsuz derlenmesini sağlar
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
  
  // Draco Decoder dosyasının bulunamadığı webpack hatasını yoksayar
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    // Spline için kural ekleme
    config.module.rules.push({
      test: /draco_decoder\.js$/,
      use: 'null-loader',
    });
    return config;
  },
};

export default nextConfig;