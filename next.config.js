/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  },
};

module.exports = nextConfig;
