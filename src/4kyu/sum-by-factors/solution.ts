function* primeNumberSequence(): Iterator<number> {
  let next = 2;
  while (true) {
    yield next;

    let foundNextPrime = false;

    while (!foundNextPrime) {
      next++;

      if (next % 2 === 0) {
        continue;
      }

      foundNextPrime = true;

      const sqrt = Math.sqrt(next);
      for (let i = 2; i <= sqrt; i++) {
        if (next % i === 0) {
          foundNextPrime = false;
          break;
        }
      }
    }
  }
}

export function sumOfDivided(list: number[]): number[][] {
  const results: number[][] = [];

  const totals: Record<number, number> = {};
  const largestPrime = list.map(x => Math.abs(x)).sort((a, b) => b - a)[0];

  for (let listIndex = 0; listIndex < list.length; listIndex++) {
    for (let i = 2; i <= Math.abs(largestPrime); i++) {
      const primes = primeNumberSequence();
      for (
        let prime = primes.next().value;
        prime <= Math.abs(largestPrime);
        prime = primes.next().value
      ) {
        if (i * prime === Math.abs(list[listIndex])) {
          if (Object.prototype.hasOwnProperty.call(totals, prime)) {
            totals[prime] += list[listIndex];
          } else {
            totals[prime] = list[listIndex];
          }
        }
      }
    }
  }

  const keys = Object.keys(totals);

  keys
    .map(x => parseInt(x))
    .sort((a, b) => a - b)
    .forEach(key => {
      results.push([key, totals[key]]);
    });

  return results;
}
