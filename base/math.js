'use strict';
const curry = require('lodash/fp/curry');
const add = require('lodash/fp/add');
const curryRight = require('lodash/fp/curryRight');

const add3 = curry((a, b, c) => a + b + c);
const pow = curry(Math.pow);
const powR = curryRight(Math.pow);

module.exports = {
  add,
  add3,
  pow,
  powR,
};