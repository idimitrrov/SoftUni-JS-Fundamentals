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

function aMinerTask(array) {
  let minedResources = {};
  for (let i = 0; i < array.length; i += 2) {
    let resource = array[i];
    let quantity = Number(array[i + 1]);
    if (!minedResources.hasOwnProperty(resource)) {
      minedResources[resource] = quantity;
    } else {
      minedResources[resource] += quantity;
    }
  }

  printMinedResources(minedResources);

  function printMinedResources(minedResources) {
    for (const property of Object.keys(minedResources)) {
      console.log(`${property} -> ${minedResources[property]}`);
    }
  }
}
aMinerTask(["gold", "155", "silver", "10", "copper", "17"]);
