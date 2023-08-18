type Move = 'down' | 'up' | 'right' | 'left';

export function streetFighterSelection(
  fighters: string[][],
  position: number[],
  moves: Move[]
): string[] {
  const [height, width] = [fighters.length, fighters[0].length];
  let [y, x] = position;

  const selected: string[] = [];

  moves.forEach(move => {
    switch (move) {
      case 'up':
        y = Math.max(0, y - 1);
        break;
      case 'down':
        y = Math.min(height - 1, y + 1);
        break;
      case 'left':
        x = x > 0 ? x - 1 : width - 1;
        break;
      case 'right':
        x = x < width - 1 ? x + 1 : 0;
        break;
    }
    selected.push(fighters[y][x]);
  });

  return selected;
}
