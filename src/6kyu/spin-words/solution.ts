export const spinWords = (words: string): string =>
  words
    .split(' ')
    .map(word => (word.length >= 5 ? word.split('').reverse().join('') : word))
    .join(' ');
