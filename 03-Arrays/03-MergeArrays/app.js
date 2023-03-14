/* 03. Merge Arrays - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function which receives two string arrays and merges them into a third array.  
•	If the index of the element is even, add into the third array the sum of both elements 
at that index
•	If the index of the element is odd, add the concatenation of both elements at that index

Input
As input you will receive two string arrays.

Output
As output you should print the resulting third array, each element separated by " - ".

*/

function mergeArrays(a, b) {
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      newArray.push(Number(a[i]) + Number(b[i]));
    } else {
      newArray.push(a[i] + b[i]);
    }
  }
  console.log(newArray.join(" - "));
}

mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
