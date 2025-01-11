function longestCommonPrefix(words: string[]): string {
  if (words.length === 0) return "";
  if (words.length === 1) return words[0];
  let prefix = words[0];

  for (let i = 0; i < words.length; i++) {
    while (words[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

function longestCommonPrefixV2(words: string[]): string {
  if (words.length === 0) return "";
  if (words.length === 1) return words[0];
  let prefix = "";

  for (let i = 1; i < words.length; i++) {
    while (words[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

const testLongestCommonPrefix = ["doad", "door", "dock"];
console.log(longestCommonPrefix(testLongestCommonPrefix));
