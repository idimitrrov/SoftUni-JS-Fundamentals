/* 
Problem 04.Vacation -> https://judge.softuni.org/Contests/Practice/Index/1469#0
You are given a group of people, type of the group, and day of the week they are going to stay.
Based on that information calculate how much they have to pay and print that price on the console.
Use the table below. In each cell is the price for a single person. The output should look like that:
"Total price: {price}". The price should be formatted to the second decimal point.

There are also discounts based on some conditions:
·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
·	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5% 
You should reduce the prices in that EXACT order


*/
function getPrice(peopleCount, peopleType, day) {
  const studentPrice = {
    Friday: 8.45,
    Saturday: 9.8,
    Sunday: 10.46,
  };

  const businessPrice = {
    Friday: 10.9,
    Saturday: 15.6,
    Sunday: 16,
  };

  const regularPrice = {
    Friday: 15,
    Saturday: 20,
    Sunday: 22.5,
  };

  let price = 0;

  if (peopleType === "Students") {
    price = studentPrice[day] * peopleCount;
    if (peopleCount >= 30) {
      price *= 0.85;
    }
  } else if (peopleType === "Business") {
    price = businessPrice[day] * peopleCount;
    if (peopleCount >= 100) {
      price -= 10 * businessPrice[day];
    }
  } else {
    price = regularPrice[day] * peopleCount;
    if (peopleCount >= 10 && peopleCount <= 20) {
      price *= 0.95;
    }
  }
  console.log("Total price: " + price.toFixed(2));
}

getPrice(40, "Students", "Saturday");
