'use strict';
/* global $ */

module.exports = () => {
  $.gulp.watch($.path.html.watch, $.task.html).on('all', $.browserSync.reload);
  $.gulp.watch($.path.js.watch, $.task.scripts).on('all', $.browserSync.reload);
  $.gulp.watch($.path.sass.watch, $.task.sass).on('all', $.browserSync.reload);
  $.gulp.watch($.path.img.watch, $.task.images).on('all', $.browserSync.reload);
  $.gulp.watch($.path.fonts.watch, $.task.fonts).on('all', $.browserSync.reload);
}
