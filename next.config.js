/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
    localeDetection: true
  },
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com'],
  }
}

module.exports = nextConfig;