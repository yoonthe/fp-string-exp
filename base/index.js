'use strict';

const base = require('./index_only');
const arr_safe = require('./arr_safe');
const str_safe = require('./str_safe');

module.exports = Object.assign({}, base, arr_safe, str_safe);