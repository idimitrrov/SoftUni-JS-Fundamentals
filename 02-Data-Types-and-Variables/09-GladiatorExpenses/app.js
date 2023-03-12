/* 09. Gladiator Expenses - https://judge.softuni.org/Contests/1229

As a gladiator, Peter has to repair his broken equipment when he loses a fight. 
His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count. 
•	Every second lost game, his helmet is broken.
•	Every third lost game, his sword is broken.
•	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
•	Every second time, when his shield brakes, his armor also needs to be repaired. 
You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment

You will receive 5 parameters to your function:
•	The first parameter - lost fights count - is an integer in the range [0, 1000].
•	The second parameter - helmet price - is the floating-point number in the range [0, 1000]. 
•	The third parameter - sword price - is the floating-point number in the range [0, 1000]. 
•	The fourth parameter - shield price - is the floating-point number in the range [0, 1000]. 
•	The fifth parameter - armor price - is the floating-point number in the range [0, 1000]. 

•	As output you must print Peter`s total expenses for new equipment rounded to the second decimal point: "Gladiator expenses: {expenses} aureus"
•	Allowed working time / memory: 100ms / 16MB.


*/

function getGladiatorPrice(lostFights, helmet, sword, shield, armor) {
  let helmetCounter = 0;
  let swordCounter = 0;
  let shieldCounter = 0;
  let armorCounter = 0;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      helmetCounter++;
    }
    if (i % 3 === 0 && helmetCounter > 0) {
      swordCounter++;
    }
    if (i % 6 === 0 && helmetCounter > 0 && swordCounter > 0) {
      shieldCounter++;
      if (shieldCounter % 2 === 0) {
        armorCounter++;
      }
    }
  }
  let price =
    helmetCounter * helmet +
    swordCounter * sword +
    shieldCounter * shield +
    armorCounter * armor;
  console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
  // console.log(`Lost Fights: ${lostFights}`);
  // console.log(`Helmet Counter: ${helmetCounter}`);
  // console.log(`Sword Counter: ${swordCounter}`);
  // console.log(`Shield Counter: ${shieldCounter}`);
  // console.log(`Armor Counter: ${armorCounter}`);
}
getGladiatorPrice(8, 12.5, 21.5, 40, 200);
