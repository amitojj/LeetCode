var minCost = function (colors, neededTime) {
    let time = 0;
    for(let i=0; i<colors.length-1; i++){
        if(colors[i] === colors[i+1]){
            if (neededTime[i] > neededTime[i+1]) {
                time += neededTime[i+1];
                neededTime[i+1] = neededTime[i];
            } else {
                time += neededTime[i];
            }
        }
    }
    return time;
};

let colors = "abbbbaabba",
  neededTime = [5, 5, 4, 8, 1,1,2,3,4,5];
console.log(minCost(colors, neededTime));