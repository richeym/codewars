/** return the output array and ignore all non-op characters */
export const parse = (data: string): number[] => {
  let value = 0;
  const output: number[] = [];

  data.split('').forEach(element => {
    if (element === 'i') {
      value++;
    } else if (element === 'd') {
      value--;
    } else if (element === 's') {
      value *= value;
    } else if (element === 'o') {
      output.push(value);
    }
  });

  return output;
};
