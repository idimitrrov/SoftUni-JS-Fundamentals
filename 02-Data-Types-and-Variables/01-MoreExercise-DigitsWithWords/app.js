/* More Exercise 01. Digits with Words - https://judge.softuni.org/Contests/1269
    
Write a function that receives a digit in 
the form of a word (as a string) and prints the digit (as a number).

*/

function convertStringToNumber(numberInWord) {
  let numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  let words = numberInWord.split(" ");
  let number = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let digit = numbers[word];
    number = digit;
  }

  console.log(number);
}

convertStringToNumber("five");
