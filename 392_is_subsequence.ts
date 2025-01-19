function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;
  for (const char of t) {
    if (sIndex === s.length) break;
    if (char === s[sIndex]) sIndex++;
  }

  return sIndex === s.length;
}

const testIsSubsequence = [{ s: "abc", t: "aifewbweqc" }];

for (const { s, t } of testIsSubsequence) {
  console.log(isSubsequence(s, t));
}
