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
      '%p => split- => join_ => %s',
      (input, expected) => {
        expect(executor(input)).toEqual(expected);
      }
    );
  });
});
