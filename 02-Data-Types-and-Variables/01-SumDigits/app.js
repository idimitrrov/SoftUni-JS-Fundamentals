/* 01. Exercise Sum Digits - https://judge.softuni.org/Contests/1229
Write a function, which will be given a single number. Your task is to find the sum of its digits.
*/

function sumDigits(number) {
  if (typeof number !== "string") {
    number = number.toString();
  }
  if (number.length < 2) {
    return parseInt(number);
  }
  let arrayFromNumber = number.split("");
  let initialValue = 0;
  let sumFromArray = arrayFromNumber.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue),
    initialValue
  );
  console.log(sumFromArray);
}

sumDigits(543);
