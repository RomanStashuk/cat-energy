'use strict';
/* global $ */

module.exports = () => {
  return $.gulp.src('./src/favicon/**/*.*')
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'Copy',
        message: error.message
      }))
    }))
    .pipe($.gulp.dest(`${$.path.root}/favicon`));
};
