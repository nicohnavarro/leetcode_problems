function isPalindrome(s: string): boolean {
  const cleanstring = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reverse = cleanstring.split("").reverse().join("");
  return cleanstring === reverse ? true : false;
}

function isPalindromeLong(s: string): boolean {
  const preparedString = s.replace(" ", "").toLowerCase();

  let left = 0,
    right = preparedString.length - 1;

  const isAlphaNumeric = (charCode: number) => {
    return (
      (charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122)
    );
  };

  while (left < right) {
    const charCodeLeft = preparedString.charCodeAt(left);
    const charCodeRight = preparedString.charCodeAt(right);

    // char is not lowercase ASCII letter
    if (!isAlphaNumeric(charCodeLeft)) {
      left += 1;

      continue;
    } else if (!isAlphaNumeric(charCodeRight)) {
      right -= 1;

      continue;
    }

    if (preparedString[left] !== preparedString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
const palindromeTest = "A man, a plan, a canal: Panama";

console.log(isPalindrome(palindromeTest));
console.log(isPalindromeLong(palindromeTest));
