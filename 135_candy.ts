function candy(ratings: number[]): number {
  const arr = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 1; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      arr[i] = Math.max(arr[i + 1] + 1, arr[i]);
    }
  }
  return arr.reduce((acc, value) => (acc += value), 0);
}

const test = [1, 0, 2];

console.log(candy(test));
