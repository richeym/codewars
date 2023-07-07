export const number = (input: string[]): string[] =>
  input.map((value, index) => `${index + 1}: ${value}`);
