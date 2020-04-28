'use strict';
const curry = require('lodash/fp/curry');

const join = curry((sep, arr) => arr.join(sep));
const reverse = arr => arr.reverse();

module.exports = {
  join,
  reverse,
};