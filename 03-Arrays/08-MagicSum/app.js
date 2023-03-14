/* 08. Magic Sum - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 
*/

function printPairs(array, number) {
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    for (let j = i; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === number && j !== i) {
        console.log(`${firstNum} ${secondNum}`);
      }
    }
  }
}

printPairs([1, 7, 6, 2, 19, 23], 8);
