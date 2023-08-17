interface MileageInput {
  n: number;
  awesomePhrases: number[];
}

type InterestingMileageCheck = (input: MileageInput) => boolean;

export const trailingZerosCheck = (input: MileageInput): boolean =>
  (input.n.toString().match(/^\d0+$/) ?? []).length > 0;

export const sameDigitsCheck = (input: MileageInput): boolean =>
  new Set(input.n.toString()).size === 1;

export const sequentialDigitsCheck = (input: MileageInput): boolean => {
  const digits = input.n.toString().split('').map(Number);

  let lastDigit: number | undefined;
  let incrementingCandidate = true;
  let decrementingCandidate = true;

  for (
    let i = 0;
    i < digits.length && (incrementingCandidate || decrementingCandidate);
    i++
  ) {
    if (lastDigit !== undefined) {
      if (incrementingCandidate && digits[i] % 10 !== (lastDigit + 1) % 10) {
        incrementingCandidate = false;
      }
      if (decrementingCandidate && digits[i] % 10 !== (lastDigit - 1) % 10) {
        decrementingCandidate = false;
      }
    }
    lastDigit = digits[i];
  }

  return incrementingCandidate || decrementingCandidate;
};

export const palindromeCheck = (input: MileageInput): boolean =>
  input.n.toString() === input.n.toString().split('').reverse().join('');

export const awesomePhrasesCheck = (input: MileageInput): boolean =>
  input.awesomePhrases.find(x => x === input.n) ? true : false;

const mileageChecks: InterestingMileageCheck[] = [
  trailingZerosCheck,
  sameDigitsCheck,
  sequentialDigitsCheck,
  palindromeCheck,
  awesomePhrasesCheck,
];

export function isInteresting(n: number, awesomePhrases: number[]): number {
  let interestingMileage: number | undefined;

  for (let i = n; i <= n + 2; i++) {
    if (i < 100) continue;

    if (mileageChecks.find(x => x({n: i, awesomePhrases}))) {
      interestingMileage = i;
      break;
    }
  }

  return interestingMileage === undefined
    ? 0
    : interestingMileage === n
    ? 2
    : 1;
}
