/*  04 - String Substring https://judge.softuni.org/Contests/Practice/Index/1706#0

The input will be given as two separated strings.
Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find match, print the word and stop the program. 
If you don't find the word print "{word} not found!"

*/

function stringSubstring(word, string) {
  string = string.toLowerCase();
  let array = string.split(" ");

  if (array.includes(word.toLowerCase())) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
