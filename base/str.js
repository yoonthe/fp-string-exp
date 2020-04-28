'use strict';
const curry = require('lodash/fp/curry');

const split = curry((sep, str) => str.split(sep));
const join = curry((sep, arr) => arr.join(sep));

module.exports = {
  split,
  join,
};