function findSubstring(s: string, words: string[]): number[] {
  const result: number[] = [];
  const wordLength = words[0].length;
  const numWords = words.length;
  const substringLength = wordLength * numWords;
  if (s.length < substringLength) return result;
  // Build a frequency map for the words
  const wordCount = new Map<string, number>();
  for (const word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }
  // Iterate through the string using a sliding window
  for (let i = 0; i < wordLength; i++) {
    let left = i;
    let right = i;
    let currentCount = new Map<string, number>();
    while (right + wordLength <= s.length) {
      // Extract the current word
      const word = s.substring(right, right + wordLength);
      right += wordLength;
      // If the word is in the wordCount map
      if (wordCount.has(word)) {
        currentCount.set(word, (currentCount.get(word) || 0) + 1);
        // If the count of the current word exceeds its allowed frequency, slide the window
        while (currentCount.get(word)! > wordCount.get(word)!) {
          const leftWord = s.substring(left, left + wordLength);
          currentCount.set(leftWord, currentCount.get(leftWord)! - 1);
          left += wordLength;
        }
        // If the window matches the length of the concatenated words, record the start index
        if (right - left === substringLength) {
          result.push(left);
        }
      } else {
        // Reset the window if the word is not in the wordCount map
        currentCount.clear();
        left = right;
      }
    }
  }
  return result;
}
const s = "foobarfoobarthefoobarman";
const words = ["bar", "foo", "the"];
console.log(findSubstring(s, words));
