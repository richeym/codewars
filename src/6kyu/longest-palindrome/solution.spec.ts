import {longestPalindrome} from './solution';

// TODO Add your tests here
describe('longest palindrome', () => {
  it('returns empty string if argument empty', () => {
    expect(longestPalindrome('')).toEqual('');
  });

  it('returns empty string if no palindrome', () => {
    const result = longestPalindrome('no palindrome');

    expect(result).toEqual('');
  });

  it('given a string that is a palindrome, returns that string', () => {
    const result = longestPalindrome('aha');
    expect(result).toEqual('aha');
  });

  const cases = [
    ['aha!', 'aha'],
    ['1. aha', 'aha'],
    ['abba aha', 'abba'],
    ['Hey, there is a bab aha abba', 'abba'],
  ];

  test.each(cases)('given %p, returns %p', (input, expected) => {
    const result = longestPalindrome(input);
    expect(result).toEqual(expected);
  });
});
