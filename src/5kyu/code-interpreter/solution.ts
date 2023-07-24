export function brainLuck(code: string, input: string): string {
  const data: number[] = new Array(5000).fill(0);
  let output = '';

  let dataPointer = 0;
  let inputPointer = 0;
  let instructionPointer = 0;

  while (instructionPointer < code.length) {
    const instruction = code[instructionPointer];
    if (instruction === '>') {
      dataPointer++;
    } else if (instruction === '<') {
      dataPointer--;
    } else if (instruction === '+') {
      data[dataPointer] = data[dataPointer] === 255 ? 0 : data[dataPointer] + 1;
    } else if (instruction === '-') {
      data[dataPointer] = data[dataPointer] === 0 ? 255 : data[dataPointer] - 1;
    } else if (instruction === '.') {
      output += String.fromCharCode(data[dataPointer]);
    } else if (instruction === ',') {
      data[dataPointer] = input.charCodeAt(inputPointer);
      inputPointer++;
    } else if (instruction === '[') {
      if (data[dataPointer] === 0) {
        let indents = 0;
        for (; instructionPointer < code.length; instructionPointer++) {
          if (code[instructionPointer] === ']') {
            indents--;
            if (indents === 0) {
              break;
            }
          } else if (code[instructionPointer] === '[') {
            indents++;
          }
        }
      }
    } else if (instruction === ']') {
      if (data[dataPointer] !== 0) {
        let indents = 0;
        for (; instructionPointer >= 0; instructionPointer--) {
          if (code[instructionPointer] === '[') {
            indents--;
            if (indents === 0) {
              break;
            }
          } else if (code[instructionPointer] === ']') {
            indents++;
          }
        }
      }
    }
    instructionPointer++;
  }

  return output;
}
