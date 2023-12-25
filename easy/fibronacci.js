//bad approach
const fib = function f(n) {
  if (n <= 1) {
    return n;
  }
  return f(n - 1) + f(n - 2);
};
//with memoization
const fibm = function fm(n) {
  const memo = new Array(n + 1).fill(-1);
  memo[0] = 0;
  memo[1] = 1;
  if (n <= 1) {
    return n;
  }

  return solve(n, memo);
};

function solve(n, memo) {
  if (memo[n] !== -1) {
    return memo[n];
  }

  memo[n] = solve(n - 1, memo) + solve(n - 2, memo);
  return memo[n];
}

// Example usage
const result = fibm(5);
console.log(result);

// bottom up approach

const fibb = function fb(n) {
  if (n <= 1) {
    return n;
  }
  const memo = new Array(n + 1).fill(-1);
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

console.log(fibb(5));

//bottom up approach with constant space
const fibc = function fc(n) {
  if (n <= 1) {
    return n;
  }
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

console.log(fibc(5));
