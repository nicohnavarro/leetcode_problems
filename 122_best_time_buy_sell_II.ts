function maxProfitV2(prices: number[]): number {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }
  return maxProfit;
}

function maxProfitV3(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      profit += diff;
    }
  }
  return profit;
}

const test = [7, 1, 5, 3, 6, 4];
