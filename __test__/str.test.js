const strFns = require('../base/str');
const fp = require('../index');

describe('fp(strFns)', () => {
  const flow = fp(strFns);
  describe('flow(\'split(\'-\')|>join(\'_\')\')', () => {
    const executor = flow('split(\'-\')|>join(\'_\')');
    test.each([['3-2-1', '3_2_1'], ['', ''], ['1.3-1.1-1.4', '1.3_1.1_1.4']])(
      '%p => split- => join_ => %s',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
    expect(() => executor(null)).toThrow();
    expect(() => executor(undefined)).toThrow();
    expect(() => executor([])).toThrow();
    expect(() => executor(123)).toThrow();
    expect(() => executor({ 0: 1, 1: 2, 2: 3, length: 3})).toThrow();
  });
});
