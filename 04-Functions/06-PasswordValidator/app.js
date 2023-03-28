/* 06. Password Validator - https://judge.softuni.org/Contests/1262/Functions-Exercise


Write a function that checks if a given password is valid. Password validations are:
•	The length should be 6 - 10 characters (inclusive)
•	It should consists only of letters and digits
•	It should have at least 2 digits 
If a password is valid print "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
•	"Password must be between 6 and 10 characters"
•	"Password must consist only of letters and digits"
•	"Password must have at least 2 digits"

*/

function validatePassword(input) {
  function checkForLength() {
    if (input.length < 6 || input.length > 10) {
      // console.log("Password must be between 6 and 10 characters");
      return false;
    }
    return true;
  }

  function checkForSymbols() {
    let symbols = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (symbols.test(input) === true) {
      // console.log("Password must consist only of letters and digits");
      return false;
    }
    return true;
  }
  function checkForDigits() {
    let digits = [];
    for (let i = 0; i < input.length; i++) {
      let character = Number(input[i]);
      if (!isNaN(character)) {
        digits.push(character);
      }
    }
    if (digits.length < 2) {
      // console.log("Password must have at least 2 digits");
      return false;
    }
    return true;
  }
  function isValid() {
    let isValid = true;
    if (checkForLength() === false) {
      console.log("Password must be between 6 and 10 characters");
      isValid = false;
    }
    if (checkForSymbols() === false) {
      console.log("Password must consist only of letters and digits");
      isValid = false;
    }
    if (checkForDigits() === false) {
      console.log("Password must have at least 2 digits");
      isValid = false;
    }
    if (isValid === true) {
      console.log("Password is valid");
    }
  }
  isValid();
}

validatePassword("login22");
