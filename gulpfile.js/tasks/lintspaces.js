'use strict';
/* global $ */

module.exports = (cb) => {
  $.gulp.src([
    '*.json',
    '*.md',
    './gulpfile.js/**/*.js',
    './src/pages/**/*.html',
    'src/js/**/*.js',
    'src/img/**/*.svg',
    'src/sass/**/*.scss',
    '!src/sass/base/normalize.scss'
  ])
    .pipe($.gp.lintspaces({ editorconfig: '.editorconfig' }))
    .pipe($.gp.lintspaces.reporter());
  cb();
};
