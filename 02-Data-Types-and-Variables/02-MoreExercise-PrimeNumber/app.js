/* More Exercise 02. Prime Number Checker - https://judge.softuni.org/Contests/1269
    
Write a function to check if a number is prime (only divisible by itself and one).
The input comes as a single number argument.
The output should be the return value of your function. 
Return true for prime number and false otherwise

*/

function checkIfPrime(number) {
  if (number / number === 1 && number / 1 === number) {
    if (number === 2 || number === 3 || number === 5 || number === 7) {
      console.log(true);
    } else if (
      number === 1 ||
      number % 2 === 0 ||
      number % 3 === 0 ||
      number % 5 === 0 ||
      number % 7 === 0
    ) {
      console.log(false);
    } else {
      console.log(true);
    }
  }
}

checkIfPrime(1);
