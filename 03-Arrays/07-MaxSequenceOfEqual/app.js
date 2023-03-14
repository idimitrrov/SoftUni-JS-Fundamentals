/* 07. Max Sequence of Equal Elements - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function that finds the longest sequence of equal elements in an array of numbers. 
If several longest sequences exist, print the leftmost one

*/

function printBiggestSequenceOfEqual(array) {
  let biggestArray = [];
  let numberArray = [];
  for (let i = 0; i < array.length; i++) {
    const numberFirst = array[i];
    const numberSecond = array[i + 1];
    if (numberFirst === numberSecond) {
      if (numberArray.length > 1) {
        numberArray.push(numberSecond);
      } else {
        numberArray.push(numberFirst, numberSecond);
      }
    } else {
      numberArray = [];
      numberArray.push(numberFirst);
    }
    if (biggestArray.length < numberArray.length) {
      biggestArray = numberArray;
    } else {
      continue;
    }
  }
  console.log(biggestArray.splice(1).join(" "));
}

printBiggestSequenceOfEqual([1, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
