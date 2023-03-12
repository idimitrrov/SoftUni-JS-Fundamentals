/* 
Problem 08.Multiplication Table -> https://judge.softuni.org/Contests/Practice/Index/1469#0
You will receive a number as an input from the console. 
Print the 10 times table for this number. 

Output
Print every row of the table in the following format:
{number} X {times} = {product}
Constraints
•	The number will be an integer will be in the interval [1…100]
Input	  Output
5	      5 X 1 = 5
        5 X 2 = 10
        5 X 3 = 15
        5 X 4 = 20
        5 X 5 = 25
        5 X 6 = 30
        5 X 7 = 35
        5 X 8 = 40
        5 X 9 = 45
        5 X 10 = 50

*/
function multiplyTable(number) {
  for (let times = 1; times <= 10; times++) {
    let product = number * times;
    console.log(`${number} X ${times} = ${product}`);
  }
}

multiplyTable(100);
