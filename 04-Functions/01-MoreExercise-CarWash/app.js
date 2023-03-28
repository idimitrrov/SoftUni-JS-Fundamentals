/* 01. Car wash  - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a JS function that receives some commands. 
Depending on the command add a percentage of how much the car is cleaned. 
Start from 0. The first command will always be 'soap':
•	soap – add 10 to the value
•	water – increase the value with 20%
•	vacuum cleaner – increase the value with 25%
•	mud – decrease the value with 10%
The input comes as an array strings. When finished cleaning the car, print the resulting value in the format:
"The car is {value}% clean.". The value should be rounded to the second decimal point.

*/

function calculateCarCleanliness(array) {
  let value = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "soap") {
      value += 10;
    } else if (array[i] === "water") {
      value += value * 0.2;
    } else if (array[i] === "vacuum cleaner") {
      value += value * 0.25;
    } else if (array[i] === "mud") {
      value -= value * 0.1;
    }
  }
  console.log(`The car is ${value.toFixed(2)}% clean.`);
}

calculateCarCleanliness([
  "soap",
  "soap",
  "vacuum cleaner",
  "mud",
  "soap",
  "water",
]);
