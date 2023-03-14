/* 9. Dungeonest Dark - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

You receive a string, representing the dungeons rooms, 
separated with '|' (vertical bar): "room1|room2|room3…".

*/

function printDungeonAdventure(string) {
  if (typeof string !== "string") {
    string = string.toString();
  }

  let array = string.split("|");
  let health = 100;
  let coins = 0;
  let checkIFAlive = true;

  for (let i = 0; i < array.length; i++) {
    const battle = array[i].split(" ");
    const monster = battle[0];
    let damageHealthOrCoins = Number(battle[1]);
    if (monster === "potion") {
      if (health === 100) {
        console.log(`You healed for 0 hp.`);
      } else if (health + damageHealthOrCoins > 100) {
        damageHealthOrCoins = 100 - health;
        console.log(`You healed for ${damageHealthOrCoins} hp.`);
        health = 100;
      } else {
        health += damageHealthOrCoins;
        console.log(`You healed for ${damageHealthOrCoins} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (monster === "chest") {
      coins += damageHealthOrCoins;
      console.log(`You found ${damageHealthOrCoins} coins.`);
    } else {
      health -= damageHealthOrCoins;
      if (health <= 0) {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${i + 1}`);
        checkIFAlive = false;
        break;
      } else {
        console.log(`You slayed ${monster}.`);
      }
    }
  }
  if (checkIFAlive) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

printDungeonAdventure(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
