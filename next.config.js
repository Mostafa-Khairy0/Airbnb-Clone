/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "www.planetware.com",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "loremflickr.com",
      "images.unsplash.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig
