/* 06.	Bomb Numbers - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and it's power.
The output is the sum of the remaining elements in the sequence.

*/

function detonateBombArray(sequence, [bombNumber, power]) {
  while (sequence.includes(bombNumber)) {
    let index = sequence.indexOf(bombNumber);
    let startIndex = Math.max(index - power, 0);
    let endIndex = Math.min(index + power, sequence.length - 1);
    sequence.splice(startIndex, endIndex - startIndex + 1);
  }
  console.log(sequence);
  console.log(sequence.reduce((acc, curr) => acc + curr, 0));
  return sequence.reduce((acc, curr) => acc + curr, 0);
}

detonateBombArray([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
