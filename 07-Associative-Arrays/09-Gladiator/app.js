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

function printGladiator(array) {
  let gladiators = {};
  let aveCesar = array.pop();

  array.forEach((line) => {
    let [name, skill, skillPoints] = line.split(" -> ");
    if (skill !== undefined) {
      if (!gladiators[name]) {
        gladiators[name] = {};
      }
      if (!gladiators[name][skill]) {
        gladiators[name][skill] = 0;
      }
      if (gladiators[name][skill] < Number(skillPoints)) {
        gladiators[name][skill] = Number(skillPoints);
      }
    } else {
      const [gladiatorOne, gladiatorTwo] = name.split(" vs ");
      if (doesExist(gladiatorOne) && doesExist(gladiatorOne)) {
        if (haveCommonSkill(gladiatorOne, gladiatorTwo)) {
          if (
            sumSkill(Object.entries(gladiators[gladiatorOne])) >
            sumSkill(Object.entries(gladiators[gladiatorTwo]))
          ) {
            delete gladiators[gladiatorOne];
          } else {
            delete gladiators[gladiatorTwo];
          }
        }
      }
    }
  });

  function doesExist(name) {
    return Object.keys(gladiators).includes(name);
  }

  function haveCommonSkill(a, b) {
    const firstGladiator = Object.entries(gladiators[a]);
    const secondGladiator = Object.entries(gladiators[b]);
    return firstGladiator.some((x) =>
      secondGladiator.some((y) => y.includes(x[0]))
    );
  }

  function sumSkill(gladiator) {
    return gladiator.reduce((a, v) => a + v[1], 0);
  }

  function sortBySkill(x, y) {
    return sumSkill(Object.entries(y)) - sumSkill(Object.entries(x));
  }

  function sortByName(a, b) {
    return a.localeCompare(b);
  }

  const result = Object.entries(gladiators).sort((x, y) =>
    sortBySkill(x[1], y[1]) !== 0
      ? sortBySkill(x[1], y[1])
      : sortByName(x[0], y[0])
  );

  result.forEach((x) => {
    const skills = Object.entries(x[1]).sort((x, y) =>
      y[1] - x[1] !== 0 ? y[1] - x[1] : sortByName(x[0], y[0])
    );
    console.log(`${x[0]}: ${sumSkill(skills)} skill`);
    skills.forEach((x) => console.log(`- ${x[0]} <!> ${x[1]}`));
  });
}

printGladiator([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Peter -> BattleCry -> 500",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Stefan -> BattleCry -> 300",
  "Stefan vs Peter",
  "Ave Cesar",
]);
