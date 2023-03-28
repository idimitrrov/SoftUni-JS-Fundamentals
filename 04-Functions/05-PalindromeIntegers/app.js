/* 05. Palindrome Integers - https://judge.softuni.org/Contests/1262/Functions-Exercise

A palindrome is a number which reads the same backward as forward, such as 323 or 1001. 
Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.

*/

function returnPalindrome(array) {
  for (let i = 0; i < array.length; i++) {
    let number = String(array[i]);
    let palindromeFront;
    let palindromeEnd;
    let isPalindrome = true;
    for (
      let j = 0, k = number.length - 1;
      j < number.length && k >= 0;
      j++, k--
    ) {
      palindromeFront = Number(number[j]);
      palindromeEnd = Number(number[k]);
      if (palindromeFront === palindromeEnd) {
        isPalindrome = true;
      } else {
        isPalindrome = false;
      }
    }
    console.log(isPalindrome);
  }
}

returnPalindrome([32, 2, 232, 1010]);
