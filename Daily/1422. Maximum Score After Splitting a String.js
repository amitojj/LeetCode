/**
 * Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

 

Example 1:

Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3
Example 2:

Input: s = "00111"
Output: 5
Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
Example 3:

Input: s = "1111"
Output: 3
 */

// approach 1 - brute force
/**
var maxScore = function (s) {
    let maxsum= 0;
    let zeros = 0;
    for (let i=0; i<s.length-1;i++){
        let ones = 0;
        if (s[i] == 0){
            zeros++;
        }
        for (let j=i+1; j<s.length ; j++){
            if (s[j]==1){
                ones++;
            }
        }
        let sum = zeros + ones
        if (sum > maxsum){
            maxsum = sum;
        }
    }
    return maxsum;
};
 */
// approach 2 - 
/**
function maxScore(s) {
  let ones = 0;
  let zeros = 0;
  let maxSum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      ones++;
    }
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      zeros++;
    } else {
      ones--;
    }
    maxSum = Math.max(maxSum, zeros + ones);
  }
  return  maxSum;
}
 */
function maxScore(s) {
  let ones = 0;
  let zeros = 0;
  let maxdif = -Infinity;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "1") {
      ones++;
    } else {
      zeros++;
    }
    maxdif = Math.max(maxdif, zeros - ones);
  }
  if (s[s.length - 1] === "1") {
    ones++;
  }

  return maxdif + ones;
}

// Example usage:

let s = "01100011101101";
let result = maxScore(s);
console.log(result);
