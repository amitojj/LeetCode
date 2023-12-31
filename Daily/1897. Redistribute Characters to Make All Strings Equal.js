function makeEqual(words) {
  const charCount = new Array(26).fill(0);
  const totalWords = words.length;
  let totalChars = 0;

  // Count the occurrence of each character across all strings.
  for (const word of words) {
    totalChars += word.length;
    for (const char of word) {
      charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }

  // Early exit if total character count isn't divisible by number of words
  if (totalChars % totalWords !== 0) {
    return false;
  }

  // Check if each character count is divisible by the number of strings.
  for (const count of charCount) {
    if (count % totalWords !== 0) return false;
  }

  return true;
}
let words = ["abc", "aabc", "bc"];
console.log(makeEqual(words));
