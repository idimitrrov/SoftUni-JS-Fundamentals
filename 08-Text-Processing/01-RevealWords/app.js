/*  01 - Reveal Words https://judge.softuni.org/Contests/Practice/Index/1706#0

Write a function, which receives two parameters. 
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string which contains templates containing '*'.
Find the word with exact same length as the template and replace it.

*/

function revealWords(string, sentenceString) {
  let words = string.split(", ");

  words.forEach((word) => {
    sentenceString = sentenceString.replace("*".repeat(word.length), word);
  });

  console.log(sentenceString);
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
