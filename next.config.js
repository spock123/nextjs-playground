const nextTranslate = require('next-translate');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  env: {},
  pwa: {
    dest: 'public',
    runtimeCaching
  },
  images: {
    domains: ['images.dog.ceo']
  },
  experimental: {
    appDir: true
  }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withPWA(nextTranslate(withBundleAnalyzer(nextConfig)));
