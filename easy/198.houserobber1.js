var rob1 = function (nums) {
  dp = new Array(nums.length + 1).fill(0);
  //dp[i] indicates the maximum amount of money that can be robbed up to index i
  dp[0] = 0;
  dp[1] = nums[0];
  if (nums.length == 1) {
    return dp[1];
  }
  for (let i = 2; i <= nums.length; i++) {
    let steal = nums[i - 1] + dp[i - 2]; // for i=2 nums[1] + dp[0]
    let skip = dp[i - 1]; // for i=2 nums[0]
    dp[i] = Math.max(steal, skip);
  }
  return dp[nums.length];
  return;
};
var rob2 = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let prevPrev = 0; // Represents dp[i-2]
  let prev = 0; // Represents dp[i-1]

  for (let i = 0; i < nums.length; i++) {
    let current = Math.max(prevPrev + nums[i], prev);
    prevPrev = prev;
    prev = current;
  }

  return prev;
};
//

var rob = function (nums) {
  const dp = new Array(nums.length).fill(0);
  if (nums.length === 0) {
    return 0;
  }
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  dp[2] = Math.max(nums[1], nums[0] + nums[2]);
  if (nums.length <= 3) {
    return dp[nums.length - 1];
  }
  for (let i = 3; i < nums.length; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 2], dp[i - 3]);
  }
  console.log(dp);
  return Math.max(...dp)
};
let nums = [1, 2, 3, 1,1,4,1,2,5,1]; // dp = [0,1,2, 4,3]
console.log(rob(nums));
