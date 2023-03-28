/* 04. Odd and Even Sum - https://judge.softuni.org/Contests/1262/Functions-Exercise

You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 

*/

function returnOddAndEvenSum(number) {
  let oddSum = 0;
  let evenSum = 0;
  let numberString = String(number);
  for (let i = 0; i < numberString.length; i++) {
    let number = Number(numberString[i]);
    if (number % 2 === 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

returnOddAndEvenSum(102);
