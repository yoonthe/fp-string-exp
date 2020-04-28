const mathFns = require('../base/math');
const fp = require('../index');

describe('fp(mathFns)', () => {
  const flow = fp(mathFns);
  describe('flow(\'add(3)|>powR(2)\')', () => {
    const executor = flow('add(3)|>powR(2)');
    test.each([[1, 16], [0, 9], [-3, 0], [-100, Math.pow(97, 2)]])(
      '(%d + 3) ^ 2 = %d',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
  });
  describe('flow(\'add3(3, 4)|>pow(2)\')', () => {
    const executor = flow('add3(3, 4)|>pow(2)');
    test.each([[1, 256], [-3, 16]])(
      '2 ^ (%d + 3 + 4) = %d',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
  });
});
