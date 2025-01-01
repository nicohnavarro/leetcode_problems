function maxProfit1(prices: number[]): number {
  let min = 100000;
  let minPos = 0;
  let max = 0;
  let maxPos = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      minPos = i;
    }

    if (prices[i] > max && i > minPos) {
      max = prices[i];
      maxPos = i;
    }
  }
  return minPos === prices.length - 1 ? 0 : max - min;
}

function maxProfit2(prices: number[]): number {
  let candidate = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        i++;
      } else if (prices[i] < prices[j]) {
        profit = prices[j] - prices[i];
        if (profit > candidate) {
          candidate = profit;
          profit = 0;
        }
      }
    }
  }
  return candidate;
}

function maxProfit3(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
}

function maxProfit4(prices: number[]) {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
}

function getProfit(prices: number[]): number {
  let maxProfit = 0;
  let lowerPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    lowerPrice = Math.min(lowerPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - lowerPrice);
  }

  return maxProfit;
}

const test1 = [7, 1, 5, 3, 6, 4];
const test2 = [7, 6, 4, 3, 1];
const test3 = [2, 4, 1];

console.log(maxProfit1(test1));
console.log(maxProfit2(test1));
console.log(maxProfit3(test1));
