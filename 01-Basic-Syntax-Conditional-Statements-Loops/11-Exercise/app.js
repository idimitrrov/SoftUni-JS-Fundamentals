/* 
Problem 11. Bitcoin "Mining" -> https://judge.softuni.org/Contests/Practice/Index/1469#0
Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during your shift at the mine. 
Your shift consists of a certain number of days where you mine an amount of gold in grams. 
Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. 
Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day. For the different exchanges use these prices:

*/
function bitcoin(dataArray) {
  let day = dataArray.indexOf(dataArray[0]) + 1;
  let money = 0;
  let dayMoney = 0;
  let bitcoin = 0;
  let purchase = 0;
  for (let i = 0; i < dataArray.length; i++) {
    dayMoney = dataArray[i] * 67.51;
    if ((i + 1) % 3 === 0) {
      dayMoney *= 0.7;
    }
    money += dayMoney;
    while (money >= 11949.16) {
      money -= 11949.16;
      bitcoin++;
      if (purchase === 0) {
        purchase = i + 1;
      }
    }
    day++;
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${purchase}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoin([100, 200, 300]);
