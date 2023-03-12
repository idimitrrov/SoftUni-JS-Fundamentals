/* 07. Lower or Upper - https://judge.softuni.org/Contests/1229
 Write a function that prints whether a 
 given character is upper-case or lower-case.
*/

function checkIfUpperOrLower(character) {
  if (character == character.toUpperCase()) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}

checkIfUpperOrLower("l");
