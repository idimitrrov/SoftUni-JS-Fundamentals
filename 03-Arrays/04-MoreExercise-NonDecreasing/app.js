/* 04. Non-Decreasing Subsequence- https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function that extracts only those numbers that form a non-decreasing subsequence. In other words, you start from the first
element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if
it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 
The input comes as array of numbers.
The output is the processed array after the filtration, which should be a non-decreasing subsequence. The elements should be printed on one line, separated by a single space


*/

function printNonDecreasing(array) {
  let newArray = [];
  let currentMax = array[0];

  array.filter((element) => {
    if (element >= currentMax) {
      newArray.push(element);
      currentMax = element;
    }
  });

  console.log(newArray.join(" "));
}

printNonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
