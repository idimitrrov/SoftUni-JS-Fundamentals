/* 06. Magic Matrixes - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function that checks if a given matrix of numbers is magical.
A matrix is magical if the sums of the cells of every row and every column are equal. 

*/

function checkIfMagic(matrix) {
  let length = matrix.length;
  let isEqual = true;
  let magicSum = 0;

  for (let i = 0; i < length; i++) {
    let rowSum = 0;
    let columnSum = 0;

    for (let j = 0; j < length; j++) {
      if (i === 0) {
        magicSum += Number(matrix[i][j]);
      }

      rowSum += Number(matrix[i][j]);
      columnSum += Number(matrix[j][i]);
    }

    if (magicSum !== columnSum || magicSum !== rowSum) {
      isEqual = false;
      break;
    }
  }
  console.log(isEqual);
}

checkIfMagic([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
