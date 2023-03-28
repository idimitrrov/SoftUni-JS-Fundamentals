/* 04. Sorting - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. 
Print the elements on one row, separated by single space.

*/

function sortArray(array) {
  let newArray = [];
  let sortedArray = array.sort((a, b) => b - a);
  for (let i of array) {
    let firstElement = sortedArray.shift();
    let lastElement = sortedArray.pop();
    newArray.push(firstElement, lastElement);
    if (sortedArray.length <= 2) {
      newArray.push(...sortedArray);
      break;
    }
  }
  console.log(newArray.join(" "));
}

sortArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
