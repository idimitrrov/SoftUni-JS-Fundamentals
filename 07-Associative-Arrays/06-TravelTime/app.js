/* 06. Travel Time - https://judge.softuni.org/Contests/1322/Objects-and-Classes-Exercise

Write a function that collects and orders information about traveling destinations.
As input you will receive an array of strings.
Each string will consist of the following information with format:
"Country name > Town name > Travel cost"
Country name will be unique string, Town name will also be unique string, Travel cost will be a number.
If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may have several Towns to visit.
After you finish the organizational part, you need to let Steven know which destination point to visit first. The order will be as follows:  First sort Country names alphabetically and then sort by lowest Travel cost.

*/

function travelTime(array) {
  let countries = {};
  array.forEach((line) => {
    let [country, city, currentPrice] = line.split(" > ");
    currentPrice = Number(currentPrice);
    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
      countries[country][city] = currentPrice;
    } else {
      let countryObj = countries[country];
      if (!countryObj.hasOwnProperty(city)) {
        countryObj[city] = currentPrice;
      } else {
        let oldPrice = countryObj[city];
        if (oldPrice > currentPrice) {
          countryObj[city] = currentPrice;
        }
      }
    }
  });
  debugger;
  let sortedCountries = Object.entries(countries).sort(sortCountries);
  for (let [country, cities] of sortedCountries) {
    let sortedCities = Object.entries(cities).sort(sortCities);
    let output = `${country} -> `;
    for (let [cityName, cityPrice] of sortedCities) {
      output += `${cityName} -> ${cityPrice} `;
    }
    console.log(output);
  }

  function sortCountries(firstCountry, secondCountry) {
    let firstName = firstCountry[0];
    let secondName = secondCountry[0];
    return firstName.localeCompare(secondName);
  }

  function sortCities(firstCity, secondCity) {
    let firstPrice = firstCity[1];
    let secondPrice = secondCity[1];
    return firstPrice - secondPrice;
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
