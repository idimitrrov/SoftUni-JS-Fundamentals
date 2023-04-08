/*  02 - Race  https://judge.softuni.org/Contests/Practice/Index/1706#0

Write a function that processes information about a race. On the first line you will be given list of participants separated by ", ". 
On the next few lines until you receive a line "end of race" you will be given some info which will be some alphanumeric characters. 
In between them you could have some extra characters which you should ignore. For example: "G!32e%o7r#32g$235@!2e". 
The letters are the name of the person and the sum of the digits is the distance he ran. So here we have George who ran 29 km. 
Store the information about the person only if the list of racers contains the name of the person. 
If you receive the same person more than once just add the distance to his old distance. 
At the end print the top 3 racers ordered by distance in descending in the format:
"1st place: {first racer}
2nd place: {second racer}
3rd place: {third racer}"

*/

function race(array) {
  let namesArray = array.shift().split(", ");
  let endOfArray = array.pop();

  let players = {};

  let regExName = /[A-Za-z]+/g;
  let regExNumbers = /[0-9]/gm;

  for (let i = 0; i < array.length; i++) {
    let nameMatch = array[i].match(regExName);
    let nameJoin = nameMatch.join("");
    let kmMatch = array[i].match(regExNumbers);
    let totalKm = kmMatch.reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
      0
    );

    if (players.hasOwnProperty(nameJoin)) {
      players[nameJoin] = players[nameJoin] + totalKm;
    } else {
      players[nameJoin] = totalKm;
    }
  }
  let sortedArrayKeyValuePairs = [];
  let objectKeys = Object.keys(players);
  let objectValues = Object.values(players);
  for (let i = 0; i < objectKeys.length; i++) {
    if (namesArray.includes(objectKeys[i])) {
      sortedArrayKeyValuePairs.push([objectKeys[i], objectValues[i]]);

      sortedArrayKeyValuePairs.sort((a, b) => {
        return b[1] - a[1];
      });
    }
  }
  console.log(`1st place: ${sortedArrayKeyValuePairs[0][0]}`);
  console.log(`2nd place: ${sortedArrayKeyValuePairs[1][0]}`);
  console.log(`3rd place: ${sortedArrayKeyValuePairs[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
