const langFns = require('../base/lang');
const objFns = require('../base/obj');
const fp = require('../index');

describe('fp(langFns+objFns)', () => {
  const flow = fp(Object.assign({}, langFns, objFns));
  describe('flow(\'prop(\'value\')|>toBoolNot\')', () => {
    const executor = flow('prop(\'value\')|>toBoolNot');
    test.each([
      [{ value: 123 }, false],
      [[], true]])(
      '%p => split- => join_ => %s',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
  });
  describe('flow(\'prop(\'value\')|>equal(1)\')', () => {
    const executor = flow('prop(\'value\')|>equal(1)');
    test.each([
      [{ value: 123 }, false],
      [[], false],
      [{ value: 1 }, true]])(
      '%p => split- => join_ => %s',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
  });
});
