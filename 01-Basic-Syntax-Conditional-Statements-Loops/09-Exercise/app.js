/* 
Problem 09. Login -> https://judge.softuni.org/Contests/Practice/Index/1469#0
You will be given a string representing a username. The password will be that username reversed. 
Until you receive the correct password print on the console "Incorrect password. Try again.". 
When you receive the correct password print "User {username} logged in." 
However on the fourth try if the password is still not correct print "User {username} blocked!" and end the program. 
The input comes as an array of strings.
*/
function login(userData) {
  let username = userData[0];
  let password = function (str) {
    str = username.split("");
    let reverseArray = str.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
  };
  let guesses = [...userData.slice(1)];
  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] === password()) {
      console.log(`User ${username} logged in.`);
    } else {
      if (i === 3) {
        console.log(`User ${username} blocked!`);
      } else if (guesses[i] !== password()) {
        console.log("Incorrect password. Try again.");
      }
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
