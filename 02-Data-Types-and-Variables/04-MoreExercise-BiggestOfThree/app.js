/* More Exercise 04. Biggest of 3 - https://judge.softuni.org/Contests/1269
    
Write a function that finds the biggest number.
The input comes as 3 parameters.
The output is the biggest of the input numbers.

*/

function findBiggest(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

function biggestOfThree(num1, num2, num3) {
  console.log(Math.max(num1, num2, num3));
}

findBiggest(-2, 7, 3);
findBiggest(130, 5, 99);
findBiggest(-2, 7, 3);
