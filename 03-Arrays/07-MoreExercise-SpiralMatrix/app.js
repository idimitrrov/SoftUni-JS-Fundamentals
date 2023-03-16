/* 05. Tseam Account - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

As a gamer, Peter has Tseam Account. He loves to buy new games. 
You are given Peter's account with all of his games-> strings, separated by space. 
Until you receive "Play!" you will be receiving commands which Peter does with his account.
You may receive the following commands:
•	Install {game} - add the game at the last position in the account,
but only if it isn't installed already.
•	Uninstall {game} - delete the game if it exists.
•	Update {game} - update the game if it exists and place it in the last position.
•	Expansion {game}-{expansion} - check  if the game exists and insert after it the expansion in the 
following format: "{game}:{expansion}";

•	On the first input line you will receive Peter`s account - a sequence of game names, separated by space.
•	Until you receive "Play!" you will be receiving commands. 

•	As output, you must print Peter`s Tseam account. 

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
