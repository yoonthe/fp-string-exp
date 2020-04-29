'use strict';

const flow = require('lodash/fp/flow');
const memoize = require('lodash/memoize')

/**
 * @param {{any:function}} funs
 * @param {string} pipeSymbol
 */
const generate = (funs, pipeSymbol = '|>') => {
  const fns = funs;
  /**
   * transform str to function
   * @param {string} fnStr fn str
   * @return {function} fun arg => val
   */
  const transformFn = fnStr => {
    const execs = /^([^(]+)(\(([^)]*)\))?$/.exec(fnStr);
    if (!execs) {
      throw new Error(`fun str ${fnStr} is not correct!`);
    }
    const [, fnname, hasArg , args] = execs;
    if (fnname in fns) {
      if (hasArg) {
        return fns[fnname](...JSON.parse(`[${args.replace(/'/g, '"')}]`));
      }
      return fns[fnname];
    }
    throw new Error(`Expect function ${fnname} is not in fp range!`);
  }
  /**
   *   
   * @param {string} strexp 
   */
  const executor = strexp => {
    const fns = strexp.split(pipeSymbol);
    return flow(...(fns.map(transformFn)));
  }
  const memoFn = memoize(executor);
  return memoFn;
};

module.exports = generate;