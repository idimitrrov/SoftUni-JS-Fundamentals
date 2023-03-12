/* 04. Convert Meters to Kilometres - https://judge.softuni.org/Contests/1229
    
You will be given a number that will be the distance in meters. 

Write a program that converts meters to kilometers formatted to the second decimal point.

*/

function convertDistance(number) {
  let distanceInKM = (number / 1000).toFixed(2);
  console.log(distanceInKM);
}

convertDistance(798);
