'use strict';
// 5
const arr_safe = require('./arr_safe');
const lang = require('./lang');
const math = require('./math');
const obj = require('./obj');
const str_safe = require('./str_safe');

module.exports = Object.assign({}, arr_safe, lang, math, obj, str_safe);