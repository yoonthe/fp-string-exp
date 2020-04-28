'use strict';
// 5
const arr = require('./arr');
const lang = require('./lang');
const math = require('./math');
const obj = require('./obj');
const str = require('./str');

module.exports = Object.assign({}, arr, lang, math, obj, str);