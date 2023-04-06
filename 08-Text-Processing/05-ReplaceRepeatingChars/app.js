/*  05 - Replace Repeating Chars https://judge.softuni.org/Contests/Practice/Index/1706#0

Write a function that receives a single string and replaces any sequence of the same letters with a single corresponding letter.

*/

function replaceRepeating(string) {
  let outputString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      outputString += string[i];
    }
  }
  console.log(outputString);
}

replaceRepeating("aaaaabbbbbcdddeeeedssaa");
replaceRepeating("qqqwerqwecccwd");
