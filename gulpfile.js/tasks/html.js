'use strict';
/* global $ */

module.exports = () => {
  return $.gulp.src($.path.html.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'HTML',
        message: error.message
      }))
    }))
    .pipe($.gp.fileInclude())
    .pipe($.gp.size({ title: 'HTML before' }))
    .pipe($.gp.htmlmin($.app.htmlmin))
    .pipe($.gp.size({ title: 'HTML after' }))
    .pipe($.gp.htmlBemValidator())
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream());
};
