/* 08. Diagonal Attack - https://judge.softuni.bg/Contests/1256/Arrays-Exercise
Write a function that reads a given matrix of numbers, and checks if  both main diagonals have an equal sum. 
If they have, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.

The input comes as an array of strings. Each element represents a string of numbers, with spaces between them. 

Parse it into a matrix of numbers, so you can work with it.

The output is either the new matrix, with all cells not belonging to a main diagonal changed to the diagonal sum, 
or the original matrix if the two diagonals have different sums. You need to print every row on a new line, with cells separated by a space. Check the examples below. 

*/

function generateDiagonals(matrix) {
  let parsedArrayOfArrays = [];
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;

  // Taking input of strings and parsing them to numbers
  for (let i = 0; i < matrix.length; i++) {
    parsedArrayOfArrays.push(
      matrix[i].split(" ").map((item) => {
        return parseInt(item);
      })
    );
  }
  // Calculating first diagonal sum
  for (let j = 0; j < parsedArrayOfArrays.length; j++) {
    firstDiagonalSum += parsedArrayOfArrays[j][j];
  }
  // Calculating second diagonal sum
  for (
    let k = parsedArrayOfArrays.length - 1, l = 0;
    k >= 0 && l < parsedArrayOfArrays.length;
    l++, k--
  ) {
    secondDiagonalSum += parsedArrayOfArrays[k][l];
  }
  // Checking and filling all apart from diagonals with sum
  if (firstDiagonalSum === secondDiagonalSum) {
    for (let i = 0; i < parsedArrayOfArrays.length; i++) {
      for (let j = 0; j < parsedArrayOfArrays[i].length; j++) {
        if (i !== j && i + j !== parsedArrayOfArrays.length - 1) {
          parsedArrayOfArrays[i][j] = secondDiagonalSum;
        }
      }
    }
  }

  // Print the output in the required format
  for (let i = 0; i < parsedArrayOfArrays.length; i++) {
    let row = "";
    for (let j = 0; j < parsedArrayOfArrays[i].length; j++) {
      row += parsedArrayOfArrays[i][j] + " ";
    }
    console.log(row.trim());
  }
}

generateDiagonals(["1 1 1", "1 1 1", "1 1 0"]);
