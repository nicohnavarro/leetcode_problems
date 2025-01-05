const TIERS = [
  { margin: 0.51, amount: 15 },
  { margin: 0.41, amount: 15 },
  { margin: 0.31, amount: 20 },
  { margin: 0.1, amount: Infinity },
];

function wineCalculator(price: number): number {
  let finalPrice = price;
  let restPrice = price;
  for (const tier of TIERS) {
    const { margin, amount } = tier;
    if (restPrice <= 0) break;

    const tierAmount = Math.min(restPrice, amount);
    finalPrice += tierAmount * margin;
    restPrice -= tierAmount;
  }

  return parseFloat(finalPrice.toFixed(2));
}

console.log(wineCalculator(25));
