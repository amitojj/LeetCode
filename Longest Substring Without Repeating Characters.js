const lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let start = 0; // Start index of the current substring
  let maxLen = 0; // Maximum length of substring without repeating characters

  const charIndexMap = {}; // Object to store the last index of each character

  for (let i = 0; i < n; i++) {
    const char = s[i];

    // If the character is repeated, update the start index
    if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }

    // Update the last index of the character
    charIndexMap[char] = i;

    // Update the maximum length
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
};

let s = "pwwkewa";
console.log(lengthOfLongestSubstring("qrsvbspk"));
