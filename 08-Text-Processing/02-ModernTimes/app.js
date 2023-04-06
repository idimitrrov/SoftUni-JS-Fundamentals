/*  02 - Modern Times https://judge.softuni.org/Contests/Practice/Index/1706#0

The input will be a single string.
Find all special words starting with #. Word is invalid if it has anything other than letters. 
Print the words you found without the tag each on a new line.

*/

function findUniqueWords(string) {
  let array = string.split(" ");

  array.forEach((line) => {
    const regEx = /^#[a-zA-Z]/;
    if (line.match(regEx)) {
      console.log(line.slice(1));
    }
  });
}

findUniqueWords(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
