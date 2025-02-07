function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let currentLine: string[] = [];
  let currentLength = 0;
  for (const word of words) {
    // Check if adding the current word exceeds maxWidth
    if (currentLength + word.length + currentLine.length > maxWidth) {
      result.push(justifyLine(currentLine, currentLength, maxWidth, false));
      currentLine = [];
      currentLength = 0;
    }
    currentLine.push(word);
    currentLength += word.length;
  }
  // Handle the last line
  if (currentLine.length > 0) {
    result.push(justifyLine(currentLine, currentLength, maxWidth, true));
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
    // Left justify for the last line or single-word lines
    return (
      line.join(" ") + " ".repeat(maxWidth - lineLength - (line.length - 1))
    );
  }
  const spacesNeeded = maxWidth - lineLength;
  const gaps = line.length - 1;
  const spacePerGap = Math.floor(spacesNeeded / gaps);
  const extraSpaces = spacesNeeded % gaps;
  let justified = "";
  for (let i = 0; i < line.length - 1; i++) {
    justified += line[i] + " ".repeat(spacePerGap + (i < extraSpaces ? 1 : 0));
  }
  justified += line[line.length - 1]; // Add the last word without extra space
  return justified;
}
