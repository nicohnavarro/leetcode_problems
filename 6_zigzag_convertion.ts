function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows: string[] = Array(Math.min(numRows, s.length)).fill("");
  let curRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[curRow] += char;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}

function convertOptimized(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;

  let result = "";
  const cycleLen = 2 * numRows - 2;

  for (let row = 0; row < numRows; row++) {
    for (let j = row; j < s.length; j += cycleLen) {
      result += s[j];
      const secondIdx = j + cycleLen - 2 * row;
      if (row !== 0 && row !== numRows - 1 && secondIdx < s.length) {
        result += s[secondIdx];
      }
    }
  }

  return result;
}

const testConvert = [
  { text: "PAYPALISHIRING", rows: 3 },
  { text: "PAYPALISHIRING", rows: 4 },
  { text: "A", rows: 1 },
];

for (const { text, rows } of testConvert) {
  console.log(convert(text, rows));
}
