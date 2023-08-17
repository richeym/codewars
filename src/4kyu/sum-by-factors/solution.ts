const getPrimeNumbers = (limit: number): number[] => {
  const primes: number[] = [];

  for (let candidatePrime = 2; candidatePrime <= limit; candidatePrime++) {
    if (candidatePrime === 2) {
      primes.push(2);
      continue;
    }

    if (candidatePrime % 2 === 0) {
      continue;
    }

    const sqrt = Math.sqrt(candidatePrime);
    let isPrime = true;
    for (let divisor = 2; divisor <= sqrt; divisor++) {
      if (candidatePrime % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(candidatePrime);
    }
  }

  return primes;
};

export function sumOfDivided(list: number[]): number[][] {
  const results: number[][] = [];
  const largestPrime = Math.max(...list.map(Math.abs));
  const primeNumbers = getPrimeNumbers(largestPrime);

  const primeFactors = new Map<number, number>();

  for (const num of list) {
    for (const prime of primeNumbers) {
      if (Math.abs(num) % prime === 0) {
        primeFactors.set(prime, (primeFactors.get(prime) || 0) + num);
      }
    }
  }

  for (const [key, value] of primeFactors.entries()) {
    results.push([key, value]);
  }

  results.sort((a, b) => a[0] - b[0]);

  return results;
}
