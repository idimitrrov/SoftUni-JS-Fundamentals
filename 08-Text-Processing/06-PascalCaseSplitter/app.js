/*  06. Pascal Case Splitter https://judge.softuni.org/Contests/Practice/Index/1706#0

You will receive a single string. 
This string is written in PascalCase format. Your task here is to split this string by every word in it. 
Print them joined by comma and space.

*/

function pascalCaseSplitter(string) {
  let outputString = "";

  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      outputString += `${string[i]}`;
    } else if (checkForUpperCase(string[i])) {
      outputString += `, ${string[i]}`;
    } else {
      outputString += `${string[i]}`;
    }
  }

  function checkForUpperCase(a) {
    return a.startsWith(a[0].toUpperCase());
  }

  console.log(outputString);
}

// -----------------------------------------------------------------

function pascalCaseSplitterTwo(string) {
  let result = string.match(/([A-Z]?[^A-Z]*)/g);
  result.pop();
  console.log(result.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
