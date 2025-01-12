function reverseWords(s: string): string {
  const regex = /^[a-zA-Z0-9]+$/;
  const reverseString = s
    .split(" ")
    .filter((word) => regex.test(word))
    .reverse()
    .join(" ");
  return reverseString;
}

function reverseWordsV2(s: string): string {
  return s.match(/\w+/g)!.reverse().join(" ");
}

function reverseWordsV3(s: string): string {
  return s
    .split(" ")
    .filter((item) => !!item)
    .reverse()
    .join(" ");
}

const testReverseString = [
  "the sky is blue",
  "  hello world  ",
  "a good   example",
  "EPY2giL",
];

for (const word of testReverseString) {
  console.log(reverseWords(word));
}
