import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572785/Sidcom/coldplay_bhjgji.png',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572789/Sidcom/kendrick_nfc4k6.png',
        search: '',
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572787/Sidcom/malone_cowbey.png',
        search: '',
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572788/Sidcom/21pilots_uo3bhm.png',
        search: '',
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572785/Sidcom/travis_qvmmti.png',
        search: '',
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572789/Sidcom/joji_ziw7mi.png',
        search: '',
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572786/Sidcom/coldplay2_r2lffj.png',
        search: '',
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572788/Sidcom/metro_kflhod.png',
        search: '',
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572788/Sidcom/weeknd_dgg7be.png',
        search: '',
      },

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/danxppoxy/image/upload/v1742572788/Sidcom/xxx_t7zojm.png',
        search: '',
      },

    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

// export default nextConfig;
