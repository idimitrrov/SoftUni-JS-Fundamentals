/* 09. Orbit - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

You will be given an empty rectangular space of cells. 
Then you will be given the position of a star. 
You need to build the orbits around it.
You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value - 1. 
Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2. 
After which you must set the values of the next surrounding cells to 3 and so on. Check the pictures for more info.
 

*/

function buildOrbits(input) {
  // create empty matrix
  let width = input[0];
  let height = input[1];
  let x = input[2];
  let y = input[3];
  const matrix = [];

  // Fill matrix with rows
  for (let i = 0; i < height; i++) {
    matrix.push(new Array(width).fill(0));
  }
  // Set star position and initial orbit
  matrix[y][x] = 1;
  let orbitValue = 2;

  // Set cells in orbits
  while (true) {
    let cellsModified = false;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (matrix[i][j] === orbitValue - 1) {
          // check surrounding cells and set to orbitValue if zero
          if (i > 0 && matrix[i - 1][j] === 0) {
            matrix[i - 1][j] = orbitValue;
            cellsModified = true;
          }
          if (i < height - 1 && matrix[i + 1][j] === 0) {
            matrix[i + 1][j] = orbitValue;
            cellsModified = true;
          }
          if (j > 0 && matrix[i][j - 1] === 0) {
            matrix[i][j - 1] = orbitValue;
            cellsModified = true;
          }
          if (j < width - 1 && matrix[i][j + 1] === 0) {
            matrix[i][j + 1] = orbitValue;
            cellsModified = true;
          }
          if (i > 0 && j > 0 && matrix[i - 1][j - 1] === 0) {
            matrix[i - 1][j - 1] = orbitValue;
            cellsModified = true;
          }
          if (i < height - 1 && j > 0 && matrix[i + 1][j - 1] === 0) {
            matrix[i + 1][j - 1] = orbitValue;
            cellsModified = true;
          }
          if (i > 0 && j < width - 1 && matrix[i - 1][j + 1] === 0) {
            matrix[i - 1][j + 1] = orbitValue;
            cellsModified = true;
          }
          if (i < height - 1 && j < width - 1 && matrix[i + 1][j + 1] === 0) {
            matrix[i + 1][j + 1] = orbitValue;
            cellsModified = true;
          }
        }
      }
    }
    if (!cellsModified) {
      break;
    }
    orbitValue++;
  }

  // format and return matrix
  console.log(matrix.map((row) => row.join(" ")).join("\n"));
}
buildOrbits([5, 5, 2, 2]);
