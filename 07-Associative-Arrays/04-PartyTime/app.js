/* 04. Party Time - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she exists in any of the two reservation lists. 
The input will come as array of strings. You will be given the list with the guests before you receive a command "PARTY"
All reservation numbers will be with 8 chars
All VIP numbers start with digit
When you receive the command "PARTY" the guests start coming.
Output all guest, who didn't come to the party (VIP must be first) 

*/

function partyTime(array) {
  let guests = {
    vip: [],
    regular: [],
  };

  let index = array.indexOf("PARTY");
  let invites = array.slice(0, index);
  let party = array.slice(index + 1);

  for (let guest of invites) {
    if (isRegular(guest)) {
      guests["regular"].push(guest);
    } else {
      guests["vip"].push(guest);
    }
  }

  for (let guest of party) {
    if (isRegular(guest)) {
      let regular = guests["regular"];
      let indexOfRegular = regular.indexOf(guest);
      regular.splice(indexOfRegular, 1);
    } else {
      let vip = guests["vip"];
      let indexOfVip = vip.indexOf(guest);
      vip.splice(indexOfVip, 1);
    }
  }

  let guestsLeft = guests["regular"].length + guests["vip"].length;

  console.log(guestsLeft);
  console.log(guests["vip"].join("\n"));
  console.log(guests["regular"].join("\n"));

  function isRegular(guest) {
    let firstSymbol = Number(guest[0]);
    return isNaN(firstSymbol);
  }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
