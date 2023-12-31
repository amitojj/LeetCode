const letterCombinations = function (digits) {
    if (digits.length === 0) {
      return [];
    }

  const digitsMap = [
    "0",
    "1",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const result = [];
  const n = 0;
  solve(digits, n, digitsMap, result);
  return result;
};

function solve(digits, n, digitsMap, result, combo = "") {
  if (n === digits.length) {
    return result.push(combo);
    
  }
  for (let i = 0; i < digitsMap[digits[n]].length; i++) {
    combo= combo + digitsMap[digits[n]][i];
    console.log(combo);
    solve(digits, n + 1, digitsMap, result, combo);
    combo= combo.slice(0, combo.length - 1);
  }
}
console.log(letterCombinations("23"));

const letterCombinationsIterative = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitsMap = [
    "0",
    "1",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  let result = [""];

  for (let i = 0; i < digits.length; i++) {
    const currentDigit = parseInt(digits[i]);
    const currentLetters = digitsMap[currentDigit];

    let newCombinations = [];

    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < currentLetters.length; k++) {
        newCombinations.push(result[j] + currentLetters[k]);
      }
    }

    result = newCombinations;
  }

  return result;
};

// Example usage
const result = letterCombinationsIterative("23");
console.log(result);
