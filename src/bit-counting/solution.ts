export const countBits = (input: number) => {
  let currentValue = input;
  const bits: number[] = [];

  while (currentValue > 0) {
    bits.push(currentValue % 2);
    currentValue = Math.floor(currentValue / 2);
  }

  return bits.filter(x => x === 1).length;
};
