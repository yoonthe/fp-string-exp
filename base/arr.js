'use strict';
const curry = require('lodash/fp/curry');
const concat = require('lodash/fp/concat');

const join = curry((sep, arr) => arr.join(sep));
const reverse = arr => arr.reverse();

module.exports = {
  join,
  reverse,
  concat,
};