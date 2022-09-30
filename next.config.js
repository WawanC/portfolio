/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cdn.jsdelivr.net",
      "play-lh.googleusercontent.com",
      'cdn-icons-png.flaticon.com'
    ],
  },
};

module.exports = nextConfig;
