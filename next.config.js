/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.syntradeveloper.be",
        port: "",
        pathname: "/images/*",
      },
    ],
  },
};

module.exports = nextConfig;
