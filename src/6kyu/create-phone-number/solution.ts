export function createPhoneNumber(numbers: number[]): string {
  const areaCode = numbers.slice(0, 3).join('');
  const telephonePrefix = numbers.slice(3, 6).join('');
  const lineNumber = numbers.slice(6, 10).join('');

  return `(${areaCode}) ${telephonePrefix}-${lineNumber}`;
}
