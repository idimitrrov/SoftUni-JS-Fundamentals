/* 05.Max Number - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function to find all the top integers in an array. A top 
integer is an integer which is bigger than all the elements 
to its right. 

*/

function returnMaxNumberArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let bigger = true;
    for (let j = i; j < array.length; j++) {
      if (number <= array[j + 1]) {
        bigger = false;
      } else {
        continue;
      }
    }
    if (bigger) {
      newArray.push(number);
    } else {
      continue;
    }
  }
  console.log(newArray.join(" "));
}

// function returnMaxNumberArray(array) {
//   let newArray = [];
//   let max = 0;
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] > max) {
//       newArray.unshift(array[i]);
//       max = array[i];
//     }
//   }
//   console.log(newArray.join(" "));
// }
returnMaxNumberArray([14, 24, 3, 19, 15, 17, 11, 1, 16]);
