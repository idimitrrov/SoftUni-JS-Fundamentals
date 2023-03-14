/* 04. Array Rotation- https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function that receives an array and number of
rotations you have to perform (first element goes at the end). 
*/

function rotateArray(array, rotation) {
  let rotationArray = [];
  for (let i = 0; i < rotation; i++) {
    rotationArray.push(array[0]);
    array.shift();
    array.push(rotationArray[0]);
    rotationArray.shift();
  }
  console.log(array.join(" "));
}
