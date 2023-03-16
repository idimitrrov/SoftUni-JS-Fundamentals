/* 03. Rotate Array- https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function that adds and removes numbers to/from an array. You will receive a command, which can either be "add" or "remove". 
The initial number is 1. Each input command should increase that number, regardless of what it is.
•	Upon receiving an "add" command, you should add the current number to your array.
•	Upon receiving the "remove" command, you should remove the last entered number, currently existent in the array.
Input
The input comes as an array of strings. Each element holds a command.
Output
Print elements in a row, separated by a single space. In case of an empty array, just print "Empty".


*/

function addOrRemove(input) {
  let array = [];
  for (let i = 0; i <= input.length; i++) {
    let command = input[i];
    if (command === "add") {
      array.push(i + 1);
    } else if (command === "remove") {
      array.pop();
    }
  }
  if (array.length <= 0) {
    console.log("Empty");
  } else {
    console.log(array.join(" "));
  }
}
addOrRemove(["add", "add", "add", "add"]);
addOrRemove(["add", "add", "remove", "add", "add"]);
addOrRemove(["remove", "remove", "remove"]);
