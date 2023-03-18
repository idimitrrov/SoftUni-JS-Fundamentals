/* 09. Orbit - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

You will be given an empty rectangular space of cells. 
Then you will be given the position of a star. 
You need to build the orbits around it.
You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value - 1. 
Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2. 
After which you must set the values of the next surrounding cells to 3 and so on. Check the pictures for more info.
 

*/

function createOrbits([width, height, x, y]) {
  // Create variable for result matrix
  const matrix = [];

  // Initialize matrix with initial values
  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const row = Array(width).fill(0);
    matrix.push(row);
  }

  // Initial position of star
  matrix[y][x] = 1;

  // Make orbits
  for (let cellColumnIndex = 0; cellColumnIndex < height; cellColumnIndex++) {
    for (let cellRowIndex = 0; cellRowIndex < width; cellRowIndex++) {
      const distX = Math.abs(cellColumnIndex - x) + 1;
      const distY = Math.abs(cellRowIndex - y) + 1;
      const cellDist = Math.max(distX, distY);

      matrix[cellColumnIndex][cellRowIndex] = cellDist;
    }
  }
  function printMatrix(matrix) {
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      const row = matrix[rowIndex];
      console.log(row.join(" "));
    }
  }
  // Print result matrix
  printMatrix(matrix);
}

createOrbits([4, 4, 0, 0]);
