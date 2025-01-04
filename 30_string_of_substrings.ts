// This solution dont work
// Even using recursion you break Nodejs  heap limit
function findSubstring(s: string, words: string[]): number[] {
  const ans: number[] = [];
  const possibleComb = phraseGenerator(words);

  for (const word of possibleComb) {
    let startIndex = 0;
    while (startIndex < s.length) {
      const found = s.indexOf(word, startIndex);

      if (found === -1) break;

      ans.push(found);
      startIndex = found + 1;
    }
  }
  const exclude = [...new Set(ans)].sort((a, b) => a - b);
  return exclude;
}

// Generate possibles words with recursion
function phraseGenerator(words: string[]) {
  if (words.length === 1) return [words[0]];

  const combinations: string[] = [];

  words.forEach((word, i) => {
    const remainingWords = words.slice(0, i).concat(words.slice(i + 1));
    phraseGenerator(remainingWords).forEach((combination) => {
      combinations.push(word + combination);
    });
  });
  return combinations;
}

// Real soluction
function findSubstringV2(s: string, words: string[]): number[] {
  const result: number[] = [];
  const wordLength = words[0].length;
  const numWords = words.length;
  const substringLength = wordLength * numWords;

  // Create a frequency map for words
  const wordCount = new Map<string, number>();
  for (const word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  // Slide over the string
  for (let i = 0; i <= s.length - substringLength; i++) {
    const seen = new Map<string, number>();
    let j = 0;

    // Check each word in the current substring
    while (j < numWords) {
      const start = i + j * wordLength;
      const word = s.substring(start, wordLength);

      if (!wordCount.has(word)) break;

      seen.set(word, (seen.get(word) || 0) + 1);

      if (seen.get(word)! > wordCount.get(word)!) break;

      j++;
    }

    // If all words match, add the starting index
    if (j === numWords) {
      result.push(i);
    }
  }

  return result;
}

const s = "fffffffffffffffffffffffffffffffff";
const words = [
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
];
console.log(findSubstringV2(s, words));
