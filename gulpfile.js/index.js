'use strict';
/* global $ */

global.$ = {
  // Packages
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  task: require('require-dir')('./tasks', { recurse: true }),

  // Config
  path: require('./config/paths.js'),
  app: require('./config/app.js')
};

// Задачи
exports.html = $.task.html;
exports.scripts = $.task.scripts;
exports.sass = $.task.sass;
exports.fonts = $.task.fonts;
exports.images = $.task.images;
exports.lintspaces = $.task.lintspaces;
exports.zip = $.task.zip;

// Сборка
const build = $.gulp.series(
  $.task.clear,
  $.gulp.parallel(
    $.task.copy,
    $.task.html,
    $.task.sass,
    $.task.fonts,
    $.task.scripts,
    $.task.images
  )
);

const dev = $.gulp.series(
  build,
  $.gulp.parallel($.task.watcher, $.task.server)
);

exports.default = $.app.isProd
  ? build
  : dev;
