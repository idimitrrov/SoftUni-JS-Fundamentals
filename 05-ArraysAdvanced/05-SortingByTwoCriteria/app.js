/* 05. House Party - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, the fourth is the second smallest one and so on. 
Print the elements on one row, separated by single space.

*/

function sortArray(array) {
  let sorted = array.sort(sortNames);

  console.log(sorted.join("\n"));

  function sortNames(a, b) {
    let criteriaLength = a.length - b.length;

    if (criteriaLength === 0) {
      return a.localeCompare(b);
    }

    return criteriaLength;
  }
}

sortArray(["alpha", "beta", "gamma"]);
sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
