'use strict';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  isProd,
  isDev,

  htmlmin: {
    collapseWhitespace: isProd,
    removeComments: isProd,
    ignoreCustomFragments: [/<br>\s/gi]
  },

  webpack: {
    mode: isProd ? 'production' : 'development'
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg']
  },

  webp: {
    quality: 90
  }

};
