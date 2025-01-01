function removeDuplicates(nums: number[]) {
  if (nums.length === 0) return 0; // Handle edge case of empty array

  let k = 1; // Pointer for unique elements, starts at index 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // Place the unique element at index `k`
      k++; // Increment the unique count
    }
  }

  return k; // Number of unique elements
}
