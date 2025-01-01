function jump(nums: number[]): number {
  let jumps = 0;
  let maxReach = 0;
  let currentEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = maxReach;
      if (currentEnd >= nums.length - 1) break;
    }
  }
  return jumps;
}

const nums1 = [2, 3, 1, 1, 4];
const nums2 = [2, 3, 0, 1, 4];

console.log(jump(nums1));
console.log(jump(nums2));
