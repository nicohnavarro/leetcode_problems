function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n);
  // Calculate prefix product for each element
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix; // Store the prefix product in result
    prefix *= nums[i]; // Update the prefix product
  }
  // Calculate suffix product for each element and multiply with prefix
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix; // Multiply current result with suffix product
    suffix *= nums[i]; // Update the suffix product
  }
  return result;
}

const test = [1, 4, 10];
console.log(productExceptSelf(test));
