/* 08. Perfect Number  - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a function that receive a number and return if this number is perfect or NOT.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

*/

function checkIfPerfect(number) {
  function sumItsDigits() {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
  function isPerfect() {
    if (number === sumItsDigits()) {
      console.log("We have a perfect number!");
    } else {
      console.log("It's not so perfect.");
    }
  }

  isPerfect();
}

checkIfPerfect(1236498);
