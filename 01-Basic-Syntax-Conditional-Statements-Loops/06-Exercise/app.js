/* 
Problem 06.Print and Sum -> https://judge.softuni.org/Contests/Practice/Index/1469#0
Write a function to display numbers from given start to given end and their sum. 
The input comes as two number parameters.

*/
function sumRange(a, b) {
  let sum = 0;
  let numbers = "";
  for (a; a <= b; a++) {
    numbers += a + " ";
    sum += a;
  }
  console.log(numbers.trim());
  console.log("Sum: " + sum);
}
