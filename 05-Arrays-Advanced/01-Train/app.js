/* 01. Train  - https://judge.softuni.org/Contests/1262/Functions-Exercise

Write a function that receives two integer numbers.
Calculate factorial of each number.
Divide the first result by the second and print the division formatted to the second decimal point.

*/
function fillTrain(array) {
  let trainWagons = array.shift().split(" ").map(Number);
  let maxCapacity = +array.shift();

  for (let line of array) {
    let commands = line.split(" ");
    if (commands.length === 2) {
      let newWagon = Number(commands[1]);
      trainWagons.push(newWagon);
    } else {
      let passengersCount = Number(commands[0]);

      for (let i = 0; i < trainWagons.length; i++) {
        let currentCapacity = trainWagons[i];

        if (passengersCount + currentCapacity <= maxCapacity) {
          trainWagons[i] += passengersCount;
          break;
        }
      }
    }
  }
  console.log(trainWagons.join(" "));
}

// fillTrain(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
fillTrain(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
