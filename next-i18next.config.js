/** @type {import('next').NextConfig} */
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
    localeDetection: true
  },
  defaultNS: 'common',
  localePath: './public/locales',
};

module.exports = config;