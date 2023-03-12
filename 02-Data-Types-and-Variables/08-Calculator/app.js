/* 08. Calculator - https://judge.softuni.org/Contests/1229
Write a function that receives 3 parameters: a number, 
an operator (string), and another number.
The operator can be:  '+', '-', '/', '*'. 
Print the result of the calculation on the console 
formatted to the second decimal point.

*/

function solveCalculator(numberX, operator, numberY) {
  if (operator === "+") {
    console.log((numberX + numberY).toFixed(2));
  } else if (operator === "-") {
    console.log((numberX - numberY).toFixed(2));
  } else if (operator === "/") {
    console.log((numberX / numberY).toFixed(2));
  } else {
    console.log((numberX * numberY).toFixed(2));
  }
}
solveCalculator(25.5, "-", 3);
