/*  1.	Print N-th Element - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function that collects each element of an array, on a given step.
The input comes as an array of strings. The last element is N - the step.
The collections are every element on the N-th step starting from the first one. If the step is "3", you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. Then, print elements in a row, separated by a single space.

*/

function printN(array) {
  let nElement = Number(array.pop());
  const result = [];

  array.forEach((element, index) => {
    if (index % nElement === 0) {
      result.push(element);
      console.log(index);
    }
  });
  console.log(result.join(" "));
}

// function printN(array) {
//   const nElement = Number(array.pop());
//   const result = [];

//   for (let i = 0; i < array.length; i += nElement) {
//     result.push(array[i]);
//   }

//   console.log(result.join(" "));
// }
printN(["1", "2", "3", "4", "5", "6"]);
