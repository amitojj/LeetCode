var minCost = function (colors, neededTime) {
    let time = 0;
    for(let i=0; i<colors.length-1; i++){
        if(colors[i] === colors[i+1]){
            time += Math.min(neededTime[i], neededTime[i+1]);
            console.log(time);
        }
    }
    return time;
};

let colors = "abbbb",
  neededTime = [5, 5, 4, 8, 1];
console.log(minCost(colors, neededTime));