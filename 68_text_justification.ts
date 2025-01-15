function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let currentLine: string[] = [];
  let currentLength = 0;

  for (const word of words) {
    if (currentLength + word.length + currentLine.length > maxWidth) {
      result.push();
    }
  }

  return result;
}

function justifyLine(
  line: string[],
  lineLength: number,
  maxWidth: number,
  isLastLine: boolean
): string {
  if (isLastLine || line.length === 1) {
    return (
      line.join(" ") + " ".repeat(maxWidth - lineLength - (line.length - 1))
    );
  }

  const spacesNeeded = maxWidth - lineLength;
  const gaps = line.length - 1;
  return "";
}
