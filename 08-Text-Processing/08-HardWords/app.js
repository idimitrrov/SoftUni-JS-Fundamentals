/*  08 - Hard Words https://judge.softuni.org/Contests/Practice/Index/1706#0

You will receive an array which holds string and another array. 
The string is a letter from young boy who does not yet know some words and you have to help him. The letter has few holes, these holes are the words unknown to the boy and you must fill them with strings from the array you receive at the second index. 
If a length of the hole is 4 you have to replace it with string with the same length and so on…


*/
function hardWords(array) {
  array[1].forEach((line) => {
    let targetSymbols = "";
    for (let i = 0; i < line.length; i++) {
      hole += "_";
    }
    let template = `\\b${targetSymbols}\\b`;

    let regEx = new RegExp(template, "m");
    array[0] = array[0].replace(regEx, line);
  });

  console.log(array[0]);
}

hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
