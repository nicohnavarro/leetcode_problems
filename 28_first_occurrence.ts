function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

const haystack = "sadbutsad";
const needle = "sad";

console.log(strStr(haystack, needle));
