/* 07.	Search for a Number - https://judge.softuni.org/Contests/1262/Functions-Exercise

You will receive two arrays of integers. The second array is contains exactly three numbers. 
First number represents the number of elements you have to take from the first array (starting from the first one).
Second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
Third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."

*/

function searchForNumber(array, [numberOfElements, deleteCount, findNumber]) {
  let modifiedArray = [];
  let numberCounter = 0;
  // console.log(array.splice(0, numberOfElements));
  modifiedArray = array.splice(0, numberOfElements);
  // console.log(modifiedArray);
  for (let i = 0; i < deleteCount; i++) {
    modifiedArray.shift();
  }

  for (let j = 0; j < modifiedArray.length; j++) {
    if (modifiedArray[j] === findNumber) {
      numberCounter++;
    }
  }
  console.log(`Number ${findNumber} occurs ${numberCounter} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
