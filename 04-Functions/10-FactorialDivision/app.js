/* 10. Factorial Division  - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a function that receives two integer numbers.
Calculate factorial of each number.
Divide the first result by the second and print the division formatted to the second decimal point.

*/

function printFactorial(a, b) {
  function factorialize(num) {
    if (num < 0) {
      return -1;
    } else if (num === 0) {
      return 1;
    } else {
      return num * factorialize(num - 1);
    }
  }

  function divideAndPrintResult() {
    return Number(factorialize(a) / factorialize(b)).toFixed(2);
  }
  console.log(divideAndPrintResult());
}

printFactorial(6, 2);

// function factorialDivision(a, b) {
//   let firstNum = Number(a);
//   let secondNum = Number(b);
//   let firstFactorial = 1;
//   let secondFactorial = 1;
//   if (firstNum > 1) {
//     while (firstNum > 1) {
//       firstFactorial *= firstNum;
//       firstNum--;
//     }
//   }
//   if (secondNum > 1) {
//     while (secondNum > 1) {
//       secondFactorial *= secondNum;
//       secondNum--;
//     }
//   }
//   console.log(`${(firstFactorial / secondFactorial).toFixed(2)}`);
// }
// factorialDivision(0, 3);
