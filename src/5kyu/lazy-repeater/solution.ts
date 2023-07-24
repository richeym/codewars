export function makeLooper(str: string): () => string {
  let index = 0;

  return () => {
    if (index >= str.length) index = 0;
    return str[index++];
  };
}
