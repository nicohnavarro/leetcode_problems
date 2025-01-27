function addBinaryV2(a: string, b: string): string {
  const c = BigInt("0b" + a);
  const d = BigInt("0b" + b);

  return (c + d).toString(2);
}

function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result: string[] = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;

    const total = digitA + digitB + carry;
    result.push((total % 2).toString()); // Add the binary digit to the result
    carry = Math.floor(total / 2); // Update the carry

    i--;
    j--;
  }

  return result.reverse().join(""); // Reverse the result and convert to string
}
const testBinary = ["1010", "1010"];

console.log(addBinary(testBinary[0], testBinary[1]));
