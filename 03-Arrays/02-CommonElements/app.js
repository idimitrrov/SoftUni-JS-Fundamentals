/* 02. Common Elements - https://judge.softuni.bg/Contests/1256/Arrays-Exercise

Write a function, which prints common elements in two string arrays.
Print all matches on separate lines. Compare the first array with the second array.
*/

function checkForCommon(a, b) {
  let commonArray = [];
  a.forEach((e1) =>
    b.forEach((e2) => {
      if (e1 === e2) {
        commonArray.push(e1);
      }
    })
  );
  for (let i = 0; i < commonArray.length; i++) {
    console.log(commonArray[i]);
  }
}

checkForCommon(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
