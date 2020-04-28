const arrFns = require('../base/arr');
const fp = require('../index');

describe('fp(arrFns)', () => {
  const flow = fp(arrFns);
  describe('flow(\'reverse|>join(\'_\')\')', () => {
    const executor = flow('reverse|>join(\'_\')');
    test.each([[[1, 2, 3], '3_2_1'], [[], ''], [[1.4, 1.1, 1.3], '1.3_1.1_1.4']])(
      '%p => reverse => join_ => %s',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
    expect(() => executor(null)).toThrow();
    expect(() => executor(undefined)).toThrow();
    expect(() => executor('')).toThrow();
    expect(() => executor(123)).toThrow();
    expect(() => executor({ 0: 1, 1: 2, 2: 3, length: 3})).toThrow();
  });
});
