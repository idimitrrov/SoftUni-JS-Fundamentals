/* 02.	Number Modification  - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a JS program that modifies a number until the average value of all its digits is higher than 5. 
To modify the number, your program should append a 9 to the end of the number, when the average value of all its digits is higher than 5
the program should stop appending. 
If the number’s average value of all its digits is already higher than 5, no appending should be done.
The input is a single number.
The output should consist of a single number - the final modified number which has an average value of all its digits higher than 5. The output should be printed on the console.

•	The input number will consist of no more than 6 digits.
•	The input will be a valid number (there will be no leading zeroes).

*/

function numberModification(number) {
  let sumOfDigits = 0;
  number = String(number);

  for (let j = 0; j < number.length; j++) {
    sumOfDigits += Number(number[j]);
  }

  let newSumOfDigits = sumOfDigits;

  while (newSumOfDigits / number.length < 5) {
    number += "9";
    newSumOfDigits += 9;
  }

  console.log(Number(number));
}
numberModification(5835);
