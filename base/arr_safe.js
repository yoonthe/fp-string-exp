'use strict';
const curry = require('lodash/fp/curry');

const safeJoin = curry((sep, arr) => Array.isArray(arr) ? arr.join(sep) : arr);
const safeReverse = arr => Array.isArray(arr) ? arr.reverse() : arr;

module.exports = {
  safeJoin,
  safeReverse,
};