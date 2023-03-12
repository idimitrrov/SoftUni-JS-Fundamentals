/* 03. Town Info - https://judge.softuni.org/Contests/1229
    
You will be given 3 parameters. The first parameter will be the name of the town (string), 
the second – the population (number), and the third the area (number). 

Print the result in the following format:
"Town {town name} has population of {population} and area {area} square km."


*/

function pritntTownInfo(town, population, area) {
  let townObject = {
    name: town,
    population: population,
    area: area,
  };

  console.log(
    `Town ${townObject["name"]} has population of ${townObject["population"]} and area ${townObject["area"]} square km.`
  );
}

pritntTownInfo("Sofia", 1286383, 492);
