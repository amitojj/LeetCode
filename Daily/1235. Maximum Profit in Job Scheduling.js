var jobScheduling = function (startTime, endTime, profit) {
    const dp = new Array(startTime.length).fill(-1);
    let sorted = startTime.map((time,index) => [time, endTime[index], profit[index]]).sort((a,b) => a[0] - b[0]); 
    console.log(sorted);
    return solve(0,sorted,dp);
};
function solve(ind, sorted,dp) {
    console.log(ind);
    if (ind >= sorted.length) {
        return 0;
    }
    if (dp[ind] !== -1) {
        return dp[ind];
    }
   
    let next = getNext(ind+1,sorted[ind][1],sorted);
    console.log(next);

    let take = sorted[ind][2] + solve(next,sorted,dp);
    skip = solve(ind + 1,sorted,dp);

    dp[ind] = Math.max(take, skip);
    return Math.max(take, skip);

}
function getNext(ind, endTime, sorted) {
    let r = sorted.length-1;
    let result= sorted.length+1;
    while (ind <= r) {
        let mid = Math.floor((ind + ((r-ind) / 2)));
        if (sorted[mid][0] >= endTime) {
            result = mid;
            r = mid - 1;
        } else {
            ind = mid + 1;
        }
    }
    console.log(result);
    return result;

}
let startTime = [6, 15, 7, 11, 1, 3, 16, 2],
  endTime = [19, 18, 19, 16, 10, 8, 19, 8],
  profit = [2, 9, 1, 19, 5, 7, 3, 19];
  console.log(jobScheduling(startTime, endTime, profit));