// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// const counter = n => () => n++;
function counter(n) {
  return function() {
    return n++;
  };
}
const count = counter(5);
console.log(count);
console.log(count());
console.log(count());
console.log(count());
console.log(count());

/**
 * Creates a counter function that maintains its own state and increments the count
 * each time it is called. The state is initialized with the value provided to the
 * `counter` function.
 * 
 * @param {number} n - The initial value from which the counter will start.
 * @returns {Function} A function that when invoked, returns the current count
 * and then increments the count by 1.
 *
 * Example usage:
 * let count = counter(5); // Initializes the counter with the starting value of 5
 * console.log(count());   // Outputs: 5
 * console.log(count());   // Outputs: 6
 * console.log(count());   // Outputs: 7
 * // ...and so on for each subsequent call.
 */
// let counter = n => {
//   let currentCount = n;
//   return () => currentCount++;
// };

// function cnt(n) {
//     return n++
// }
// console.log(cnt(5));
// console.log(cnt()); // Initializes the counter with the starting value of 5

/*
function counter(n) {
 
 
    return function() {
        //ye function n ko dekhega ke kahan pe hai. isko n mila iske papa ke paas. jab koi variable global scope mei ho and wo variable par hamkuch kaam  karein to global mei uski value change ho jaati hai. same here  when we call count then i checks n is not in local scope but its in its global scome so on incrementing n is incrremented in parent function. 
    return n++;
  };
}

*/