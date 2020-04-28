'use strict';
const curry = require('lodash/fp/curry');

const safeSplit = curry((sep, str) => typeof str === 'string' ? str.split(sep) : str);

const safeJoin = curry((sep, arr) => Array.isArray(arr) ? arr.join(sep) : arr);

module.exports = {
  safeSplit,
  safeJoin,
};