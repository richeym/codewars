export function nextBigger(n: number): number {
  const digits = n.toString().split('').map(Number);
  const length = digits.length;

  if (n.toString() === [...digits].sort((a, b) => b - a).join('')) {
    return -1;
  }

  let i = length - 1;
  while (i > 0 && digits[i] <= digits[i - 1]) {
    i--;
  }
  const swapAIndex = i - 1;

  let nextDigitIndex: number | undefined;
  while (i < digits.length) {
    if (
      digits[i] > digits[swapAIndex] &&
      (nextDigitIndex === undefined || digits[i] < digits[nextDigitIndex])
    ) {
      nextDigitIndex = i;
    }
    i++;
  }

  const swapBIndex = nextDigitIndex!;

  [digits[swapAIndex], digits[swapBIndex]] = [
    digits[swapBIndex],
    digits[swapAIndex],
  ];

  const left = digits.slice(0, swapAIndex + 1);
  const right = digits.slice(swapAIndex + 1).sort();

  return parseInt([...left, ...right].join(''));
}
