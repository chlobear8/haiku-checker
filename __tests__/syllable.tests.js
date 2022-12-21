import syllable from './../src/syllable.js';

describe('syllable', () => {
  test('It should split input string into an array', () => {
    const input = "why";
    const output = syllable(input);
    expect(output).toEqual(['w', 'h', 'y']);
  });
  test('It should find the first vowel in an input string and slice the first consonant in front of it', () => {
    const input2 = "test";
    const output2 = syllable(input2);
    expect(output2).toEqual(['s', 't']);
  });
});
