export function superStreetFighterSelection(
  fighters: string[][],
  position: [number, number],
  moves: string[]
): string[] {
  const [height, width] = [fighters.length, fighters[0].length];
  let [y, x] = position;

  const selected: string[] = [];

  moves.forEach(move => {
    if (move === 'up') {
      const nextY = Math.max(0, y - 1);
      y = fighters[nextY][x] === '' ? y : nextY;
    } else if (move === 'down') {
      const nextY = Math.min(height - 1, y + 1);
      y = fighters[nextY][x] === '' ? y : nextY;
    } else if (move === 'left') {
      do {
        x = x > 0 ? x - 1 : width - 1;
      } while (fighters[y][x] === '');
    } else if (move === 'right') {
      do {
        x = x < width - 1 ? x + 1 : 0;
      } while (fighters[y][x] === '');
    }

    selected.push(fighters[y][x]);
  });

  return selected;
}
