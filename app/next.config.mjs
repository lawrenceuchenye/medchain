import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    PINATA_GATEWAY_URL: process.env.PINATA_GATEWAY_URL,
    PINATA_JWT: process.env.PINATA_JWT,
  },
};

export default nextConfig;
