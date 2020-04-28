const mathFns = require('../base/math');
const arrFns = require('../base/arr');
const fp = require('../index');

describe('fp(mathFns)', () => {
  const flow = fp(mathFns);
  test('flow(\'add(3)|>pow(2)|>multiple(4)\') to throw error\')', () => {
    expect(() => flow('add(3)|>pow(2)|>multiple(4)')).toThrow(/multiple/);
  });
  test('flow(\'add(3)>pow(2)\') to throw error\')', () => {
    expect(() => flow('add(3)>pow(2)')).toThrow(/add\(3\)>pow\(2\)/);
  });
  describe('flow(\'add(3)|>powR(2)\')', () => {
    const executor = flow('add(3)|>powR(2)');
    test.each([[1, 16], [0, 9], [-3, 0], [-100, Math.pow(97, 2)]])(
      '(%d + 3) ^ 2 = %d',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
  });
  describe('flow(\'add3(3, 4)|>powR(2)\')', () => {
    const executor = flow('add3(3, 4)|>powR(2)');
    test.each([[1, 64], [-3, 16]])(
      '(%d + 3) ^ 2 = %d',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
  });
});

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
  });
});

describe('fp(arrFns, \'>\')', () => {
  const flow = fp(arrFns, '>');
  describe('flow(\'reverse>join(\'_\')\')', () => {
    const executor = flow('reverse>join(\'_\')');
    test.each([[[1, 2, 3], '3_2_1'], [[], ''], [[1.4, 1.1, 1.3], '1.3_1.1_1.4']])(
      '%p => reverse => join_ => %s',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
  });
});
