/* 02. Distinct Array  - https://judge.softuni.org/Contests/1262/Functions-Exercise

You will be given an array of integer numbers on the first line of the input (space-separated). 
Remove all repeating elements from the array. 
Print the result elements separated by single space.

*/

function createNonRepeatingArray(array) {
  let distinctArray = array.filter((num, i) => {
    let index = array.indexOf(num);

    return index === i;
  });

  console.log(distinctArray.join(" "));
}

createNonRepeatingArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
