import syllable from './../src/haiku.js';

describe('syllable', () => {
  test('It should split input string into an array', () => {
      const input = "test";
      const output = [];
      expect(output).toEqual(['t', 'e', 's', 't']);
  });
});