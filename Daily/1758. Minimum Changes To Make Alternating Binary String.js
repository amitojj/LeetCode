/**
 * Returns the minimum number of operations needed to make a string alternating
 * @param {string} s - The input string consisting only of the characters '0' and '1'
 * @returns {number} - The minimum number of operations needed
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function minOperations(s) {
    let digit = s[0]; // Start with the first character of the string
    let changes = 0; // Initialize the count of changes needed
    for (let i = 1; i < s.length; i++) {
        if (s[i] == digit) {
            changes++; // Increment the count if the character is equal to the previous character
        }
        digit = digit ^ 1; // Flip the value of digit between 0 and 1
    }
    return Math.min(changes, s.length - changes); // Return the minimum of changes and the complement of changes
}

let s = "100110011101011";
console.log(minOperations(s));

// 10 test cases
console.log(minOperations("100110011101011")); // Expected output: 4
console.log(minOperations("101010101010101")); // Expected output: 0
console.log(minOperations("111111111111111")); // Expected output: 8
console.log(minOperations("010101010101010")); // Expected output: 0
console.log(minOperations("000000000000000")); // Expected output: 8
console.log(minOperations("10101010101010"));  // Expected output: 0
console.log(minOperations("11111111111111"));  // Expected output: 7i
console.log(minOperations("0101010101010"));   // Expected output: 0
console.log(minOperations("0000000000000"));   // Expected output: 7
console.log(minOperations("1001011001011"));   // Expected output: 3


