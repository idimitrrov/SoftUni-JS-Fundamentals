/*  09 - Password Generator https://judge.softuni.org/Contests/Practice/Index/1706#0

For this problem you have to write a function which generates a password depending on input information. As such, you will be given an array of three strings. The first two strings will be at least 10 characters long, the third one will be one word.
Your task here is to concatenate the first two strings and replace all vowels in the concatenated string with symbols from the third string. First vowel must be replaced with the first character from third string, second vowel with the second character from that string and so on. If the third string is less than the vowels count in the newly formed string you need to start over with character on 0 index. When you replace all vowels reverse the new password and print it on the console in a format:
 'Your generated password is {password}'
Note: All replaced vowels with the characters from the third string must be upper-case, the rest of the characters are lower-case.

*/
function generatePassword(array) {
  const vowelCodes = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117];
  let concatString = array[0] + array[1];
  let index = -1;
  const replacer = array[2].split("");
  concatString = concatString.split("").map((x) => {
    if (vowelCodes.includes(x.charCodeAt(0))) {
      index += 1;
      if (index >= replacer.length) {
        index = 0;
      }

      return replacer[index].toUpperCase();
    }
    return x;
  });

  console.log(`Your generated password is ${concatString.reverse().join("")}`);
}

generatePassword(["ilovepizza", "ihatevegetables", "orange"]);
