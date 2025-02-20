/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
    localeDetection: false
  },
  images: {
    remotePatterns: [
      {
        // Development pattern
        protocol: process.env.NEXT_PUBLIC_APP_URL?.split('://')[0] || 'http',
        hostname: process.env.NEXT_PUBLIC_APP_URL?.split('://')[1]?.split(':')[0] || 'localhost',
        port: process.env.NEXT_PUBLIC_APP_URL?.split(':')[2] || '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig;