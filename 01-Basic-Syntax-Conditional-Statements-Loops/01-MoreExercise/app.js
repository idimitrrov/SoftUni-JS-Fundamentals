function sortNumbers(a, b, c) {
  const sorted = [a, b, c].sort((x, y) => y - x);
  sorted.forEach((num) => console.log(num));
}
