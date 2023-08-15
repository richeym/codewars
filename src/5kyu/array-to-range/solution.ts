function* range(start: number, end: number) {
  let curr = start;
  while (curr <= end) {
    yield curr;
    curr++;
  }
}
export function toRange(arr: number[]): string {
  const sorted = [...arr].sort((a, b) => a - b);

  if (arr.length === 0) return '';

  const ranges: number[][] = [];
  let currentRange: number[] = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > sorted[i - 1] + 1) {
      if (sorted[i - 1] > currentRange[0]) {
        currentRange.push(sorted[i - 1]);
      }
      ranges.push(currentRange);
      currentRange = [];
      currentRange.push(sorted[i]);
    } else if (i === 0 || i === sorted.length - 1) {
      currentRange.push(sorted[i]);
    }

    if (i === sorted.length - 1) {
      ranges.push(currentRange);
    }
  }

  return ranges.map(value => value.join('_')).join(',');
}

export function toArray(str: string): number[] {
  if (!str) return [];

  const ranges: number[] = [];

  str.split(',').forEach(value => {
    if (value.indexOf('_') > 0) {
      const parsed = value.split('_');
      const start = parseInt(parsed[0]);
      const end = parseInt(parsed[1]);
      for (const i of range(start, end)) {
        ranges.push(i);
      }
    } else {
      ranges.push(parseInt(value));
    }
  });

  return ranges.sort((a, b) => a - b);
}
