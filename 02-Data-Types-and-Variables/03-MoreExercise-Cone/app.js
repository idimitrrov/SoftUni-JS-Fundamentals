/* More Exercise 03. Cone - https://judge.softuni.org/Contests/1269
    
Write a function to calculate a cone’s volume and total surface area by given 
height and radius of the base.
The input comes as two number arguments. 
The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result. 
The result should be formatted to the fourth decimal point.


*/

function calculateCone(radius, height) {
  let pi = Math.PI;
  let volume = (pi * radius * radius * height) / 3;
  let area =
    pi * radius * (radius + Math.sqrt(height * height + radius * radius));

  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}

calculateCone(3, 5);
