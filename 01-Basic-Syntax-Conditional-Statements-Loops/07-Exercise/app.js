/* 
Problem 07. Triangle of Numbers -> https://judge.softuni.org/Contests/Practice/Index/1469#0
Write a function, which receives a single number – n, 
and prints a triangle from 1 to n as in the examples
3     1              5    1
      2 2                 2 2 
      3 3 3               3 3 3
                          4 4 4 4
                          5 5 5 5 5 

*/
function drawTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let numbers = "";
    for (let j = 1; j <= i; j++) {
      numbers += `${i} `;
    }
    console.log(numbers.trim());
  }
}

drawTriangle(4);
