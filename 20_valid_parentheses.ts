function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Map<string, string> = new Map();
  map.set("}", "{");
  map.set("]", "[");
  map.set(")", "(");
  console.log(map);
  for (const char of s) {
    if (map.has(char)) {
      const topElement = stack.length > 0 ? stack.pop() : "#";
      if (map.get(char) !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

const tets = "{}{}()}{";
console.log(isValid(tets));
