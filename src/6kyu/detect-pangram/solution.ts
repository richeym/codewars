export const isPangram = (phrase: string): boolean =>
  new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;
