/* 02. Odd Occurrences - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

Write a function that extracts all the elements of a sentence odd number of times (case-insensitive)
The input comes as a single string. The words will be separated by a single space.

*/

function oddOccurrences(input) {
  let occurances = new Map();
  let inputArray = input.toLowerCase().split(" ");

  for (let i = 0; i < inputArray.length; i++) {
    let currentElement = inputArray[i];
    let occuranceCounter = 1;

    if (occurances.has(currentElement)) {
      occuranceCounter += occurances.get(currentElement);
    }

    occurances.set(currentElement, occuranceCounter);
  }

  let occuranceArray = [...occurances];
  let fitleredOccurance = occuranceArray.filter(
    (element) => element[1] % 2 !== 0
  );

  let result = [];

  fitleredOccurance.forEach((element) => {
    result.push(element[0]);
  });
  console.log(result.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
