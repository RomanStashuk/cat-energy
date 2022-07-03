'use strict';
/* global $ */

// Plugins
const del = require('del');

module.exports = () => {
  return del($.path.root);
};
