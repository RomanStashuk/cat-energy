'use strict';
/* global $ */

module.exports = () => {
  $.gulp.watch($.path.html.watch, $.task.html);
  $.gulp.watch($.path.js.watch, $.task.scripts);
  $.gulp.watch($.path.sass.watch, $.task.sass);
  $.gulp.watch($.path.img.watch, $.task.images);
  $.gulp.watch($.path.fonts.watch, $.task.fonts);
};
