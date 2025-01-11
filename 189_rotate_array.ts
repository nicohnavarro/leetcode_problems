/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  while (k > 0) {
    nums.unshift(nums[nums.length - 1]);
    nums.pop();
    k--;
  }
}

// More efficent
/**
 * Rotates the elements of the given array `nums` to the right by `k` steps.
 * This function modifies the array in-place.
 *
 * @param nums - The array of numbers to be rotated.
 * @param k - The number of steps to rotate the array to the right.
 *
 * The algorithm works by first creating a copy of the original array.
 * It then iterates through each element of the original array and places
 * it in its new position in the `nums` array. The new position is calculated
 * using the modulo operator `%` to ensure that the index wraps around when
 * it exceeds the length of the array. This ensures that the rotation is
 * performed correctly even if `k` is larger than the length of the array.
 */
function rotateV2(nums: number[], k: number): void {
  const originalNums = [...nums];
  for (let i = 0; i < nums.length; i++)
    nums[(i + k) % nums.length] = originalNums[i];
}

const testRotateNum = [1, 2, 3, 4, 5, 6, 7, 8];
rotateV2(testRotateNum, 2);
console.log(testRotateNum);
