/**
 * @param {number} n
 * @return {number}
 */
//recursion
var fib = function (n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(5));
//memoization
var fibm = function (n) {
  const memo = new Array(n + 1).fill(-1);
  memo[0] = 0;
  memo[1] = 1;
  if (memo[n] !== -1) {
    return memo[n];
  }
  memo[n] = fibm(n - 1) + fibm(n - 2);
  return memo[n];
};

console.log(fibm(7));
//bottom up
var fibb = function (n) {
  const t = new Array(n + 1).fill(-1);
  t[0] = 0;
  t[1] = 1;
  for (let i = 2; i <= n; i++) {
    t[i] = t[i - 1] + t[i - 2];
  }
  return t[n];
};
console.log(fibb(7));

//opttimize space
var fibo = function (n) {
  if (n <= 1) {
    return n;
  }
  let prev1 = 1;
  let prev2 = 0;
  let fib;
  for (let i = 2; i <= n; i++) {
    fib = prev1 + prev2;
    prev2 = prev1;
    prev1 = fib;
  }
  return fib;
};
console.log(fibo(7));
