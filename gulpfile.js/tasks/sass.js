'use strict';
/* global $ */

// Plugins
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');

module.exports = () => {
  return $.gulp.src($.path.sass.src, { sourcemaps: $.app.isDev })
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'SASS',
        message: error.message
      }))
    }))
    .pipe($.gp.sassGlob())
    .pipe(sass())
    // .pipe($.gp.webpCssFixed())
    .pipe($.gp.postcss([
      autoprefixer()
    ]))
    // .pipe($.gp.shorthand())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gulp.dest($.path.sass.dest, { sourcemaps: $.app.isDev }))
    .pipe($.gp.rename({ suffix: '.min' }))
    .pipe($.gp.size({ title: 'CSS before' }))
    .pipe($.gp.csso())
    .pipe($.gp.size({ title: 'CSS after' }))
    .pipe($.gulp.dest($.path.sass.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream());
};
