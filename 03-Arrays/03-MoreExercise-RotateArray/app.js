/* 03. Rotate Array- https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space 

*/

function rotateArray(array) {
  let rotations = Number(array[array.length - 1]);
  array.pop();
  let newArray = [];
  for (let i = 0; i < rotations; i++) {
    newArray.push(array[array.length - 1]);
    array.unshift(newArray[0]);
    newArray.shift();
    array.pop();
  }
  console.log(array.join(" "));
}

rotateArray(["1", "2", "3", "4", "2"]);
