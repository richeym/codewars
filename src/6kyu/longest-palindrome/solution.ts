/** return the output array and ignore all non-op characters */
export const longestPalindrome = (data: string): string => {
  if (!data) return '';

  let longest = '';

  const words = data.split(' ').map(word => {
    return word.replace(/[^A-Za-z]/gi, '');
  });

  for (const word of words) {
    if (word === word.split('').reverse().join('')) {
      if (word.length > longest.length && word.length > 1) {
        longest = word;
      }
    }
  }

  return longest;
};
