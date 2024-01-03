/**You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

The 2D array should contain only the elements of the array nums.
Each row in the 2D array contains distinct integers.
The number of rows in the 2D array should be minimal.
Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row. */
var findMatrix = function (nums) {
  const arrayHash = new Array(nums.length+1).fill(0);
  const result = [];
  let i = 0;
  while (i < nums.length) {
    if (result[arrayHash[nums[i]]] === undefined) {
      result[arrayHash[nums[i]]] = [];
    }
    result[arrayHash[nums[i]]].push(nums[i]);
    arrayHash[nums[i]]++;
    i++;
  }
  return result;
};

let nums = [1, 3, 4, 1, 2, 3, 1];
let result = findMatrix(nums);
console.log(result); //[ [ 1, 3, 4, 2 ], [ 1, 3 ], [ 1 ] ]
