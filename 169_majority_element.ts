function majorityElement(nums: number[]) {
  let mappedElements: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (!mappedElements[nums[i]]) {
      mappedElements[nums[i]] = 1;
    } else {
      mappedElements[nums[i]] += 1;
    }
  }

  let maxValue = 0;
  let maxElement = "";
  for (const el in mappedElements) {
    if (mappedElements[el] > maxValue) {
      maxElement = el;
      maxValue = mappedElements[el];
    }
  }
  return maxElement;
}

const input: number[] = [1, 2, 1, 2, 4, 4, 3, 3];
console.log(majorityElement(input));
