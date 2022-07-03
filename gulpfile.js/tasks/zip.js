'use strict';
/* global $ */

const leadingZero = number => number < 10 ? `0${number}` : number;

const getDateTime = () => {
  const currentDateTime = new Date();
  const year = currentDateTime.getFullYear();
  const month = leadingZero(currentDateTime.getMonth());
  const day = leadingZero(currentDateTime.getDate() + 1);
  const hours = leadingZero(currentDateTime.getHours());
  const minutes = leadingZero(currentDateTime.getMinutes());
  const seconds = leadingZero(currentDateTime.getSeconds());

  return `${year}-${month}-${day}^${hours}_${minutes}_${seconds}`;
};

// Сборка в архив
module.exports = () => {
  const dateTime = getDateTime();
  const fileName = `cat-energy-${dateTime}.zip`;

  return $.gulp.src(`${$.path.root}/**/*.*`)
    .pipe($.gp.zip(fileName))
    .pipe($.gulp.dest('./dist'));
};
