/* 07. NxN Matrix - https://judge.softuni.org/Contests/1262/Functions-Exercise


Write a function that receives a single integer number n and prints nxn matrix with that number.

*/

function createMatrix(n) {
  const matrix = [];

  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    const row = Array(n).fill(n);
    matrix.push(row);
  }
  function printMatrix(matrix) {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      const row = matrix[rowIndex];
      console.log(row.join(" "));
    }
  }
  printMatrix(matrix);
}

createMatrix(3);
