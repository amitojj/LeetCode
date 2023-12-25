//recursive approach not a good one
var numDecodingsr = function (s) {
  let n = s.length;
  if (n == 1) {
    if (s[0] == "0") return 0;
    return 1;
  }
  return solver(0, n, s);
};
function solver(i, n, s) {
  if (i == n) return 1;
  if (s[i] == "0") return 0;
  let result = solver(i + 1, n, s);
  if (i + 1 < n) {
    if (s[i] == "1" || (s[i] == 2 && s[i + 1] < "7"))
      result += solver(i + 2, n, s);
  }
  return result;
}
console.log(numDecodingsr("11"));

const numDecodingsb = (s) => {
  const length = s.length;
  const dp = new Array(length + 1).fill(0);

  if (length === 1) {
    return s[0] === "0" ? 0 : 1;
  }

  dp[length] = 1;

  for (let i = length - 1; i >= 0; i--) {
    if (s[i] === "0") {
      continue;
    }

    dp[i] += dp[i + 1];

    if (i + 1 < length && (s[i] === "1" || (s[i] === "2" && s[i + 1] < "7"))) {
      dp[i] += dp[i + 2];
    }
  }

  return dp[0];
};
console.log(numDecodingsb("121125"));

/**
 * Calculates the number of possible decodings for a given string.
 *
 * @param {string} s - The input string to decode.
 * @return {number} The number of possible decodings.
 */
const numDecodings = (s) => {
  const n = s.length;
  let current = 1;
  let next = 1;

  for (let i = n - 1; i >= 0; i--) {
    let numWays = 0;

    if (s[i] !== "0") {
      numWays += current;

      if (i + 1 < n && (s[i] === "1" || (s[i] === "2" && s[i + 1] < "7"))) {
        numWays += next;
      }
    }

    next = current;
    current = numWays;
  }

  return current;
};
console.log(numDecodings("11"));