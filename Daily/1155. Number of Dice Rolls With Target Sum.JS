/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
//recursion approach
var numRollsToTargetr = function (n, k, target, memo = {}) {
  const MOD = 10 ** 9 + 7;

  const key = `${n}-${k}-${target}`;
  if (target < 0) return 0;
  if (n == 0) return target == 0;
  if (key in memo) return memo[key];

  let ways = 0;
  for (let i = 1; i <= k; i++) {
    ways += numRollsToTargetr(n - 1, k, target - i, memo);
  }
  ways %= MOD;
  memo[key] = ways;
  return ways;
};
console.log(numRollsToTargetr(30, 30, 500));

//bottoms up approach
var numRollsToTargetb = function (n, k, target) {
  const MOD = 1e9 + 7;
  const t = new Array(n + 1).fill().map(() => new Array(target + 1).fill(0));
  t[0][0] = 1;
  for (let i = 1; i < n+1; i++) {
    for (let j = 1; j < target+1; j++) {
        let ways = 0;
        for (let face = 1; face <= k; face++) {
            if (j>=face){
                ways = (ways + t[i - 1][j - face]) % MOD; 
            }
        }
        t[i][j] = ways;
    }
  }
  
  return t[n][target];
};
console.log(numRollsToTargetb(30, 30, 500));


// same as mine recursive but  faster why? arrays are faster than objects.

const MOD = 1e9 + 7;
var numRollsToTarget = function (n, k, target) {
  const memo = Array(n + 1)
    .fill(-1)
    .map((x) => Array(target + 1).fill(-1));
  return helper(n, k, target, memo);
};

var helper = function (n, k, target, memo) {
  if (n === 0 || target < 0) return target === 0 ? 1 : 0;

  if (memo[n][target] !== -1) return memo[n][target];

  let ways = 0;

  for (let i = 1; i <= k; i++)
    ways = (ways + helper(n - 1, k, target - i, memo)) % MOD;

  return (memo[n][target] = ways);
};
console.log(numRollsToTarget(30, 30, 500));
