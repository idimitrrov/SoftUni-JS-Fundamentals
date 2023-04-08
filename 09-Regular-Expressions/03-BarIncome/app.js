/*  03 - SoftUni Bar Income  https://judge.softuni.org/Contests/Practice/Index/1706#0

Let`s take a break and visit the game bar at SoftUni. It is about time for the people behind the bar to go home and you are the person who has to draw the line and calculate the money from the products that were sold throughout the day. Until you receive a line with text "end of shift" you will be given lines of input. But before processing that line you have to do some validations first.
Each valid order should have a customer, product, count and a price:
•	Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
•	Valid product contains any word character and must be surrounded by '<' and '>' 
•	Valid count is an integer, surrounded by '|'
•	Valid price is any real number followed by '$'
The parts of a valid order should appear in the order given: customer, product, count and a price.
Between each part there can be other symbols, except ('|', '$', '%' and '.')
For each valid line print on the console: "{customerName}: {product} - {totalPrice}"
When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following format: "Total income: {income}".


*/

function barIncome(array) {
  if (array.includes("end of shift")) {
    array.pop();
  }

  // const regEx =
  //   /%(?<name>[A-Z][a-z]+)%<(?<productName>[A-Za-z]*)>\|(?<quantity>[0-9]+)\|(?<productPrice>[0-9]+\.[0-9]+|[0-9]+)\$/gm;

  const regExTest =
    /%(?<name>[A-Z][a-z]+)%<(?<productName>[A-Za-z]*)>\w*\|(?<quantity>[0-9]+)\|(?<productPrice>\w*(?:[0-9]+\.[0-9]+|[0-9]+))\$/gm;

  let resultArray = [];

  array.forEach((line) => {
    if (line.match(regExTest) !== null) {
      let result = line.match(regExTest);
      resultArray.push(result.join());
    }
  });

  let totalSum = 0;

  for (let i = 0; i < resultArray.length; i++) {
    for (const match of resultArray[i].matchAll(regExTest)) {
      let individualPriceTimesQuantity =
        Number(match.groups.quantity) * Number(match.groups.productPrice);
      console.log(
        `${match.groups.name}: ${
          match.groups.productName
        } - ${individualPriceTimesQuantity.toFixed(2)}`
      );
      totalSum += individualPriceTimesQuantity;
    }
  }

  console.log(`Total income: ${totalSum.toFixed(2)}`);
}

barIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>|10|20$",
  "end of shift",
]);

// barIncome([
//   "%George%<Croissant>|2|10.3$",
//   "%Peter%<Gum>|1|1.3$",
//   "%Maria%<Cola>|1|2.4$",
//   "end of shift",
// ]);
