export const fizzBuzz = (n: number): (string | number)[] => {
  const result: (string | number)[] = [];

  for (let i = 1; i <= n; i++) {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;

    if (isMultipleOf3 && isMultipleOf5) {
      result.push('fizz buzz');
    } else if (isMultipleOf3) {
      result.push('fizz');
    } else if (isMultipleOf5) {
      result.push('buzz');
    } else {
      result.push(i);
    }
  }

  return result;
};
