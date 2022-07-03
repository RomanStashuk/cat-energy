'use strict';
/* global $ */

module.exports = () => {
  return $.gulp.src($.path.fonts.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'Fonts',
        message: error.message
      }))
    }))
    .pipe($.gp.newer($.path.fonts.dest))
    .pipe($.gp.fonter($.app.fonter))
    .pipe($.gulp.dest($.path.fonts.dest))
    .pipe($.gp.ttf2woff2())
    .pipe($.gulp.dest($.path.fonts.dest));
};
