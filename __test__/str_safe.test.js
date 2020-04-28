const safeStrFns = require('../base/str_safe');
const fp = require('../index');

describe('fp(safeStrFns)', () => {
  const flow = fp(safeStrFns);
  describe('flow(\'safeSplit(\'-\')|>safeJoin(\'_\')\')', () => {
    const executor = flow('safeSplit(\'-\')|>safeJoin(\'_\')');
    test.each([['3-2-1', '3_2_1'], ['', ''], ['1.3-1.1-1.4', '1.3_1.1_1.4']])(
      '%p => split- => join_ => %s',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
    expect(executor(null)).toBe(null);
    expect(executor(undefined)).toBe(undefined);
    expect(executor([])).toBe('');
    expect(executor(123)).toBe(123);
    expect(executor({ 0: 1, 1: 2, 2: 3, length: 3})).toEqual({ 0: 1, 1: 2, 2: 3, length: 3});
  });
});