/* 05. Pound to Dollars - https://judge.softuni.org/Contests/1229
 

Write a function that converts 
British pounds to dollars formatted to the 3rd decimal point. 
1 British Pound = 1.31 Dollars 
*/

function convertCurrency(pounds) {
  let dollars = (pounds * 1.31).toFixed(3);
  console.log(dollars);
}

convertCurrency(39);
