/* 09. *Gladiator Inventory - https://judge.softuni.org/Contests/1262/Functions-Exercise

As a gladiator, Peter has cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
You may receive the following commands:
•	Buy {equipment}
•	Trash {equipment}
•	Repair {equipment}
•	Upgrade {equipment}-{upgrade}
If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't bought already.
If you receive Trash command, delete the equipment if it exists.
If you receive Repair command, you should repair the equipment if it exists and place it on last position.
If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}";

*/

function printGladiatorInventory([inventory, ...commands]) {
  let inventoryArray = inventory.split(" ");
  // console.log(inventoryArray);
  // console.log(commands[0].split(" "));
  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i].split(" ");
    // console.log(currentCommand[0]);
    if (currentCommand[0] === "Buy") {
      let item = currentCommand[1];
      if (!inventory.includes(item)) {
        inventoryArray.push(item);
      }
    }
    if (currentCommand[0] === "Trash") {
      let item = currentCommand[1];
      if (inventory.includes(item)) {
        let indexOfItem = inventoryArray.findIndex((el) => el === item);
        inventoryArray.splice(indexOfItem, 1);
      }
    }
    if (currentCommand[0] === "Repair") {
      let item = currentCommand[1];
      if (inventory.includes(item)) {
        let indexOfItem = inventoryArray.findIndex((el) => el === item);
        inventoryArray.splice(indexOfItem, 1);
        inventoryArray.push(item);
      }
    }

    if (currentCommand[0] === "Upgrade") {
      let itemUpgrade = currentCommand[1];
      let item = itemUpgrade.split("-")[0];
      let upgrade = item + ":" + itemUpgrade.split("-")[1];
      if (inventory.includes(item)) {
        let indexOfItem = inventoryArray.findIndex((el) => el === item);
        inventoryArray.splice(indexOfItem + 1, 0, upgrade);
      }
    }
  }
  console.log(inventoryArray.join(" "));
}

printGladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);

printGladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
