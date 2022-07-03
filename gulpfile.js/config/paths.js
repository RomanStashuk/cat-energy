'use strict';

const pathSrc = './src';
const pathDest = './build';

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + '/html/*.html',
    dest: pathDest,
    watch: pathSrc + '/html/**/*.html'
  },

  sass: {
    src: pathSrc + '/sass/*.{sass,scss}',
    dest: pathDest + '/css',
    watch: pathSrc + '/sass/**/*.{sass,scss}'
  },

  js: {
    src: pathSrc + '/js/*.js',
    dest: pathDest + '/js',
    watch: pathSrc + '/js/**/*.js'
  },

  fonts: {
    src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    dest: pathDest + '/fonts',
    watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}'
  },

  img: {
    src: pathSrc + '/img/**/*.{png,gif,svg,jpg,jpeg}',
    dest: pathDest + '/img',
    watch: pathSrc + '/img/**/*.{png,gif,svg,jpg,jpeg}'
  }
};
