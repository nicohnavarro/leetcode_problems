// Recursive
function fibRecursive(n: number): number {
  return n <= 1 ? 1 : fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Recursion + Memozaition
function fibMemoized(n: number, memo: Map<number, number> = new Map()): number {
  if (n <= 1) return 1;

  if (memo.has(n)) return memo.get(n)!;

  const result = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
  memo.set(n, result);
  return result;
}

// Iterative
function fibIterative(n: number): number {
  let a = 1;
  let b = 1;
  for (let i = 1; i < n; i++) {
    const temp = a;
    a = b;
    b = temp + b;
  }
  return b;
}

const fibTest = 500;

type TaskResult = {
  type: string;
  result: number;
  time: number;
};

const tasks: Promise<TaskResult>[] = [
  new Promise((resolve) => {
    const start = performance.now();
    const result = fibRecursive(fibTest);
    const end = performance.now();
    resolve({ type: "Recursive", result, time: end - start });
  }),
  new Promise((resolve) => {
    const start = performance.now();
    const result = fibMemoized(fibTest);
    const end = performance.now();
    resolve({ type: "Memoized", result, time: end - start });
  }),
  new Promise((resolve) => {
    const start = performance.now();
    const result = fibRecursive(fibTest);
    const end = performance.now();
    resolve({ type: "Iterative", result, time: end - start });
  }),
];

Promise.all(tasks)
  .then((results: TaskResult[]) => {
    results.forEach(({ type, result, time }) => {
      console.log(`${type}: Result = ${result}, Time = ${time.toFixed(2)}ms`);
    });
  })
  .catch((error) => {
    console.error("Error during execution:", error);
  });
