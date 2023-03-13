/* More Exercise 07. Chess Board- https://judge.softuni.org/Contests/1269
    
Write a function that calculates a triangle’s area by its 3 sides.
The input comes as three number arguments, representing one side of a triangle.
The output should be printed to the console.

*/
function calculateArea(a, b, c) {
  let s = (a + b + c) / 2;
  console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
}

calculateArea(2, 3.5, 4);
