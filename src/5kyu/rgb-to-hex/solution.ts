const toHex = (value: number): string =>
  Math.min(Math.max(0, value), 255).toString(16).padStart(2, '0').toUpperCase();

export function rgb(r: number, g: number, b: number): string {
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}
