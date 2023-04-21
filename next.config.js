/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    loader: "cloudinary",
    domains: ["res.cloudinary.com"],
    path: "https://res.cloudinary.com/<cloudinary-id>/image/upload",
  },
};

module.exports = nextConfig;
