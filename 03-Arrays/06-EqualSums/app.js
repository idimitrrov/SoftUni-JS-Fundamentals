/* 06. Equal Sums - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function that determines if there exists an element in the array of
numbers such that the sum of the elements on its left is equal to the sum of
the elements on its right. 
If there are NO elements to the left/right, their sum is 0. 
Print the index that satisfies the required condition or "no" if there is
no such index.

*/

function checkIfEqualSums(array) {
  let equal = true;

  for (let i = 0; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = i - 1; j >= 0; j--) {
      leftSum += array[j];
    }

    for (let k = i + 1; k < array.length; k++) {
      rightSum += array[k];
    }
    if (leftSum === rightSum) {
      console.log(i);
      equal = false;
      break;
    }
  }
  if (equal) {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3]);
