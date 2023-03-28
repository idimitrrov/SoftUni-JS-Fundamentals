/* 05. DNA- https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a JS program that prints a DNA helix with length, specified by the user. 
The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. 
See the examples for more information.
The input comes as a single number. It represents the length of the required helix.
The output is the completed structure, printed on the console.



*/

function printHelix(length) {
  const pairOne = ["A", "T"];
  const pairTwo = ["C", "G"];
  const pairThree = ["T", "T"];
  const pairFour = ["A", "G"];
  const pairFive = ["G", "G"];
  const sequence = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"]; // Using this sequence if sequence[9] is met, start from the beginning
  const helix = [];

  function printInitialHelix(length) {
    for (let rowIndex = 0; rowIndex < length; rowIndex++) {
      const row = Array(6).fill("*");
      helix.push(row);
      if (helix[rowIndex] === helix[0]) {
        row.splice(2, 2, pairOne[0], pairOne[1]); // Logic 0 and 4 are the same structure, can be be used if indexOf.helix[0] || indexOf.helix[i] % 4 === 0
      } else if (helix[rowIndex] === helix[1]) {
        // Logic 1 3 5 7 are the same structure, can be used fi indexOf.helix[1] || indexofHelix[++2]
        row.splice(1, 4, pairTwo[0], "-", "-", pairTwo[1]); // Logic 2 6 10 14 are the same structure, can be used if indexOf.helix[2] || indexOfHelix[++4]
      } else if (helix[rowIndex] === helix[2]) {
        row.splice(0, 6, pairThree[0], "-", "-", "-", "-", pairThree[1]);
      } else if (helix[rowIndex] === helix[3]) {
        row.splice(1, 4, pairFour[0], "-", "-", pairFour[1]);
      } else if (helix[rowIndex] === helix[4]) {
        row.splice(2, 2, pairFive[0], pairFive[1]);
      }
      helix.join("");
    }
    console.log(helix.map((row) => row.join("")).join("\n"));
  }
  printInitialHelix(length);
}

printHelix(5); // prints the first example output
console.log("------------");
printHelix(10);
