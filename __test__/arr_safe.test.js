const safeArrFns = require('../base/arr_safe');
const fp = require('../index');

describe('fp(safeArrFns)', () => {
  const flow = fp(safeArrFns);
  describe('flow(\'safeReverse|>safeJoin(\'_\')\')', () => {
    const executor = flow('safeReverse|>safeJoin(\'_\')');
    test.each([[[1, 2, 3], '3_2_1'], [[], ''], [[1.4, 1.1, 1.3], '1.3_1.1_1.4']])(
      '%p => reverse => join_ => %s',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
    expect(executor(null)).toBe(null);
    expect(executor(undefined)).toBe(undefined);
    expect(executor('')).toBe('');
    expect(executor(123)).toBe(123);
    expect(executor({ 0: 1, 1: 2, 2: 3, length: 3})).toEqual({ 0: 1, 1: 2, 2: 3, length: 3});
  });
});
