import {fizzBuzz} from './solution';

describe('Fizz Buzz', () => {
  it('Should return numbers for simplest case', () => {
    const result = fizzBuzz(2);
    expect(result).toStrictEqual([1, 2]);
  });

  it('Should add "fizz" when the number is a multiple of 3', () => {
    const result = fizzBuzz(3);
    expect(result).toStrictEqual([1, 2, 'fizz']);
  });

  it('Should add "buzz" when the number is a multiple of 5', () => {
    const result = fizzBuzz(5);
    expect(result).toStrictEqual([1, 2, 'fizz', 4, 'buzz']);
  });

  it('Should add "fizz buzz" when the number is a multiple of 3 and 5', () => {
    const result = fizzBuzz(15);
    expect(result).toStrictEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizz buzz',
    ]);
  });
});
