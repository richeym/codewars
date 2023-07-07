export const narcissistic = (input: number) => {
  const digits = input.toString().split('').map(Number);
  const power = digits.length;

  const total = digits.reduce((accumulator, current) => {
    const newAccumulator = accumulator + Math.pow(current, power);
    console.log(`${current}, ${accumulator}, ${newAccumulator}`);
    return newAccumulator;
  }, 0);

  return input === total;
};
