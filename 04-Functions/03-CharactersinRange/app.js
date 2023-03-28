/* 03. Characters Range - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code.

Keep in mind that the second character code might be before the first one inside the ASCII table.

*/

function returnCharactersInRange(firstChar, secondChar) {
  let firstCode = firstChar.charCodeAt(0);
  let secondCode = secondChar.charCodeAt(0);

  let start = Math.min(firstCode, secondCode);
  let end = Math.max(firstCode, secondCode);

  characters = [];
  for (let i = start + 1; i < end; i++) {
    let currentCharacter = String.fromCharCode(i);

    characters.push(currentCharacter);
  }

  console.log(characters.join(" "));
}

returnCharactersInRange("a", "d");
