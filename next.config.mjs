import path from "path";
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join("/", "pages")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "tong.visitkorea.or.kr",
        port: "",
        pathname: "/cms/resource/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
