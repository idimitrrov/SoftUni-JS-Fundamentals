// Problem 03.Division -> https://judge.softuni.org/Contests/Compete/Index/1207#2
function checkForDivision(number) {
  if (number % 2 === 0) {
    if (number % 3 === 0) {
      if (number % 10 === 0) {
        console.log("The number is divisible by 10");
      } else {
        console.log("The number is divisible by 6");
      }
    } else if (number % 10 === 0) {
      console.log("The number is divisible by 10");
    } else if (number % 7 === 0) {
      console.log("The number is divisible by 7");
    } else {
      console.log("The number is divisible by 2");
    }
  } else if (number % 3 === 0) {
    if (number % 7 === 0) {
      console.log("The number is divisible by 7");
    } else {
      console.log("The number is divisible by 3");
    }
  } else if (number % 7 === 0) {
    console.log("The number is divisible by 7");
  } else if (number % 10 === 0) {
    console.log("The number is divisible by 10");
  } else {
    console.log("Not divisible");
  }
}

checkForDivision(50);
