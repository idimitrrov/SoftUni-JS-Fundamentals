/* 05. Tseam Account - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

As a gamer, Peter has Tseam Account. He loves to buy new games. 
You are given Peter's account with all of his games-> strings, separated by space. 
Until you receive "Play!" you will be receiving commands which Peter does with his account.
You may receive the following commands:
•	Install {game} - add the game at the last position in the account,
but only if it isn't installed already.
•	Uninstall {game} - delete the game if it exists.
•	Update {game} - update the game if it exists and place it in the last position.
•	Expansion {game}-{expansion} - check  if the game exists and insert after it the expansion in the 
following format: "{game}:{expansion}";

•	On the first input line you will receive Peter`s account - a sequence of game names, separated by space.
•	Until you receive "Play!" you will be receiving commands. 

•	As output, you must print Peter`s Tseam account. 

*/

function printTseamAccountLibrary(array) {
  let currentGameLibrary = array[0].split(" ");
  array.shift();
  array.pop();
  for (let i = 0; i < array.length; i++) {
    let action = array[i].split(" ")[0];
    let game = array[i].split(" ")[1];
    let gameIndex = currentGameLibrary.indexOf(game);
    if (action === "Install" && gameIndex < 0) {
      currentGameLibrary.push(game);
    } else if (action === "Update" && gameIndex >= 0) {
      currentGameLibrary.splice(gameIndex, 1);
      currentGameLibrary.push(game);
    } else if (action === "Uninstall" && gameIndex >= 0) {
      currentGameLibrary.splice(gameIndex, 1);
    } else if (action === "Expansion") {
      let expansionGame = game.split("-")[0];
      if (currentGameLibrary.includes(expansionGame)) {
        let expansion = game.split("-")[1];
        let fullGame = `${expansionGame}:${expansion}`;
        currentGameLibrary.splice(
          currentGameLibrary.indexOf(expansionGame) + 1,
          0,
          fullGame
        );
      }
    }
  }
  console.log(currentGameLibrary.join(" "));
}

printTseamAccountLibrary([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
