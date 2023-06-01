/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "_static",
  images: {
    unoptimized: true,
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
