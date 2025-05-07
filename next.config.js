/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly disable the App Router
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig