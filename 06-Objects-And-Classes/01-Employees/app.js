/* 01.	Employees - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
Try to use an object.
At the end print all the list employees in the following format:
 "Name: {employeeName} -- Personal Number: {personalNum}" 

*/

function printListOFEmployees(array) {
  class Employee {
    constructor(name, personalNumber) {
      this.name = name;
      this.personalNumber = personalNumber;
    }

    printName() {
      console.log(
        `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
      );
    }
  }

  array.forEach((name) => {
    let idNumber = name.length;
    let person = new Employee(name, idNumber);
    person.printName();
  });
}

printListOFEmployees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
