/**
 * You are given a 0-indexed array nums consisting of positive integers.

There are two types of operations that you can apply on the array any number of times:

Choose two elements with equal values and delete them from the array.
Choose three elements with equal values and delete them from the array.
Return the minimum number of operations required to make the array empty, or -1 if it is not possible.
 */
var minOperations = function (nums) {
    hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        const freq = hash.get(nums[i]) || 0;
        hash.set(nums[i], freq + 1);
    } 
    let result = 0
    for (const [key,freq] of hash) {
       if (freq === 1) return -1;
        result += Math.ceil(freq / 3);
        
    }
    return result;
    
};
const nums = [2, 3, 3, 2, 2, 4, 2, 3, 4];
console.log(minOperations(nums));
