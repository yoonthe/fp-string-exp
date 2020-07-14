'use strict';
const isEqual = require('lodash/isEqual');
const toBoolNot = o => !o;
const equal = a => b => {
  // console.log(a,b);
  return Object.is(a, b);
}

module.exports = {
  toBoolNot,
  equal,
  isEqual,
};