export const smallEnough = (a: number[], limit: number): boolean =>
  a.every(x => x <= limit);
