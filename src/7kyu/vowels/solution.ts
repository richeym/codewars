export class Kata {
  static getCount = (str: string): number =>
    str.match(/[a|e|i|o|u]/g)?.length ?? 0;
}
