'use strict';
/* global $ */

// Plugins
const webpack = require('webpack-stream');

module.exports = () => {
  return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'JS',
        message: error.message
      }))
    }))
    .pipe($.gp.babel({
      presets: ['@babel/env']
    }))
    .pipe(webpack($.app.webpack))
    .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
};
