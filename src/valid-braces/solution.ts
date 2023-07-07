type BraceDefinition = {
  open: string;
  close: string;
};

const braceDefinitions: BraceDefinition[] = [
  {open: '{', close: '}'},
  {open: '(', close: ')'},
  {open: '[', close: ']'},
];

export const validBraces = (input: string) => {
  const stack: string[] = [];

  for (const currentBrace of input) {
    if (braceDefinitions.some(brace => brace.open === currentBrace)) {
      stack.push(currentBrace);
    } else if (braceDefinitions.some(brace => brace.close === currentBrace)) {
      const lastOpeningBrace = stack.pop();
      if (
        !braceDefinitions.some(
          brace =>
            currentBrace === brace.close && lastOpeningBrace === brace.open
        )
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
