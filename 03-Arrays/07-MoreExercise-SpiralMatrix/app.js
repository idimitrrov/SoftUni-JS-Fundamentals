/* 07. Spiral Matrix - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function that generates a Spirally filled matrix with numbers, with given dimensions.
The input comes as 2 numbers that represent the dimension of the matrix. 
The output is the matrix filled spirally starting from 1. You need to print every row on a new line, with the cells separated by a space. Check the examples below.
*/

function generateSpiralMatrix(rows, columns) {
  let matrix = Array(rows)
    .fill()
    .map(() => Array(columns).fill(0));
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = columns - 1;
  let direction = "right";
  let num = 1;

  while (top <= bottom && left <= right) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      direction = "down";
      top++;
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      direction = "left";
      right--;
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      direction = "up";
      bottom--;
    } else if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      direction = "right";
      left++;
    }
  }

  // Print out the matrix
  for (let i = 0; i < rows; i++) {
    console.log(matrix[i].join(" "));
  }
}

generateSpiralMatrix(5, 5);
