const path = require("path");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["swiper", "ssr-window", "dom7"],
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
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
