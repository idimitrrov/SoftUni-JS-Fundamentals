/*  03 - SoftUni Bar Income  https://judge.softuni.org/Contests/Practice/Index/1706#0

The war is in its peak, but you, young Padawan, can turn the tides with your programming skills. You are tasked to create a program to decrypt the messages of The Order and prevent the death of hundreds of lives. 
You will receive several messages, which are encrypted using the legendary star enigma. You should decrypt the messages, following these rules:
To properly decrypt a message, you should count all the letters [s, t, a, r] – case insensitive and remove the count from the current ASCII value of each symbol of the encrypted message.
After decryption:
Each message should have a planet name, population, attack type ('A', as attack or 'D', as destruction) and soldier count.
The planet name starts after '@' and contains only letters from the Latin alphabet. 
The planet population starts after ':' and is an Integer;
The attack type may be "A"(attack) or "D"(destruction) and must be surrounded by "!" (exclamation mark).
The soldier count starts after "->" and should be an Integer.
The order in the message should be: planet name -> planet population -> attack type -> soldier count. Each part can be separated from the others by any character except: '@', '-', '!', ':' and '>'.


*/

function starEnigma([numberOfMsg, ...messages]) {
  let decryptedASCII = [];
  const attackData = [];
  const regEx = /s|t|a|r/gi;
  const regExTest =
    /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<planetPopulation>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<armyValue>\d+)/gi;

  for (let i = 0; i < numberOfMsg; i++) {
    let occurences = messages[i].match(regEx);
    let msgChars = messages[i].split("");
    msgChars.forEach((x) =>
      decryptedASCII.push(x.charCodeAt(0) - occurences.length)
    );

    let decrypted = decryptedASCII.map((x) => String.fromCharCode(x)).join("");

    let decryptedData = regExTest.exec(decrypted);

    if (decryptedData !== null) {
      decryptedData = decryptedData.slice(1).filter((x) => x !== "");
      attackData.push(decryptedData);
    }
    decryptedASCII = [];
  }

  let [attacked, destroyed] = [[], []];
  attackData.forEach((x) =>
    x[2] === "A" ? attacked.push(x) : destroyed.push(x)
  );

  console.log(`Attacked planets: ${attacked.length}`);
  attacked.sort().forEach((x) => console.log(`-> ${x[0]}`));
  console.log(`Destroyed planets: ${destroyed.length}`);
  destroyed.sort().forEach((x) => console.log(`-> ${x[0]}`));
}

starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
