/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    nums.sort((a, b) => a-b);
    console.log(nums);
    return (nums[nums.length - 1] * nums[nums.length -2]) - (nums[0] * nums[1])
};

let result = maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4]);
console.log(result);
