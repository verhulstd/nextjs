/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
  i18n: {
    locales: ["nl", "fr", "en"],
    defaultLocale: "nl",
    localeDetection: false,
  },
};

module.exports = nextConfig;
