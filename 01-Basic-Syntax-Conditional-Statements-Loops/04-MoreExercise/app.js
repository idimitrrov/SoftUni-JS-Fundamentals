// Problem 04.NextDay -> https://judge.softuni.org/Contests/Practice/Index/1469#0
function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  console.log(joinArray);
}

reverseString("hello");
