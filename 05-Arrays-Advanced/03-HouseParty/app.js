/* 03. House Party - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a function that keeps track of guests that are going to a house party.
You will be given an array of strings. Each string will be one of the following:
-	"{name} is going!"
-	"{name} is not going!"
If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
At the end print all the guests each on a separate line.


*/

function houseParty(array) {
  let partyList = [];

  for (let element of array) {
    let elementsOfArray = element.split(" ");
    let name = elementsOfArray[0];
    if (elementsOfArray.length === 3) {
      let isIncluded = partyList.includes(name);
      if (!isIncluded) {
        partyList.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      let indexOfPerson = partyList.indexOf(name);

      if (indexOfPerson !== -1) {
        partyList.splice(indexOfPerson, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(partyList.join("\n"));
}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
