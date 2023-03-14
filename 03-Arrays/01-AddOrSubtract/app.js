/* 01. Add or Subtract - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function, which changes the value of odd and even numbers in an array of numbers.
•	If the number is even - add to its value its index position
•	If the number is odd - subtract to its value its index position
*/

function addOrSubtract(array) {
  let newValueEven;
  let newValueOdd;
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i] % 2 === 0) {
      newValueEven = array[i] + i;
      // console.log(newValueEven);
      newArray.push(newValueEven);
    } else {
      newValueOdd = array[i] - i;
      // console.log(newValueOdd);
      newArray.push(newValueOdd);
    }
  }
  console.log(newArray);
  console.log(array.reduce((partialSum, a) => partialSum + a, 0));
  console.log(newArray.reduce((partialSum, a) => partialSum + a, 0));
}

addOrSubtract([-5, 11, 3, 0, 2]);
