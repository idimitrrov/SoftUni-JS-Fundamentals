function getNameofLastDigit(number) {
  const lastDigit = number % 10;
  let numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  console.log(numbers[lastDigit]);
}
getNameofLastDigit(13);
