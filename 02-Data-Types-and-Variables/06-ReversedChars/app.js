/* 06. Reversed Chars - https://judge.softuni.org/Contests/1229
 
Write a program that takes 3 parameters (characters) 
and prints them in reversed order with a space between them.
*/

function reverseCharacters(characterA, characterB, characterC) {
  let array = [characterA, characterB, characterC];
  let reversedArray = array.reverse();
  console.log(`${reversedArray[0]} ${reversedArray[1]} ${reversedArray[2]}`);
}

reverseCharacters("1", "L", "&");
