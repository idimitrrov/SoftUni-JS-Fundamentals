/* 08. Array Manipulator- https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a function that receives an array of integers and array of string commands and executes them over the array. The commands are as follows:
•	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
•	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
•	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
•	remove <index> – removes the element at the specified index.
•	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
•	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
•	print – stop receiving more commands and print the last state of the array.


*/

function arrayManipulator(array, commandsArray) {
  for (let i = 0; i < commandsArray.length; i++) {
    let currentCommand = commandsArray[i].split(" ");
    if (currentCommand[0] === "add") {
      let index = Number(currentCommand[1]);
      let element = Number(currentCommand[2]);
      array.splice(index, 0, element);
    }

    if (currentCommand[0] === "contains") {
      let element = Number(currentCommand[1]);
      let foundIndex = array.findIndex((el) => el === element);
      console.log(foundIndex);
    }

    if (currentCommand[0] === "remove") {
      let index = Number(currentCommand[1]);
      array.splice(index, 1);
    }

    if (currentCommand[0] === "addMany") {
      let index = Number(currentCommand[1]);
      let numbers = currentCommand.splice(2);
      for (let i = 0; i < numbers.length; i++) {
        array.splice(index + i, 0, Number(numbers[i]));
      }
    }

    if (currentCommand[0] === "shift") {
      let positions = Number(currentCommand[1]);
      for (let i = 0; i < positions; i++) {
        let removedElement = array.shift();
        array.push(removedElement);
      }
    }

    if (currentCommand[0] === "sumPairs") {
      let newArray = [];
      let sumPair = 0;
      for (let i = 0; i < array.length; i += 2) {
        sumPair = array[i] + array[i + 1];
        if (array[i + 1] === undefined || array[i] === undefined) {
          sumPair = array[i];
        } else {
        }
        newArray.push(sumPair);
      }
      array = newArray;
    }

    if (currentCommand[0] === "print") {
      console.log(`[ ${array.join(", ")} ]`);
    }
  }
}

// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains 3", "remove 2", "print"]
// );

arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);

// arrayManipulator(
//   [1, 2, 3, 4, 5],
//   [
//     "addMany 5 9 8 7 6 5",
//     "contains 15",
//     "remove 3",
//     "shift 1",
//     "sumPairs",
//     "print",
//   ]
// );
