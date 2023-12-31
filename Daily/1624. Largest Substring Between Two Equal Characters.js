/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {

    let max = -1;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] == s[j]) {
                max = Math.max(max, j - i - 1);
            }
        }
    }
    return max;

};

console.log(maxLengthBetweenEqualCharacters("bbbabaa"))