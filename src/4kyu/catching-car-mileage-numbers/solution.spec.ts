import {
  awesomePhrasesCheck,
  isInteresting,
  palindromeCheck,
  sameDigitsCheck,
  sequentialDigitsCheck,
  trailingZerosCheck,
} from './solution';
import {assert} from 'chai';

describe('Solution', () => {
  describe('When using less than three digit numbers', () => {
    it.each([[0], [97]])('Then number %p is not interesting', n => {
      assert.strictEqual(isInteresting(n, []), 0);
    });
  });

  describe('When using boring numbers', () => {
    it.each([[11207], [11208]])(
      'Then boring number %p is not interesting',
      n => {
        assert.strictEqual(isInteresting(n, []), 0);
      }
    );

    it.each([
      [3236, [1337, 256], 0],
      [11208, [1337, 256], 0],
    ])(
      'Then boring number %p with awesome phrase input: %p is not interesting',
      (n, awesomePhrases, expected) => {
        assert.strictEqual(isInteresting(n, awesomePhrases), expected);
      }
    );
  });

  describe('When evaluating a number for trailing zeros', () => {
    it.each([
      [100, true],
      [90000, true],
      [1100, false],
      [1002, false],
    ])('Then %p returns %p', (n, expected: boolean) => {
      assert.strictEqual(trailingZerosCheck({n, awesomePhrases: []}), expected);
    });
  });

  describe('When evaluating a number for all digits the same', () => {
    it.each([
      [111, true],
      [101, false],
    ])('Then %p returns %p', (n, expected) => {
      assert.strictEqual(sameDigitsCheck({n, awesomePhrases: []}), expected);
    });
  });

  describe('When evaluating a number for sequential ascending digits', () => {
    // eslint-disable-next-line no-restricted-properties
    it.each([
      [1234, true],
      [456, true],
      [7890, true],
      [4568, false],
    ])('Then %p returns %p', (n, expected) => {
      assert.strictEqual(
        sequentialDigitsCheck({n, awesomePhrases: []}),
        expected
      );
    });
  });

  describe('When evaluating a number for sequential descending digits', () => {
    it.each([
      [4321, true],
      [3210, true],
      [421, false],
    ])('Then %p returns %p', (n, expected) => {
      assert.strictEqual(
        sequentialDigitsCheck({n, awesomePhrases: []}),
        expected
      );
    });
  });

  describe('When evaluating a number that is a palindrome', () => {
    it.each([
      [1221, true],
      [73837, true],
      [11211, true],
      [1232, false],
    ])('Then %p returns %p', (n, expected) => {
      assert.strictEqual(palindromeCheck({n, awesomePhrases: []}), expected);
    });
  });

  describe('When evaluating a number that is an awesome phrase', () => {
    it.each([
      [1337, [1337, 256], true],
      [1337, [256], false],
    ])('Then %p returns %p', (n, awesomePhrases, expected) => {
      assert.strictEqual(awesomePhrasesCheck({n, awesomePhrases}), expected);
    });
  });

  describe('When using sample test inputs', () => {
    it.each([
      [3, [1337, 256], 0],
      [3, [1337, 256], 0],
      [1336, [1337, 256], 1],
      [1337, [1337, 256], 2],
      [11209, [1337, 256], 1],
      [11208, [1337, 256], 0],
      [11211, [1337, 256], 2],
    ])(
      'Then works for sample test case: %p with awesome phrase input: %p',
      (n, awesomePhrases, expected) => {
        assert.strictEqual(isInteresting(n, awesomePhrases), expected);
      }
    );
  });
});
