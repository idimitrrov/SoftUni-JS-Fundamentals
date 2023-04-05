/* 07. Company Users - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

Write a function which keeps information about companies and their employees. 
You will receive array of strings containing company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
When you finish reading data, order the companies by the name in ascending order. 
Print the company name and each employee's id in the following format:
{companyName}
-- {id1}
-- {id2}
-- {idN}

*/

function companyUsers(array) {
  let companies = {};
  array.forEach((line) => {
    let [company, user] = line.split(" -> ");

    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
    }

    if (!companies[company].includes(user)) {
      companies[company].push(user);
    }
  });

  let orderedCompanies = {};

  function orderCompanies(companies) {
    Object.keys(companies)
      .sort()
      .forEach(function (key) {
        orderedCompanies[key] = companies[key];
      });
  }

  function printOrderedCompanies(orderedCompanies) {
    for (const property of Object.keys(orderedCompanies)) {
      console.log(property);
      orderedCompanies[property].forEach((value) => {
        console.log(`-- ${value}`);
      });
    }
  }

  orderCompanies(companies);
  printOrderedCompanies(orderedCompanies);
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
