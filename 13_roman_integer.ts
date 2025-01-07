const mappedRoman: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && mappedRoman[s[i]] < mappedRoman[s[i + 1]]) {
      sum -= mappedRoman[s[i]];
      continue;
    }
    sum += mappedRoman[s[i]];
  }

  return sum;
}

const romanNumber = "XXVVIII";

console.log(romanToInt(romanNumber));
