// https://www.quickperm.org/
const quickPerm = (input: number): number[] => {
  const a = input.toString().split('').map(Number);
  const N = a.length;
  const p: number[] = [...Array(N + 1).keys()];
  const results = new Set<number>();
  let i = 1;

  while (i < N) {
    p[i]--;
    const j = i % 2 === 0 ? 0 : p[i];

    [a[j], a[i]] = [a[i], a[j]];

    const result = parseInt(a.join(''));
    if (result > input) results.add(result);

    i = 1;
    while (p[i] === 0) {
      p[i] = i;
      i++;
    }
  }

  return Array.from(results.values());
};

export function nextBigger(n: number): number {
  const permutations = quickPerm(n);
  permutations.sort();

  return permutations.length > 0 ? permutations[0] : -1;
}
