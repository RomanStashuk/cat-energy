'use strict';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  isProd,
  isDev,

  htmlmin: {
    collapseWhitespace: isProd,
    removeComments: isProd
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
