function fib(n: number): number {
  return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
}

function fibFast(n: number): number {
  let a = 1;
  let b = 1;
  for (let i = 1; i < n; i++) {
    const temp = a;
    a = b;
    b = temp + b;
  }
  return b;
}
