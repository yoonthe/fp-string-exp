'use strict';
// const curry = require('lodash/fp/curry');
const cloneDeepWith = require('lodash/cloneDeepWith');
const prop = require('lodash/fp/prop');
const propOr = require('lodash/fp/propOr');

const shape = sh => (...args) => {
  return cloneDeepWith(sh, value => {
    const execs = typeof value === 'string' ? /^\$(\d+)$/.exec(value) : null;
    if (execs) {
      return args[execs[1]];
    }
  });
};

module.exports = {
  prop,
  shape,
  propOr,
};