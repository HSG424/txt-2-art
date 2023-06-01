/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.deepai.org",
        port: "",
        pathname: "/job-view-file/**",
      },
    ],
  },
};

module.exports = nextConfig;
