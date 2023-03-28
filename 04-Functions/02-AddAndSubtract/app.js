/* 02. Add and Subtract - https://judge.softuni.org/Contests/1262/Functions-Exercise

You will receive three integer numbers. 

Write a function sum() to get the sum of the first two integers and subtract() function that subtracts the third integer from the result.

*/

function addAndSubtract(a, b, c) {
  let sum = (a, b) => a + b;
  let subtract = (result, c) => result - c;
  let result = sum(a, b);
  console.log(subtract(result, c));
}

addAndSubtract(2, 2, 3);
