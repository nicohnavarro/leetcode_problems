function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  let totalGas = 0;
  let tank = 0;
  let startIndex = 0;

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];
    totalGas += diff;
    tank += diff;

    if (tank < 0) {
      startIndex = i + 1;
      tank = 0;
    }
  }

  return totalGas >= 0 ? startIndex : -1;
}

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));
