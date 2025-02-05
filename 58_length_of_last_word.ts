function lengthOfLastWord(s: string): number {
  const words = s.split(" ");
  let res = /^[a-zA-Z]+$/;
  let i = 1;
  let ans = 0;
  while (i <= words.length) {
    let response = words[words.length - i];
    if (res.test(response)) {
      ans = response.length;
      break;
    }
    i++;
  }
  return ans;
}
const testLength = ["Hello World", "hello world ", " Other word last  ", "a"];

for (const word of testLength) {
  console.log(lengthOfLastWord(word));
}
