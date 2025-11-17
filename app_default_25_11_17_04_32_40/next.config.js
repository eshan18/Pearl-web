/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.pixabay.com",
      "picsum.photos",
      "via.placeholder.com"
    ]
  }
};

module.exports = nextConfig;
