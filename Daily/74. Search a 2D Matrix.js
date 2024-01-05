
var searchMatrix = function (matrix, target) {
    let rows = matrix.length, cols = matrix[0].length;
    let row = 0, col = cols - 1;
    while (row < rows && col >= 0) {
        let curr = matrix[row][col];
        if (curr === target) {
            return true;
        } else if (curr < target) {
            row++;
        } else {
            col--;
        }
    }
    return false;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
console.log(searchMatrix(matrix, target));