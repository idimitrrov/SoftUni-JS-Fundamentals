/* 10. LadyBugs - https://judge.softuni.bg/Contests/1256/Arrays-Exercise


*/

function ladyBugs(array) {
  const fieldLength = Number(array.shift());
  const ladybugsPlaces = array.shift().split(" ");
  let ladybugArray = [];
  let initialPosition;
  for (let i = 0; i < fieldLength; i++) {
    if (i === Number(ladybugsPlaces[0])) {
      ladybugsPlaces.shift();
      ladybugArray.push(1);
    } else {
      ladybugArray.push(0);
    }
  }
  array.forEach((element) => {
    let [position, direction, steps] = element.split(" ");
    position = Number(position);
    if (direction === "left") {
      steps = steps * -1;
    } else {
      steps = Number(steps);
    }
    if (ladybugArray[position] === 1) {
      if (position + steps < 0 || position + steps >= fieldLength) {
        ladybugArray[position] = 0;
      } else {
        initialPosition = position;
        fly(position, steps);
      }
    }
  });

  function fly(position, steps) {
    let nextPosition = position + steps;
    if (nextPosition < 0 || nextPosition >= ladybugArray.length) {
      ladybugArray[initialPosition] = 0;
    } else if (ladybugArray[nextPosition] === 0) {
      ladybugArray[nextPosition] = 1;
      ladybugArray[initialPosition] = 0;
    } else {
      fly(nextPosition, steps);
    }
  }

  console.log(ladybugArray.join(" "));
}

ladyBugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
// 2 Parameters - Array with elements index 0 - integer + strings in the form of [3, ' ' , ' ' , ' ' ]
// index 0 - Size of Field
// index 1 - String with initial index '0 1'. Given index MAY NOT be in the field range, so If statement needed to check for that
// index 2 until the end -> Commands "{ladybug index} {direction} {fly length}"
