/* 05. Card Game - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

You are given a sequence of people and for every person what cards he draws from the deck. The input will be array of strings. Each string will be in format:
{personName}: {PT, PT, PT,… PT}
Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
Finally print out the total value each player has in his hand in the format:
{personName}: {value}

*/

function cardGame(array) {
  let cardPowers = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let cardTypes = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let players = {};
  array.forEach((line) => {
    let [name, cards] = line.split(": ");
    let uniqueCards = new Set(cards.split(", "));

    uniqueCards = [...uniqueCards];

    if (!players.hasOwnProperty(name)) {
      players[name] = uniqueCards;
    } else {
      for (const card of uniqueCards) {
        if (!players[name].includes(card)) {
          players[name].push(card);
        }
      }
    }
  });

  for (let name in players) {
    const deck = players[name];
    let sum = 0;
    for (const card of deck) {
      const tokens = card.split("");
      if (tokens.length === 2) {
        sum += calculateSum(tokens[0], tokens[1]);
      } else if (tokens.length === 3) {
        sum += calculateSum(tokens[0] + tokens[1], tokens[2]);
      }
    }
    console.log(`${name}: ${sum}`);
  }

  function calculateSum(power, type) {
    const cardPower = cardPowers[power];
    const cardType = cardTypes[type];
    return cardPower * cardType;
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
