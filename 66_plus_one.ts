function plusOne(digits: number[]): number[] {
  return (BigInt(digits.join("")) + BigInt(1))
    .toString()
    .split("")
    .map((e) => Number(e));
}
const testPlusOne = [9, 9, 9];

console.log(plusOne(testPlusOne));
