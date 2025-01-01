/**
 * Determines if you can reach the last index of the array.
 * This function uses a greedy algorithm to keep track of the maximum distance that can be reached.
 *
 * @param nums - An array of non-negative integers representing the maximum jump length at each position.
 * @returns A boolean indicating whether you can reach the last index.
 *
 * Greedy Algorithm Explanation:
 * A greedy algorithm is an approach for solving problems by choosing the best option available at the moment.
 * In this context, the algorithm iterates through the array and keeps track of the farthest position that can be reached.
 * If at any point the current index is greater than the maximum reachable position, it means we cannot proceed further.
 * If the maximum reachable position is greater than or equal to the last index, it means we can reach the end.
 */
function getJump(nums: number[]): boolean {
  let maxJump = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxJump) return false;

    maxJump = Math.max(maxJump, i + nums[i]);
    if (maxJump >= nums.length - 1) return true;
  }

  return false;
}
