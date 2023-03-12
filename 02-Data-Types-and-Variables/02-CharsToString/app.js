/* 02. Exercise Chars to String - https://judge.softuni.org/Contests/1229
    
Write a function, which receives 3 parameters. Each parameter is a single character. 
Combine all the characters into one string and print it on the console.

*/

function combineCharsToString(a, b, c) {
  let newString = a.concat("", b);
  let resultString = newString.concat("", c);
  console.log(resultString);
}

combineCharsToString("a", "b", "c");
combineCharsToString("%", "2", "o");
combineCharsToString("1", "5", "p");
