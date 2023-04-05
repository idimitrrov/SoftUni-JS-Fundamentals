/* 01. Words Tracker - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words you will be looking for. 
Print for each word how many times it occurs. The words should be sorted by count in descending.

*/

function wordsTracker(array) {
  let trackedWords = array.shift().split(" ");
  let wordsCount = {};
  for (let word of trackedWords) {
    wordsCount[word] = 0;
  }
  array.forEach((currentWord) => {
    if (wordsCount.hasOwnProperty(currentWord)) {
      wordsCount[currentWord]++;
    }
  });

  let sortedWords = Object.entries(wordsCount);
  sortedWords.sort((a, b) => b[1] - a[1]);
  sortedWords.forEach((el) => {
    console.log(`${el[0]} - ${el[1]}`);
  });
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
