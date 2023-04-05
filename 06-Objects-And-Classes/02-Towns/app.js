/* 02.	Towns - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

You’re tasked to create and print objects from a text table. 
You will receive input as an array of strings, where each string represents a row of a table, with values on the row separated by pipes "|" and spaces.
The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!


*/

function printTowns(array) {
  class Town {
    constructor(town, latitute, longitute) {
      this.town = town;
      this.latitute = Number(latitute).toFixed(2);
      this.longitute = Number(longitute).toFixed(2);
    }

    printTown() {
      console.log(
        `{ town: '${this.town}', latitude: '${this.latitute}', longitude: '${this.longitute}' }`
      );
    }
  }

  array.forEach((town) => {
    let [townName, latitude, longitude] = town.split(" | ");
    let townResult = new Town(townName, latitude, longitude);
    townResult.printTown();
  });
}

printTowns([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
