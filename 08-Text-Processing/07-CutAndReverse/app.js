/*  07 - Cut and Reverse https://judge.softuni.org/Contests/Practice/Index/1706#0

The input will be a single string.
Write a function that cuts the given string into half and reverse the two halves. 
Print each half on a separate line.

*/
function cutAndReverse(string) {
  let middleIndex = Math.floor(string.length / 2);

  let firstHalf = string.slice(0, middleIndex);
  let secondHalf = string.slice(middleIndex);

  let reversedFirstHalf = firstHalf.split("").reverse().join("");
  let reversedSecondHalf = secondHalf.split("").reverse().join("");

  console.log(reversedFirstHalf);
  console.log(reversedSecondHalf);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
