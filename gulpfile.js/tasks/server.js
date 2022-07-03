'use strict';
/* global $ */

module.exports = () => {
  $.browserSync.init({
    server: {
      baseDir: $.path.root
    },
    open: true,
    cors: true
  });
};
