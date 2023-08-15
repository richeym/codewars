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

  for (let listIndex = 0; listIndex < list.length; listIndex++) {
    for (let i = 2; i <= Math.abs(list[listIndex]) / 2; i++) {
      const primes = primeNumberSequence();
      for (
        let prime = primes.next().value;
        prime < Math.abs(list[listIndex]) / 2;
        prime = primes.next().value
      ) {
        if (i * prime === Math.abs(list[listIndex])) {
          const p = results.find(x => x[0] === prime);
          if (p) {
            p[1] += list[listIndex];
          } else {
            results.push([prime, list[listIndex]]);
          }
        }
      }
    }
  }

  results.sort((a, b) => a[0] - b[0]);

  return results;
}
