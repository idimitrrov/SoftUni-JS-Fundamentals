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

function rotateArray1(array1, rotate1) {
  let rotationArrayTest;
  if (rotate1 > array1.length) {
    rotationArrayTest = array1.splice(0, rotate1 % array1.length);
  } else {
    rotationArrayTest = array1.splice(0, rotate1);
  }
  array1.push(...rotationArrayTest);
  console.log(array1);
}

rotateArray1(["1", "2", "3", "4", "2"]);
