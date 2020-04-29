const objFns = require('../base/obj');
const fp = require('../index');

describe('fp(objFns)', () => {
  const flow = fp(objFns);
  describe('flow(\'propOr(null, \'a[0].c\')|>shape({ \'test\': \'$0\'})\')', () => {
    const executor = flow('propOr(null, \'a[0].c\')|>shape({ \'test\': \'$0\'})');
    test.each([
      [{ a: [{c: 123 }]}, { test: 123 }],
      [{ a: [{c: null }]}, { test: null }],
      [{ a: [{c: false }]}, { test: false }],
      [{ a: 123 }, { test: null }],
      [{ value: -123 }, { test: null }],
      [{ value: null }, { test: null }],
      [[], { test: null }]])(
      '%p => prop_a[0].c => shape_{test:$0} => %s',
      (input, expected) => {
        expect(executor(input)).toEqual(expected);
      }
    );
  });

  describe('flow(\'prop(\'value\')|>shape([\'map\', \'$0\'])|>propOf({\'map\': { \'test\': 123, \'t\': 1 }})\')', () => {
    const executor = flow('prop(\'value\')|>shape([\'map\', \'$0\'])|>propOf({\'map\': { \'test\': 123, \'t\': 1 }})');
    test.each([
      [{ value: 'test' }, 123],
      [{ value: 't' }, 1],
      [{ value: 123 }, undefined]])(
      '%p => prop_value => shape_[map,$0] => propOf_{} => %s',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
  });

  describe('flow(\'prop(\'value\')|>shape([\'map\', \'$0\'])|>propOfOr( null, {\'map\': { \'test\': 123, \'t\': 1 }})\')', () => {
    const executor = flow('prop(\'value\')|>shape([\'map\', \'$0\'])|>propOfOr( null, {\'map\': { \'test\': 123, \'t\': 1 }})');
    test.each([
      [{ value: 'test' }, 123],
      [{ value: 't' }, 1],
      [{ value: 123 }, null]])(
      '%p => prop_value => shape_[map,$0] => propOf_{} => %s',
      (input, expected) => {
        expect(executor(input)).toBe(expected);
      }
    );
  });
});
