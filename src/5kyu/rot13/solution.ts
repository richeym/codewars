const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const crypt = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

export const rot13 = (str: string): string =>
  str.replace(/[a-zA-Z]/g, char => crypt[alphabet.indexOf(char)]);
