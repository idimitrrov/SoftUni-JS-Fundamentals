/* 03. Piccolo - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

Write function that:
•	Records a car number for every car that enters the  parking lot
•	Removes a car number when the car goes out
•	Input will be array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number

*/

function piccolo(input) {
  const parkingLot = [];

  for (let i = 0; i < input.length; i++) {
    const [direction, carNumber] = input[i].split(", ");

    if (direction === "IN") {
      parkingLot.push(carNumber);
    } else if (direction === "OUT") {
      const index = parkingLot.indexOf(carNumber);
      if (index !== -1) {
        parkingLot.splice(index, 1);
      }
    }
  }

  if (parkingLot.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    console.log(parkingLot.sort((a, b) => a.localeCompare(b)).join("\n"));
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
